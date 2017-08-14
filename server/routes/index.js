const express = require('express');
const router = express.Router();
const getDomainFromUrl = require('../helpers/getDomainFromUrl');
const getDomainObject = require('../helpers/getDomainObjectFromJson');
const crawlUrl = require('../commonCrawler').crawlUrl;
const mongoose = require('mongoose');
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwtSimple = require('jwt-simple');
const mailer = require('../services/mailer');
const tokenConfig = {
  auth: {
    secretOrKey: 'secretOrKey'
  }
};

function sendError(response) {
  response.status(500).send('Website not found in your list');
}

router.post('/getPriceFromUrl', function (req, res) {
  let cartUrl = req.body.url;
  let domainUrl = getDomainFromUrl(req.body.url);
  let domainData = getDomainObject(domainUrl).length ? getDomainObject(domainUrl)[0] : false;
  domainData !== false ? crawlUrl(domainData, cartUrl, domainUrl, res) : sendError(res);
});

router.post('/signup', function (req, res, next) {
  let emailTokenWithDots = jwtSimple.encode(req.body.email, tokenConfig.auth.secretOrKey);
  let emailToken = emailTokenWithDots.split('.').join("");
  UserModel.findOne({'email': req.body.email})
    .then(user => {
      if (user) {
        console.error('user is exist in DB');
        return res.status(409).send('User with such email already exsist');
      } else {
        let password = req.body.password;
        let user = new UserModel({
          email: req.body.email,
          confirmEmailToken: emailToken,
          is_confirm: false
        });
        bcrypt.hash(password, 10, function (err, hash) {
          if (err) {
            res.sendStatus(500)
          } else {
            user.password = hash;
            user.save(function (err) {
              if (err) {
                res.sendStatus(500)
              } else {
                let confirmLink = req.protocol + "://" + req.get('host') + "/confirm/" + emailToken;
                mailer(req, res, confirmLink);
              }
            })
          }
        });
      }
    })
    .catch(err => {
      res.status(500);
      return res.json(err);
    });
});

router.post('/signin', function (req, res, next) {
  console.log(req.body);
  res.send(200);
});

router.post("/confirmEmail", function (req, res, next) {
  const confirmToken = req.body.confirmId;
  const mainToken = UserModel.generateJwt();

  UserModel.findOne({confirmEmailToken: confirmToken}, function (err, doc) {
    if (err) {
      console.log(doc);
      console.log("Something wrong when updating data!");
    } else {
      doc.is_confirm = true;
      doc.mainToken = mainToken;
      doc.save();
      console.log('Email confirmed');
      res.json({
        "confirmed": true,
        "token": mainToken
      });
    }
  });
});

module.exports = router;

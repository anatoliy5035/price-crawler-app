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
const config = require('../config');
const checkUser = require('../middleware/checkUser');

function sendError(response) {
  response.status(500).send('Website not found in your list');
}

router.post('/getPriceFromUrl', (req, res) => {
  let cartUrl = req.body.url;
  let domainUrl = getDomainFromUrl(req.body.url);
  let domainData = getDomainObject(domainUrl).length ? getDomainObject(domainUrl)[0] : false;
  domainData !== false ? crawlUrl(domainData, cartUrl, domainUrl, res) : sendError(res);
} );

router.post('/signUp', (req, res, next) => {
  let emailTokenWithDots = jwtSimple.encode(req.body.email, config.get('auth').secretOrKey);
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

router.post('/signIn', (req, res, next) => {
  let user = req.body;
  UserModel.findOne({
    email: user.email,
    is_confirm: true
  }, function (err, userDb) {
    if (userDb) {
      userDb.checkPassword(user.password, function (err, isMatch) {
        if (isMatch) {
          const mainToken = UserModel.generateJwt(user.email, res);
        } else {
          let errText = 'Passwords not match';
          console.error(errText);
          res.status(401).send(errText);
        }
      });
    } else {
      let errText = 'User not found';
      console.error(errText);
      res.status(401).send(errText);
    }
  })
    .catch(err => console.error('User not found'));
});

router.post('/logOut', (req, res, next) => {
  res.send(200);
});

router.post('/getToken', (req, res, next) => {
  const mainToken = UserModel.generateJwt();
  res.json({token: mainToken});
});

router.post('/confirmEmail', (req, res, next) => {
  UserModel.findOne({confirmEmailToken: req.body.confirmId}, function (err, doc) {
    if (err) {
      console.error("Something wrong when updating data!");
    } else {
      doc.is_confirm = true;
      doc.save();
      console.log('Email confirmed');
      res.json({
        "confirmed": true
      });
    }
  });
});

router.post('/userIdentify', checkUser, (req, res, next) => {
  UserModel.findOne({email: req.decoded.email})
    .then((user) => {
      return res.json({'userEmail': user.email});
    })
    .catch(err => {
      res.status(500).send('user with this email not found in DB');
    });
});

router.post('/replacePassword', checkUser, (req, res, next) => {
  let email = req.decoded.email;
  UserModel.findOne({
    email: email,
  }, function (err, doc) {
    if (doc) {
      doc.replacePassword(req, doc, function (err, isReplaced) {
        if (isReplaced) {
          let textInfo = 'Password replaced';
          console.log(textInfo);
          res.send(textInfo).status(200);
        } else {
          console.error(err);
          res.status(500).send(err);
        }
      });
    } else {
      let errText = 'User not found';
      console.error(errText);
      res.status(401).send(errText);
    }
  });
});

module.exports = router;

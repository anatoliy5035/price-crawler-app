const express = require('express');
const router = express.Router();
const getDomainFromUrl = require('../helpers/getDomainFromUrl');
const getDomainObject = require('../helpers/getDomainObjectFromJson');
const crawlUrl = require('../commonCrawler').crawlUrl;
const mongoose = require('mongoose');
const UserModel = require('../models/user');
const jwt = require('jwt-simple');
const mailer = require('../services/mailer');
const tokenConfig = {auth: {
  secretOrKey: 'secretOrKey'
}};

function sendError(response) {
    response.status(500).send('Website not found in your list');
}

router.post('/getPriceFromUrl', function (req, res) {
  let cartUrl = req.body.url;
  let domainUrl = getDomainFromUrl(req.body.url);
  let domainData = getDomainObject(domainUrl).length ? getDomainObject(domainUrl)[0] : false;
      domainData !== false ? crawlUrl(domainData, cartUrl, domainUrl, res): sendError(res);
});

router.post('/verifyEmail', function (req, res) {
  let token = jwt.encode(req.body.email, tokenConfig.auth.secretOrKey);
  UserModel.findOne({'email': req.body.email})
    .then(user => {
      if (user) {
          return res.status(500).send('User with such email already exsist');
        } else {
        let newUser = new UserModel({
          email: req.body.email,
          token: token,
          is_confirm: false
        });

        newUser.save(function (err) {
          if (err) {
            console.log(err);
          } else {
            let confirmLink = req.protocol + "://" + req.get('host') + "/confirm/" + newUser.token;
            mailer(req, res, confirmLink);
          }
        });
        }
      })
    .catch(err => {
      res.status(500);
      return res.json(err);
  });
});

router.get("/confirm/:token", function (req, res, next) {
  const token = req.params.token;

  UserModel.findOneAndUpdate({'token': token},  {$set:{is_confirm: true}}, {new: true}, function(err, doc){
    if(err){
      console.log("Something wrong when updating data!");
    }
    res.status(200);
    return res.json('Email confirmed');
  });
});

module.exports = router;

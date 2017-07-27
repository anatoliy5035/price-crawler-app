const Mailgun = require('mailgun-js');
const config = require('../config');
const api_key = config.get('mailerData').api_key;
const domain = config.get('mailerData').domain;
const from_who = config.get('mailerData').from_who;
const subject = config.get('mailerData').subject;
const fs = require('fs');
const emailBody = require('./email-body');

const mailgun = new Mailgun({
  apiKey: api_key,
  domain: domain
});

module.exports = function (req, res, confirmLink) {
  const email = req.body.email;

  let data = {
    from: from_who,
    to: email,
    subject: subject,
    html: emailBody(confirmLink)
  };

  mailgun.messages().send(data, function (err, body) {
    if (err) {
      console.log("got an error: ", err);
    } else {
      console.log(body);
    }
  });

  res.status(200).send('Email sent');
};

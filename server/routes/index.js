const express = require('express');
const router = express.Router();
const getDomainFromUrl = require('../helpers/getDomainFromUrl');
const getDomainObject = require('../helpers/getDomainObjectFromJson');
const crawlUrl = require('../commonCrawler').crawlUrl;

function sendError(response) {
    response.status(500).send('Website not found in your list');
}

router.post('/getPriceFromUrl', function (req, res, next) {
  let cartUrl = req.body.url;
  let domainUrl = getDomainFromUrl(req.body.url);
  let domainData = getDomainObject(domainUrl).length ? getDomainObject(domainUrl)[0] : false;
  domainData !== false ? crawlUrl(domainData, cartUrl, domainUrl, res): sendError(res);
});

router.post('/getPriceFromUrl', function (req, res, next) {
  let cartUrl = req.body.url;
  let domainUrl = getDomainFromUrl(req.body.url);
  let domainData = getDomainObject(domainUrl).length ? getDomainObject(domainUrl)[0] : false;
  domainData !== false ? crawlUrl(domainData, cartUrl, domainUrl, res): sendError(res);
});

router.get('/', function (req, res) {
  res.redirect('/login');
});

module.exports = router;

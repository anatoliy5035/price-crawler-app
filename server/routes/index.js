const express = require('express');
const router = express.Router();
const getDomainFromUrl = require('../helpers/getDomainFromUrl');

const getDomainData = require('../commonCrawler').getDomainData;
const crawlUrl = require('../commonCrawler').crawlUrl;


router.post('/getPriceFromUrl', function (req, res, next) {
    let cartUrl = req.body.url;
    let domainUrl = getDomainFromUrl(req.body.url);
    let domainData = getDomainData(domainUrl)[0];
    let {id, name, productName, img, divBlock, priceElement, domain} = domainData;

    crawlUrl(cartUrl, productName,img, name, divBlock, priceElement, res, domainUrl);
});

module.exports = router;
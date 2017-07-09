const express = require('express');
const router = express.Router();
const getDomainFromUrl = require('../helpers/getDomainFromUrl');


router.post('/getPriceFromUrl', function (req, res, next) {
  let domain = getDomainFromUrl(req.body.url);
    res.json({
        domain: domain,
        price: 120
      });
});

module.exports = router;
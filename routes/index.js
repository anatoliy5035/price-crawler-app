const express = require('express');
const router = express.Router();
const getDomainFromUrl = require('../helpers/getDomainFromUrl');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/getPriceFromUrl', function (req, res, next) {
  let domain = getDomainFromUrl(req.body.inputValue);
  res.send(domain);
});

module.exports = router;

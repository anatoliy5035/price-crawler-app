const express = require('express');
const router = express.Router();
const getDomenFromUrl = require('../helpers/getDomenFromUrl');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/getPriceFromUrl', function (req, res, next) {
  getDomenFromUrl(req.body.inputValue);
  // res.send('hello');
});

module.exports = router;

const express = require('express');
const router = express.Router();
// const getDomainFromUrl = require('../../helpers/getDomainFromUrl');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });
router.post('/getPriceFromUrl', function (req, res, next) {
  console.log(req.body);
  // let domain = getDomainFromUrl(req.body.inputValue);
  res.json({
      domain: 'domain',
      text: 'taobao'
      });
});

module.exports = router;
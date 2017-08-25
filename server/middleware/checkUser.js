const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');

module.exports = (req, res, next) => {
  let encodedToken = req.headers.authorization.split(' ')[1];
  if (encodedToken !== null || encodedToken !== 'null') {
    jwt.verify(encodedToken, config.get('auth').secretOrKey, function(err, decoded) {
      if (err) {
        return res.status(500).send('user token not found');
      }
      req.decoded = decoded;
      // if (decoded.exp <= Date.now()) {
      //   res.end('Access token has expired', 400);
      // }
      next();
    });
  } else {
    return res.status(403).send({
      "error": true
    });
  }
};

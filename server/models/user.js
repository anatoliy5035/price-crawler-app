const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ObjectId = mongoose.Schema.Types.ObjectId;
const jwtSimple = require('jwt-simple');
const passport = require('passport');
const config = require('../config');

const User = new mongoose.Schema({
  _id: {type: ObjectId, index: true, required: true, auto: true},
  displayName: String,
  confirmEmailToken: {type: String},
  email: {type: String, required: true, unique: 'Такой e-mail уже существует'},
  password: {type: String, required: true},
  is_confirm: {type: Boolean, required: true},
  mainToken: {type: String}
});

User.methods.checkPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err, isMatch);
    cb(null, isMatch);
  });
};

User.statics.generateJwt = function(email, response) {
  const expiry = new Date();
  this.find({email: email})
    .then(res => {
      expiry.setDate(expiry.getDate() + 20);
      const  jwt = jwtSimple.encode({
        email: res[0].email,
        exp: parseInt(expiry.getTime() / 1000),
      }, config.get('auth').secretOrKey);
      response.json({token: jwt});
    }).catch(err => {
      console.error(err+ 'User with such email not found');
  });
};

// console.log(User.generateJwt);

// User.virtual('password')
//   .set(function (password) {
//     this._plainPassword = password;
//     if (password) {
//       this.salt = crypto.randomBytes(128).toString('base64');
//       this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
//     } else {
//       this.salt = undefined;
//       this.passwordHash = undefined;
//     }
//   })
//   .get(function () {
//     return this._plainPassword;
//   });


module.exports = mongoose.model('user', User);


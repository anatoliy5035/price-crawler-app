const mongoose = require('mongoose');
const crypto = require('crypto');
const ObjectId = mongoose.Schema.Types.ObjectId;
const jwtSimple = require('jwt-simple');
const passport = require('passport');

const User = new mongoose.Schema({
  _id: {type: ObjectId, index: true, required: true, auto: true},
  displayName: String,
  confirmEmailToken: {type: String},
  email: {type: String, required: true, unique: 'Такой e-mail уже существует'},
  password: {type: String, required: true, select: false},
  is_confirm: {type: Boolean, required: true},
  mainToken: {type: String}
});

User.statics.generateJwt = function() {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 20);
  return jwtSimple.encode({
    email: this.email,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET");
  return expiry
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

// User.methods.checkPassword = function (password) {
//   if (!password) return false;
//   if (!this.passwordHash) return false;
//   return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1') == this.passwordHash;
// };

module.exports = mongoose.model('user', User);


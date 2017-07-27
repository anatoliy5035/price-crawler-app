const mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
const uuid = require('node-uuid');


const verificationTokenSchema = new mongoose.Schema({
  _userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  token: {type: String, required: true},
  createdAt: {type: Date, required: true, default: Date.now, expires: '4h'}
});

// const verificationTokenSchema = require('../models/verificationSchema');

// console.log(verificationTokenSchema);

verificationTokenSchema.methods.createVerificationToken = function (done) {
  const verificationToken = this;
  const token = uuid.v4();
  console.log(token)
  verificationToken.set('token', token);
  verificationToken.save( function (err) {
    if (err) return done(err);
    return done(null, token);
    console.log("Verification token", verificationToken);
  });
};

module.exports = mongoose.model('verificationToken', verificationTokenSchema);


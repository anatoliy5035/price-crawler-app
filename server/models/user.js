const mongoose = require('mongoose');
const uuid = require('node-uuid');
const ObjectId = mongoose.Schema.Types.ObjectId;

const User = new mongoose.Schema({
  // _userId: {type: ObjectId, required: true, ref: 'User'},
  email: {type: String, required: true},
  token: {type: String, required: true},
  is_confirm: {type: Boolean, required: true}
});

// const verificationTokenSchema = require('../models/verificationSchema');
// console.log(verificationTokenSchema);

module.exports = mongoose.model('user', User);


const verificationTokenModel = require('../models/verificationSchema');

exports.verifyUser = function(token, done) {
  verificationTokenModel.findOne({token: token}, function (err, doc) {
      if (err) return done(err);
      userModel.findOne({_id: doc._userId}, function (err, user) {
        if (err) return done(err);
        user["verified"] = true;
        user.save(function (err) {
          done(err);
        })
      });
    });
};


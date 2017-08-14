module.exports = {
  isLogged: function (req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/auth/signin');
    }
  },

  notLoggedIn: function (req, res, next) {
    if (!req.isAuthenticated())
      return next();
    res.redirect('/');
  }
};

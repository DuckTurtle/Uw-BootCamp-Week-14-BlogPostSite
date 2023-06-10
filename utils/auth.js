const checkAuth = (req, res, next) => {
    // makes user log in if they aint
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = checkAuth;
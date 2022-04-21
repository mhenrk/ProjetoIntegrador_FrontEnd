module.exports = function(req, res, next) {
    if(!req.session.is_admin) {
        return res.redirect('/');
    }
      return next();
  };
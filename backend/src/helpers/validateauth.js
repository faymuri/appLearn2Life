const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'No autorizado, debe iniciar session primero');
    res.redirect('/api/users/signin');
}

module.exports = helpers;
const helpers = {};

const User = require('../models/User');


helpers.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'No autorizado, debe iniciar session primero');
    res.redirect('/users/signin');
}

helpers.isProfesor = (req, res, next) => {
    if (req.isProfesor()){
        return next();
    }
    req.flash('error_msg', 'No autorizado, debe iniciar session primero');
    res.redirect('/users/signin');
}

module.exports = helpers;
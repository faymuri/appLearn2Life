const usersCtrl = {};

const passport = require('passport');

const User = require('../models/User');


usersCtrl.renderSignupForm = (req, res) => {
    res.render('users/signup');
};


usersCtrl.signup = async (req, res) => {
    const errors = [];
    const {email, name, password, confirm_password} = req.body;
    if (password != confirm_password) {
        errors.push ({text: 'contraseñas no coinciden'});
    };
    if (password.length < 8) {
        errors.push ({text: 'Contraseña debe tener almenos 8 caracteres'});
    };
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            email,
            name
        });
    } else {
        const emailUser = await User.findOne({email: email}).lean();
        if (emailUser) {
            req.flash('error_msg', 'El email ingresado ya esta en uso');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({email, name, password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg', 'El usuario ha sido registrado exitosamente')
            res.redirect('/users/signin');
        };
    };
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('login', {
    failureRedirect: '/api/users/signin',
    successRedirect: '/api/assignments',
    failureFlash: true
});


usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Has cerrado session con exito.');
    res.redirect('/api/users/signin');
};



module.exports = usersCtrl;
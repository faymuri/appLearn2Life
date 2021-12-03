const institutionsCtrl = {};

const passport = require('passport');

const Institution = require('../models/Institution');


institutionsCtrl.renderSignupForm = (req, res) => {
    res.render('institutions/signup');
};


institutionsCtrl.signup = async (req, res) => {
    const errors = [];
    const {email, name, password, confirm_password, documentId, institutionCode} = req.body;
    if (password != confirm_password) {
        errors.push ({text: 'contraseñas no coinciden'});
    };
    if (password.length < 8) {
        errors.push ({text: 'Contraseña debe tener almenos 8 caracteres'});
    };
    if (errors.length > 0) {
        res.render('institutions/signup', {
            errors,
            email,
            name
        });
    } else {
        const emailInstitution = await Institution.findOne({email: email}).lean();
        if (emailInstitution) {
            req.flash('error_msg', 'El email ingresado ya esta en uso');
            res.redirect('/institutions/signup');
        } else {
            const newInstitution = new Institution({email, name, password, documentId, institutionCode});
            newInstitution.institutionCode = (newInstitution.name + newInstitution.documentId)
            newInstitution.password = await newInstitution.encryptPassword(password);
            await newInstitution.save();
            req.flash('success_msg', 'La institucion ha sido registrado exitosamente')
            res.redirect('/institutions/signin');
        };
    };
};

institutionsCtrl.renderSigninForm = (req, res) => {
    res.render('institutions/signin');
};

institutionsCtrl.renderAdmin =  (req, res) => {
    //const institutionCode = await Institution.findById({institutionCode: req.institution.id}).lean();
    res.render('institutions/admin')
};

institutionsCtrl.signin = passport.authenticate('loginAdmin', {
    failureRedirect: '/institutions/signin',
    successRedirect: '/institutions/admin',
    failureFlash: true
});


institutionsCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Has cerrado session con exito.');
    res.redirect('institutions/signin');
};



module.exports = institutionsCtrl;
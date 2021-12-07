const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');
const Institution = require('../models/Institution');

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    
    const user = await User.findOne({email});


    if (!user) {
        return done(null, false, {message: 'Email no encontrado'});
    } else {
        const match = await user.matchPassword(password);
        if(match) {
            return done(null, user);
        } else {
            return done(null, false, {message: 'Contraseña incorrecta'});
        };
    };   
    
}));

passport.serializeUser((user, done) => {
    done(null, user);
});



passport.deserializeUser((id, done) =>{
    User.findById(id, (err, user) => {
        done(err, user);
    });
});



passport.use('loginAdmin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    
    const institution = await Institution.findOne({email});
    if (!institution) {
        return done(null, false, {message: 'Email no encontrado'});
    } else {
        const match = await institution.matchPassword(password);
        if(match) {
            return done(null, institution);
        } else {
            return done(null, false, {message: 'Contraseña incorrecta'});
        };
    };   
    
}));

passport.serializeUser((institution, done) => {
    done(null, institution.id);
});


passport.deserializeUser((id, done) =>{
    Institution.findById(id, (err, user) => {
        done(err, user);
    });
});


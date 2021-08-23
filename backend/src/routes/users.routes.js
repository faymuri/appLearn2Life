const {Router} = require('express');
const router = Router();

const {renderSignupForm, signup, renderSigninForm, signin, logout } = require('../controllers/users.controllers');

router.route('/users/signup')
    .get(renderSignupForm);

router.route('/users/signup')
    .post(signup);

router.route('/users/signin')
    .get(renderSigninForm);

router.route('/users/signin')
    .post(signin);

router.route('/users/logout')
    .get(logout);


module.exports = router;
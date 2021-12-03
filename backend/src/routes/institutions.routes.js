const {Router} = require('express');
const router = Router();

const {renderSignupForm, signup, renderSigninForm, signin, renderAdmin, logout } = require('../controllers/institutions.controller');

router.route('/institutions/signup')
    .get(renderSignupForm);

router.route('/institutions/signup')
    .post(signup);

router.route('/institutions/signin')
    .get(renderSigninForm);

router.route('/institutions/signin')
    .post(signin);

router.route('/institutions/admin')
    .get(renderAdmin)

router.route('/institutions/logout')
    .get(logout);


module.exports = router;
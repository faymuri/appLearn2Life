const { Router } = require('express');
const router = Router();


const {renderRegisterForm, renderLoginForm, renderAdmRegisterForm, renderAdmLoginForm, } = require('../controllers/users.controllers');

router.get('/users/register', renderRegisterForm);
router.get('/users/login',renderLoginForm);
router.get('/users/register2', renderAdmRegisterForm);
router.get('/users/login2', renderAdmLoginForm);

module.exports = router;
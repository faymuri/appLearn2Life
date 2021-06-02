const {Router} = require('express');
const router = Router();

const {renderRegisterForm, } = require('../controllers/users.controllers');

router.get('/users/register', renderRegisterForm)


module.exports = router;
const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout } = require('../controllers/index.controllers')

router.route('/')
    .get(renderIndex);

router.route('/about')
    .get(renderAbout);

module.exports = router;
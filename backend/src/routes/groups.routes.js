const {Router} = require('express');
const router = Router();

const {renderGroupForm, createNewGroup, renderGroups, renderEditForm, updateGroup, deleteGroup} = require('../controllers/groups.controller');

const {isAuthenticated} = require('../helpers/validateauth');


// New assignments

router.route('/groups/add')
    .get(isAuthenticated, renderGroupForm);

router.route('/groups/new-group')
    .post(isAuthenticated, createNewGroup);


// Get all assignments

router.route('/groups')
    .get(isAuthenticated, renderGroups);

// Edit assignments

router.route('/groups/edit/:id')
    .get(isAuthenticated, renderEditForm);

router.route('/groups/edit/:id')
    .put(isAuthenticated, updateGroup);

// Delete assignments

router.route('/groups/delete/:id')
    .delete(isAuthenticated, deleteGroup);



module.exports = router;
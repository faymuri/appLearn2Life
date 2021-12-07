const {Router} = require('express');
const router = Router();

const {renderAssignmentForm, createNewAssignment, renderAssignments, renderEditForm, updateAssignment, deleteAssignment } = require('../controllers/assignments.controllers');

const {isAuthenticated} = require('../helpers/validateauth');


// New assignments

router.route('/assignments/add')
    .get(isAuthenticated, renderAssignmentForm);

router.route('/assignments/new-assignment')
    .post(isAuthenticated, createNewAssignment);


// Get all assignments

router.route('/assignments/:id')
    .get(isAuthenticated, renderAssignments);


// Edit assignments

router.route('/assignments/edit/:id')
    .get(isAuthenticated, renderEditForm);

router.route('/assignments/edit/:id')
    .put(isAuthenticated, updateAssignment);

// Delete assignments

router.route('/assignments/delete/:id')
    .delete(isAuthenticated, deleteAssignment);

module.exports = router;
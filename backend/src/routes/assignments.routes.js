const {Router} = require('express');
const router = Router();

const {renderAssignmentForm, createNewAssignment, renderAssignments, renderEditForm, updateAssignment, deleteAssignment } = require('../controllers/assignments.controllers');

//const {isAuthenticated} = require('../helpers/validateauth');


// New assignments

router.route('/assignments/add')
    .get(renderAssignmentForm);

router.route('/assignments/new-assignment')
    .post(createNewAssignment);


// Get all assignments

router.route('/assignments')
    .get(renderAssignments);

// Edit assignments

router.route('/assignments/edit/:id')
    .get(renderEditForm);

router.route('/assignments/edit/:id')
    .put(updateAssignment);

// Delete assignments

router.route('/assignments/delete/:id')
    .delete(deleteAssignment);

module.exports = router;
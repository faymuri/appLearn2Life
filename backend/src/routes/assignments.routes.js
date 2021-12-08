const {Router} = require('express');
const multer = require('multer');
const router = Router();

const {renderAssignmentForm, createNewAssignment, renderAssignments, renderEditForm, updateAssignment, deleteAssignment } = require('../controllers/assignments.controllers');

const {isAuthenticated} = require('../helpers/validateauth');

const upload = multer({
    dest: 'uploads/',
});
// New assignments

router.route('/assignments/add/:id')
    .get(isAuthenticated, renderAssignmentForm);

router.route('/assignments/new-assignment/:id' , upload)
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
const {Router} = require('express');
const router = Router();

const {renderAssignmentForm, createNewAssignment, renderAssignments, renderEditForm, updateAssignment, deleteAssignment } = require('../controllers/assignments.controllers');

const {isAuthenticated} = require('../helpers/validateauth');


// New assignments
router.get('/assignments/add', isAuthenticated, renderAssignmentForm);

router.post('/assignments/new-assignment', isAuthenticated, createNewAssignment);


// Get all assignments

router.get('/assignments', isAuthenticated, renderAssignments);

// Edit assignments

router.get('/assignments/edit/:id', isAuthenticated, renderEditForm);

router.put('/assignments/edit/:id', isAuthenticated, updateAssignment);

// Delete assignments

router.delete('/assignments/delete/:id', isAuthenticated, deleteAssignment);

module.exports = router;
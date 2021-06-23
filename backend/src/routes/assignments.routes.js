const {Router} = require('express');
const router = Router();
const {renderAssignmentForm, createNewAssignment, renderAssignments, renderEditForm, updateAssignment, deleteAssignment } = require('../controllers/assignments.controllers')


// New assignments
router.get('/assignments/add', renderAssignmentForm);

router.post('/assignments/new-assignment', createNewAssignment);


// Get all assignments

router.get('/assignments', renderAssignments);

// Edit assignments

router.get('/assignments/edit/:id', renderEditForm);

router.put('/assignments/edit/:id', updateAssignment);

// Delete assignments

router.delete('/assignments/delete/:id', deleteAssignment);

module.exports = router;
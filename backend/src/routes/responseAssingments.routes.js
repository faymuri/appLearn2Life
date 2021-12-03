const {Router} = require('express');
const router = Router();

const {renderResponseAssignmentForm, createNewResponseAssignment, renderResponseAssignments, renderEditForm, updateResponseAssignments, deleteResponseAssignments } = require('../controllers/responseAssignments.controller');

const {isAuthenticated} = require('../helpers/validateauth');


// New assignments

router.route('/responseAssignment/add')
    .get(isAuthenticated, renderResponseAssignmentForm);

router.route('/responseAssignment/new-assignment')
    .post(isAuthenticated, createNewResponseAssignment);


// Get all assignments

router.route('/responseAssignment')
    .get(isAuthenticated, renderResponseAssignments);

// Edit assignments

router.route('/responseAssignment/edit/:id')
    .get(isAuthenticated, renderEditForm);

router.route('/responseAssignment/edit/:id')
    .put(isAuthenticated, updateResponseAssignments);

// Delete assignments

router.route('/responseAssignment/delete/:id')
    .delete(isAuthenticated, deleteResponseAssignments);

module.exports = router;
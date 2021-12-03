const {Router} = require('express');
const router = Router();

const {renderCourseForm, createNewCourse, renderCourses, renderEditForm, updateCourse, deleteCourse } = require('../controllers/assignments.controllers');

const {isAuthenticated} = require('../helpers/validateauth');


// New assignments

router.route('/courses/add')
    .get(isAuthenticated, renderCourseForm);

router.route('/courses/new-course')
    .post(isAuthenticated, createNewCourse);


// Get all assignments

router.route('/courses')
    .get(isAuthenticated, renderCourses);

// Edit assignments

router.route('/courses/edit/:id')
    .get(isAuthenticated, renderEditForm);

router.route('/courses/edit/:id')
    .put(isAuthenticated, updateCourse);

// Delete assignments

router.route('/courses/delete/:id')
    .delete(isAuthenticated, deleteCourse);

module.exports = router;
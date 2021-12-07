const coursesCtrl = {};

const Course = require('../models/Course');


coursesCtrl.renderCourseForm =  (req, res) => {
    res.render('courses/new-course');
};

coursesCtrl.createNewCourse = async (req, res) => {
    const {title, description, groupId} = req.body;
    const newCourse = new Course({title, description, groupId});
    await newCourse.save();
    console.log (newCourse, req.params.id);
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/courses/:id');
};

coursesCtrl.renderCourses = async (req, res) => {
    const courses = await Course.find({groupId: req.params.id}).lean();
    console.log(courses, req.params.id);
    res.render('courses/all-courses', { courses });
};

coursesCtrl.renderEditForm =  async (req, res) => {
    const course = await Course.findById(req.params.id).lean();
    console.log(course);
    //if (course.user != req.user.id) {
    //    req.flash('error_msg', 'Acceso no autorizado');
    //    return res.redirect('/courses');
    //};
    res.render('courses/edit-course', { course });
};

coursesCtrl.updateCourse = async (req, res) => {
    const { title, description, courseId } = req.body;
    await Course.findByIdAndUpdate(req.params.id, {title, description, courseId}).lean();
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/courses');
};

coursesCtrl.deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/courses');
};

module.exports = coursesCtrl;
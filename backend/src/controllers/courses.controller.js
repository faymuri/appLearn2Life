const coursesCtrl = {};

const Course = require('../models/Course');


coursesCtrl.renderCourseForm =  (req, res) => {
    res.render('Courses/new-course');
};

coursesCtrl.createNewCourse = async (req, res) => {
    const {title, description} = req.body;
    const newCourse = new Course({title, description});
    newCourse.user = req.user.id;
    await newCourse.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/assignments');
};

coursesCtrl.renderCourses = async (req, res) => {
    const courses = await Course.find({user: req.user.id}).sort({createdAt: 'desc'}).sort({updatedAt: 'asc'}).lean();
    res.render('courses/all-courses', { courses });
};

coursesCtrl.renderEditForm =  async (req, res) => {
    const course = await Course.findById(req.params.id).lean();
    if (course.user != req.user.id) {
        req.flash('error_msg', 'Acceso no autorizado');
        return res.redirect('/courses');
    };
    res.render('courses/edit-course', { course });
};

coursesCtrl.updateCourse = async (req, res) => {
    const { title, description } = req.body;
    await Course.findByIdAndUpdate(req.params.id, {title, description}).lean();
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/courses');
};

coursesCtrl.deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/courses');
};

module.exports = coursesCtrl;
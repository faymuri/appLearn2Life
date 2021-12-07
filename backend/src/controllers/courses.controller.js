const coursesCtrl = {};

const Course = require('../models/Course');
const Group = require('../models/Group');
const User = require('../models/User');




coursesCtrl.renderCourseForm =  async (req, res) => {
    const groupId = req.params.id;
    console.log({groupId});
    res.render('courses/new-course', {groupId});
    console.log({groupId});
};



coursesCtrl.createNewCourse = async (req, res) => {
    const {title, description, groupId} = req.body;
    const newCourse = new Course({title, description, groupId});
    newCourse.groupId = req.params.id;
    await newCourse.save();
    const courses = await Course.find({groupId: req.params.id}).lean()
    req.flash('success_msg', 'Curso Creado Satisfactoriamente');
    res.render('courses/all-courses', { groupId, courses });
    console.log(groupId, newCourse);
};

coursesCtrl.renderCourses = async (req, res) => {

    const groupId = req.params.id;
    const courses = await Course.find({groupId: groupId}).lean();
    const roleProfesor = await User.findById({_id: req.user.id}, {role: 1, _id: 0}).lean();
    if (roleProfesor.role == "profesor"){
        const roleInterface = true;
        res.render('courses/all-courses', { groupId, courses, roleInterface});
    } else {
        const roleInterface = false;
        res.render('courses/all-courses', { groupId, courses, roleInterface});
    };
};

coursesCtrl.renderEditForm =  async (req, res) => {
    const course = await Course.findById(req.params.id).lean();
    //if (course.user != req.user.id) {
    //    req.flash('error_msg', 'Acceso no autorizado');
    //    return res.redirect('/courses');
    //};
    res.render('courses/edit-course', { course });
};

coursesCtrl.updateCourse = async (req, res) => {
    const { title, description} = req.body;
    await Course.findByIdAndUpdate(req.params.id, {title, description}).lean();
    const courses = await Course.find({groupId: req.params.id}).lean()
    console.log(Course, courses);
    req.flash('success_msg', 'Curso Actualizado Satisfactoriamente');
    res.redirect('/groups/');
    res.render('courses/all-courses', { Course, courses });
    console.log(Course, courses);
};

coursesCtrl.deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    const courses = await Course.find({groupId: req.params.id}).lean()
    console.log(Course, courses);
    req.flash('success_msg', 'Curso Eliminado Satisfactoriamente');
    res.redirect('/groups/');
    next();
    res.render('courses/all-courses', { Course, courses });
};

module.exports = coursesCtrl;
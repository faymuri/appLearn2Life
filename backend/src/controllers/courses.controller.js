const coursesCtrl = {};

const Course = require('../models/Course');
const Group = require('../models/Group');




coursesCtrl.renderCourseForm =  async (req, res) => {
    const groupId = await Group.find({_id: req.params.id}, {_id: 1}).lean();
    console.log({groupId});
    res.render('courses/new-course', {groupId});
    console.log({groupId});
};



coursesCtrl.createNewCourse = async (req, res) => {
    const {title, description, groupId} = req.body;
    const newCourse = new Course({title, description, groupId});
    newCourse.groupId = await Group.find({_id: req.params.id}, {_id: 1}).lean();
    console.log(newCourse.groupId);
    console.log(newCourse);
    await newCourse.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/courses/:id');
    console.log(groupId, newCourse);

};

coursesCtrl.renderCourses = async (req, res) => {

    const groupId = req.params.id;
    const courses = await Course.find({groupId: groupId}).lean();
    res.render('courses/all-courses', { groupId, courses });
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
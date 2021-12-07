const coursesCtrl = {};

const Course = require('../models/Course');





coursesCtrl.renderCourseForm =  async (req, res) => {
    const groupId = await Course.find({groupId: req.params.id},{groupId: 1, _id: 0}).lean();
    res.render('courses/new-course', {groupId});
    console.log({groupId});
};



coursesCtrl.createNewCourse = async (req, res) => {
    const {title, description, groupId} = req.body;
    const newCourse = new Course({title, description, groupId});
    newCourse.groupId = req.params.id;
    console.log(newCourse.groupId);
    console.log(newCourse);
    await newCourse.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/courses/:id');
    console.log(groupId, newCourse);
};

coursesCtrl.renderCourses = async (req, res) => {
    const courses = await Course.find({groupId: req.params.id}).lean();
    const groupId = await Course.find({groupId: req.params.id}, {groupId:1, _id: 0}).lean();
    //console.log(groupId, courses);
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
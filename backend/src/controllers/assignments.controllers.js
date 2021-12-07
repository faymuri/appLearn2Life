const assignmentsCtrl = {};

const Assignment = require('../models/Assignment');
const User = require('../models/User');


assignmentsCtrl.renderAssignmentForm =  (req, res) => {
    const courseId = req.params.id;
    res.render('assignments/new-assignment', {courseId});
};

assignmentsCtrl.createNewAssignment = async (req, res) => {
    const {title, description, file, dateFinal, courseId} = req.body;
    const newAssignment = new Assignment({title, description, file, dateFinal, courseId});
    newAssignment.courseId = req.params.id;
    await newAssignment.save();
    
    const assignments = await Assignment.find({courseId: req.params.id}).lean()
    console.log(assignments);
    req.flash('success_msg', 'Actividad Creada Satisfactoriamente');
    res.render('assignments/all-assignments', { courseId, assignments });
    console.log(courseId, newAssignment, assignmentss);
};

assignmentsCtrl.renderAssignments = async (req, res) => {
    const courseId = req.params.id;
    const assignments = await Assignment.find({courseId: courseId}).lean();
    const roleProfesor = await User.findById({_id: req.user.id}, {role: 1, _id: 0}).lean();
    if (roleProfesor.role == "profesor"){
        const roleInterface = true;
        res.render('assignments/all-assignments', { courseId, assignments, roleInterface});
    } else {
        const roleInterface = false;
        res.render('assignments/all-assignments', { courseId, assignments, roleInterface});
    };
};

assignmentsCtrl.renderEditForm =  async (req, res) => {
    const assignment = await Assignment.findById(req.params.id).lean();
    //if (assignment.user != req.params.id) {
    //    req.flash('error_msg', 'Acceso no autorizado');
    //    return res.redirect('/assignments');
    //};
    res.render('assignments/edit-assignment', { assignment });
};

assignmentsCtrl.updateAssignment = async (req, res) => {
    const { title, description, file, dateFinal} = req.body;
    await Assignment.findByIdAndUpdate(req.params.id, {title, description, file, dateFinal}).lean();
    const assignments = await Assignment.find({courseId: req.params.id}).lean()
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/groups/');
    res.render('assignments/all-assignments', { Assignment, assignments });
};

assignmentsCtrl.deleteAssignment = async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    const assignments = await Assignment.find({courseId: req.params.id}).lean()
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/groups/');
    next();
    res.render('assignments/all-assignments', { Assignment, assignments });
};

module.exports = assignmentsCtrl;
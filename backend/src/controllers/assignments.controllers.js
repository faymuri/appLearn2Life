const assignmentsCtrl = {};

const Assignment = require('../models/Assignment');


assignmentsCtrl.renderAssignmentForm =  (req, res) => {
    res.render('assignments/new-assignment');
};

assignmentsCtrl.createNewAssignment = async (req, res) => {
    const {title, description} = req.body;
    const newAssignment = new Assignment({title, description});
    newAssignment.user = req.user.id;
    await newAssignment.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/assignments/:id');
};

assignmentsCtrl.renderAssignments = async (req, res) => {
    const assignments = await Assignment.find({courseId: req.params.id}).lean();
    res.render('assignments/all-assignments', { assignments });
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
    const { title, description } = req.body;
    await Assignment.findByIdAndUpdate(req.params.id, {title, description}).lean();
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/assignments');
};

assignmentsCtrl.deleteAssignment = async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/assignments');
};

module.exports = assignmentsCtrl;
const assignmentsCtrl = {};

const Assignment = require('../models/Assignment');

assignmentsCtrl.renderAssignmentForm = (req, res) => {
    res.render('assignments/new-assignment');
};

assignmentsCtrl.createNewAssignment = async (req, res) => {
    const {title, description} = req.body;
    const newAssignment = new Assignment({title, description});
    await newAssignment.save();
    res.redirect('/assignments');
};

assignmentsCtrl.renderAssignments = async (req, res) => {
    const assignments = await Assignment.find().lean();
    res.render('assignments/all-assignments', { assignments });
};

assignmentsCtrl.renderEditForm =  async (req, res) => {
    const assignment = await Assignment.findById(req.params.id).lean();
    res.render('assignments/edit-assignment', { assignment });
};

assignmentsCtrl.updateAssignment = async (req, res) => {
    const { title, description } = req.body;
    await Assignment.findByIdAndUpdate(req.params.id, {title, description}).lean();
    res.redirect('/assignments');
};

assignmentsCtrl.deleteAssignment = async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    res.redirect('/assignments');
};

module.exports = assignmentsCtrl;
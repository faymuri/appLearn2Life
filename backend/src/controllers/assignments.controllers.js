const assignmentsCtrl = {};

const assignment = require('../models/Assignment');
const Assignment = require('../models/Assignment');

assignmentsCtrl.renderAssignmentForm = (req, res) => {
    res.render('assignments/new-assignment');
};

assignmentsCtrl.createNewAssignment = async (req, res) => {
    const {title, description} = req.body;
    const newAssignment = new Assignment({title, description});
    await newAssignment.save();
    res.send('new assignment');
};

assignmentsCtrl.renderAssignments = async (req, res) => {
    const assignments = await Assignment.find().lean();
    res.render('assignments/all-assignments', { assignments });
};

assignmentsCtrl.renderEditForm = (req, res) => {
    res.send('render edit form');
};

assignmentsCtrl.updateAssignment = (req, res) => {
    res.send('update assignment');
};

assignmentsCtrl.deleteAssignment = (req, res) => {
    res.send('delete assignment');
};

module.exports = assignmentsCtrl;
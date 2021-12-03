<<<<<<< HEAD
const groupCtrl = {};

const group = require('../models/group');


assignmentsCtrl.renderGroupsForm =  (req, res) => {
=======
const groupsCtrl = {};

const group = require('../models/Group');


groupsCtrl.renderGroupForm =  (req, res) => {
>>>>>>> 6690217267d231572771abfac7ebdc5b1c8fc45c
    res.render('groups/new-assignment');
};

assignmentsCtrl.createNewGroup = async (req, res) => {
    const {title, description} = req.body;
    const newGroup = new group({title, description});
    newAssignment.courseId = req.course.id;
    await newAssignment.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/groups');
};

assignmentsCtrl.renderGroups = async (req, res) => {
    const assignments = await Assignment.find({user: req.user.id}).sort({createdAt: 'desc'}).sort({updatedAt: 'asc'}).lean();
    res.render('groups/all-groups', { assignments });
};

assignmentsCtrl.renderEditForm =  async (req, res) => {
    const Group = await Group.findById(req.params.id).lean();
    if (group.user != req.user.id) {
        req.flash('error_msg', 'Acceso no autorizado');
        return res.redirect('/groups');
    };
    res.render('groups/edit-group', { assignment });
};

assignmentsCtrl.updateGroups = async (req, res) => {
    const { title, description } = req.body;
    await Group.findByIdAndUpdate(req.params.id, {title, description}).lean();
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/Groups');
};

assignmentsCtrl.deleteGroup = async (req, res) => {
    await Assignment.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/groups');
};

module.exports = groupsCtrl;
const groupsCtrl = {};

const Group = require('../models/Group');


groupsCtrl.renderGroupForm = (req, res) => {
    res.render('groups/new-group');
};

groupsCtrl.createNewGroup = async(req, res) => {
    const { title, description } = req.body;
    const newGroup = new Group({ title, description });
    //newGroup.institutionId = req.instution.id;
    await newGroup.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/groups');
};

groupsCtrl.renderGroups = async(req, res) => {
    const groups = await Groups.find().sort({ createdAt: 'desc' }).sort({ updatedAt: 'asc' }).lean();
    res.render('groups/all-groups', { groups });
};

groupsCtrl.renderEditForm = async(req, res) => {
    const Group = await Group.findById(req.params.id).lean();
    if (group.user != req.user.id) {
        req.flash('error_msg', 'Acceso no autorizado');
        return res.redirect('/groups');
    };
    res.render('groups/edit-group', { group });
};

groupsCtrl.updateGroup = async(req, res) => {
    const { title, description } = req.body;
    await Group.findByIdAndUpdate(req.params.id, { title, description }).lean();
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/Groups');
};

groupsCtrl.deleteGroup = async(req, res) => {
    await Groups.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/groups');
};

module.exports = groupsCtrl;
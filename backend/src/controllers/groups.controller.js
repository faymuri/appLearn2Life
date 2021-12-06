const groupsCtrl = {};

const Group = require('../models/Group');


groupsCtrl.renderGroupForm =  (req, res) => {
    res.render('groups/new-group');
};

groupsCtrl.createNewGroup = async (req, res) => {
    const {title, description, institutionId, userId} = req.body;
    //const {institutionId, userId} = req.user;
    const newGroup = new Group({title, description, institutionId, userId});
    newGroup.institutionId =req.user.institutionId;
    newGroup.userId = req.user.id;
    await newGroup.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/groups');
};

groupsCtrl.renderGroups = async (req, res) => {
    const groups = await Group.find({userId: req.user.id, institutionId: req.user.institutionId}).lean();
    res.render('groups/all-groups', { groups });
};

groupsCtrl.renderEditForm =  async (req, res) => {
    const groups = await Group.findById(req.params.id).lean();
    if (groups.userId != req.user.id && groups.institutionId != req.user.institutionId) {
        req.flash('error_msg', 'Acceso no autorizado');
        return res.redirect('/groups');
    };
    res.render('groups/edit-group', { groups });
};

groupsCtrl.updateGroup = async (req, res) => {
    const { title, description } = req.body;
    await Group.findByIdAndUpdate(req.params.id, {title, description}).lean();
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/Groups');
};

groupsCtrl.deleteGroup = async (req, res) => {
    await Groups.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/groups');
};

module.exports = groupsCtrl;
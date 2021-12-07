const groupsCtrl = {};


const Group = require('../models/Group');
const User = require('../models/User');


groupsCtrl.renderGroupForm = (req, res) => {
    res.render('groups/new-group');
};

groupsCtrl.createNewGroup = async (req, res) => {
    const { title, description, institutionId, userId } = req.body;
    const newGroup = new Group({ title, description, institutionId, userId });
    newGroup.institutionId = req.user.institutionId;
    newGroup.userId = req.user.id;
    await newGroup.save();
    req.flash('success_msg', 'Grupo Agregado Satisfactoriamente');
    res.redirect('/groups');
};

groupsCtrl.renderGroups = async (req, res) => {
    const groups = await Group.find({ userId: req.user.id, institutionId: req.user.institutionId }).lean();
    const roleProfesor = await User.findById({_id: req.user.id}, {role: 1, _id: 0}).lean();
    console.log(roleProfesor);
    if (roleProfesor.role == "profesor"){
        const roleInterface = true;
        console.log(roleInterface);
        res.render('groups/all-groups', { groups, roleInterface });
    } else {
        const roleInterface = false;
        console.log(roleInterface);
        res.render('groups/all-groups', { groups, roleInterface });
    };
};

groupsCtrl.renderEditForm = async (req, res) => {
    const group = await Group.findById(req.params.id).lean();
    if (group.userId != req.user.id && group.institutionId != req.user.institutionId) {
        req.flash('error_msg', 'Acceso no autorizado');
        return res.redirect('/groups');
    };
    res.render('groups/edit-group', { group });
};

groupsCtrl.updateGroup = async (req, res) => {
    const { title, description } = req.body;
    await Group.findByIdAndUpdate(req.params.id, { title, description }).lean();
    req.flash('success_msg', 'Grupo Actualizado Satisfactoriamente');
    res.redirect('/groups');
};

groupsCtrl.deleteGroup = async (req, res) => {
    await Group.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Grupo Eliminado Satisfactoriamente');
    res.redirect('/groups');
};


module.exports = groupsCtrl;
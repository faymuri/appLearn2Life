const responseAssignmentsCtrl = {};

const ResponseAssignment = require('../models/ResponseAssignment');


responseAssignmentsCtrl.renderResponseAssignmentForm =  (req, res) => {
    res.render('responseAssignments/new-responseAssignment');
};

responseAssignmentsCtrl.createNewResponseAssignment = async (req, res) => {
    const {title, description} = req.body;
    const newResponseAssignments = new ResponseAssignment({title, description});
    newAssignment.user = req.user.id;
    await newResponseAssignments.save();
    req.flash('success_msg', 'Actividad Agregada Satisfactoriamente');
    res.redirect('/responseAssignments');
};

responseAssignmentsCtrl.renderResponseAssignments = async (req, res) => {
    const responseAssignments = await responseAssignments.find({user: req.user.id}).sort({createdAt: 'desc'}).sort({updatedAt: 'asc'}).lean();
    res.render('responseAssignments/all-responseAssignments', { responseAssignments });
};

responseAssignmentsCtrl.renderEditForm =  async (req, res) => {
    const responseAssignments = await responseAssignments.findById(req.params.id).lean();
    if (responseAssignments.user != req.user.id) {
        req.flash('error_msg', 'Acceso no autorizado');
        return res.redirect('/responseAssignments');
    };
    res.render('responseAssignments/edit-responseAssignment', { responseAssignments });
};

responseAssignmentsCtrl.updateResponseAssignments = async (req, res) => {
    const { title, description } = req.body;
    await responseAssignments.findByIdAndUpdate(req.params.id, {title, description}).lean();
    req.flash('success_msg', 'Actividad Actualizada Satisfactoriamente');
    res.redirect('/responseAssignments');
};

responseAssignmentsCtrl.deleteResponseAssignments = async (req, res) => {
    await responseAssignments.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Actividad Eliminada Satisfactoriamente');
    res.redirect('/responseAssignments');
};

module.exports = responseAssignmentsCtrl;
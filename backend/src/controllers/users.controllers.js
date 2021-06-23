const usersCtrl = {};


usersCtrl.renderRegisterForm = (req, res) => {
    res.render('users/register')
};

usersCtrl.renderLoginForm = (req, res) => {
    res.render('users/login')
};

usersCtrl.renderAdmRegisterForm = (req ,res) => {
    res.render('users/register2')
}

usersCtrl.renderAdmLoginForm = (req, res) => {
    res.render('users/login2')
};

module.exports = usersCtrl;
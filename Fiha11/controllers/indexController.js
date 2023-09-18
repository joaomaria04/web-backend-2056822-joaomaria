const Users = require('../sequelize').Users;
//var jwt = require('jsonwebtoken');

/*

function generateAcessToken(email,password) {
    var token = jwt.sign({ email, password }, process)
    return token;
}

*/

exports.login = function (req, res) {
    var { email } = req.body;
    var { password } = req.body;


    Users.findOne({
        where: {
            email: email,
        }
    }).then(user => {
        if(user == null) {
            req.flash('loginMessage', 'No user found with that email.');
            req.redirect('/login');
        }
        else if (results.password != password) {
            req.flash('loginMessage', 'Oops! Wrong password');
        }else {
            //const token = generateAcessToken(eail, password);
            req.session.results = results;
            //req.session.token = token;
            res.redirect('/profile');
            
        }
    });

    
 

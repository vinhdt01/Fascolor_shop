var bcrypt = require('bcryptjs');

class Login {
 

    async index (req, res) {
        console.log(req.body , 'dsadá')
        res.render('login')

    }
    async authen (req, res , next) {
        res.cookie('keylogin', 'hashFs%d%fds%' , {
            httpOnly: true,
            secure: true,
        })
        console.log(req.body , 'dsadá')
next()
    }
}
module.exports = Login  
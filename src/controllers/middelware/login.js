var bcrypt = require('bcryptjs');

class Login {
 

    async index (req, res) {
        console.log(req.body , 'dsadá')
        res.render('login')

    }
    async authen (req, res) {
        res.cookie('keylogin', bcrypt.hashSync('Khùng' , 10) , {
            httpOnly: true,
            secure: true,
        })
        console.log(req.body , 'dsadá')
        res.status(200).json({name:'hehe'})

    }
}
module.exports = Login  
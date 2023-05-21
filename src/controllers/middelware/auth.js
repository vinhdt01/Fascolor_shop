var bcrypt = require('bcryptjs');

class Authentication {
 

    async verify (req, res , next) {
        const decodedValue = bcrypt.compareSync('Khùng', req.cookies.keylogin)
        if(!decodedValue) {
            res.redirect('/login')
            return;
        }
            next()

    }
  
}
module.exports = Authentication  
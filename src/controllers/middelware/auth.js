var bcrypt = require('bcryptjs');

class Authentication {
 

    async verify (req, res , next) {
        const decodedValue = req.cookies.keylogin
        if(decodedValue !== 'hashFs%d%fds%') {
            res.redirect('/login')
            return;
        }
            next()

    }
  
}
module.exports = Authentication  
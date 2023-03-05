const db = require('../models/index.js') 
class Product {
 async   getProduct   (req, res) {
        try {
            let data = await db.User.findAll();
            console.log('--------------')

            console.log(data)
            console.log('--------------')

            return   res.send('Get Product')

        }
        catch(err) {

        }
    }
}
module.exports = Product
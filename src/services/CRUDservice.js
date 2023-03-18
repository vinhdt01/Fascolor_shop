const db = require('../models/index')
class CRUDservice {
    async getProductservice  (req, res) {
      let a =await db.Product.findAll();
      console.log(a)
     return a
    }
    async getOneProductservice  (req, res) {
      let data =await db.Product.findOne({ where: { id: req.params.slug } });;
     return data
    }
    async saveProductservice  (data) {
      console.log(data , 'data')
      return  await db.Product.create(data);

    }

    async saveOrderservice  (data) {
      console.log(data , 'data')
      return  await db.Order.create(data);

    }
}
module.exports = CRUDservice;
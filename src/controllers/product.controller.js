const db = require('../models/index.js') 
const CRUDservice = require('../services/CRUDservice')
const query = new CRUDservice;
class Product {
 async   getProduct (req, res) {
        try {        
         let data =  await  query.getProductservice()
          console.log(data)
            res.json({ data})
        }
        catch(err) {
          console.log(err)
        }
    }
    async   getOneProduct (req, res) {
      try {
        let data =  await  query.getOneProductservice(req , res)
        res.json({ data})
      }
      catch(err) {
        console.log(err)
      }
  }
    async  saveOrder (req, res) {
      console.log('req' , req.body)
      try {   
       let data =  await  query.saveOrderservice( req.body)
       return  res.send('Get ABC')
      }
      catch(err) {
        console.log(err)
      }
  }
  importProduct(req, res) {
    res.render('home'); 
   }
 async  saveimportProduct(req, res) {
    console.log(req.body)
    let data =  await  query.saveProductservice( req.body)
    res.send('Ok')
  }
}


module.exports = Product
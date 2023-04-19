const Product = require("../../models/mongoose/product.js");
 
class Products {
 async   getProduct (req, res) {
   try {
  
    const product = await Product.find()
    console.log(product)
    res.status(200).json(product)
   }
   catch (err) {
     res.status(500).json(err)
   }

}
async   getOneProduct (req, res) {
    try {
   
     const product = await Product.findById(req.params.slug).exec();
     console.log(product)
     res.status(200).json(product)
    }
    catch (err) {
      res.status(500).json(err)
    }
 
 }
createProductView (req, res) {
    res.render('home')
 
  }

 async createProduct (req, res) {
    try {
        console.log(req.body);
        const data = req.body;
        const product = new Product(data)
       await product.save();
       res.status(200).json(data);
    res.status(200).json({'dsad':'dasd'});
       }
       catch (err) {
        res.status(500).json(err);
       }
    
     }
 
}


module.exports = Products
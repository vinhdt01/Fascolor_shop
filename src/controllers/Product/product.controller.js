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
       }
       catch (err) {
        res.status(500).json(err);
       }
    
     }


     async searchProduct (req, res) {
      try {
        let searchTerm = req.body.name
        const regex = new RegExp(`.*${searchTerm}.*`, 'i');

        const product = await Product.find({name: { $regex: regex }}).exec();
        console.log('tìm ra rồi nè' , product)

      res.status(200).json({product:product});
         }
         catch (err) {
          res.status(500).json(err);
         }
      
       }
 
}


module.exports = Products
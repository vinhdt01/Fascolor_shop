const Order = require("../../models/mongoose/order.js");
 
class Orders {
 

 async   createOrder (req, res) {
   try {
    console.log(req.body)
    const data = req.body;
    const order = new Order(data)
   await order.save();
   res.status(200).json(data);
   }
   catch (err) {
    res.status(500).json(err);
   }

 }
}


module.exports = Orders
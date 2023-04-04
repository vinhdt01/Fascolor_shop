const Order = require("../../models/mongoose/order.js");
const v4 = require("uuid");

class Orders {
 

 async   createOrder (req, res) {
   try {
    console.log(req.body)
    const data = req.body;
    data.orderId = v4()
    const order = new Order(data)
   await order.save();
   console.log(data);
   res.status(200).json(data);
   }
   catch (err) {
    res.status(500).json(err);
   }

 }
}


module.exports = Orders
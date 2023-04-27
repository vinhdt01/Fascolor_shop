const Order = require("../../models/mongoose/order.js");
const { v4: uuidv4 } = require('uuid');

class Orders {
 

 async   createOrder (req, res) {
   try {
    console.log(req.body)
    const data = req.body;
    data.orderId = uuidv4()

    const order = new Order(data)
   await order.save();
   console.log(data);
   res.status(200).json(data);
   }
   catch (err) {
    res.status(500).json(err);
   }

 }
 async   updateOrder (req, res) {
  try {
    Order.findOneAndUpdate({orderId: req.params.orderId} , {
      paymentStatus:'pending'
    })
  console.log(data);
  res.status(200).json(data);
  }
  catch (err) {
   res.status(500).json(err);
  }

}
async   updateOrderPayment (req, res) {
  try {
    console.log(req.body , req.query.orderid)
        if(req.body.paymentMethod == 'cod') {
          const result = await  Order.findOneAndUpdate({orderId: req.query.orderid}, {paymentStatus:'checking' , paymentMethod:'COD'})
          res.status(200).json({'success':true , result});
        }
        else if(req.body.paymentMethod == 'viet-qr') {
          const result = await Order.findOneAndUpdate({orderId: req.query.orderid}, {paymentStatus:'checking' , paymentMethod:'Bank'})
          res.status(200).json({'success':true , result});
        }
        
        else {
          res.status(400).json({'success':req.query , result});

        }
 }
  catch (err) {
   res.status(500).json(err);
  }

}
async getOrder(req, res) {
try {
  console.log(req.params.slug)
  const data = await Order.findById(req.params.slug)
  // res.status(200).json({'success': true , data})
    let value = data.items
    console.log(JSON.parse(value) , 'value')
    res.render('orderdetail' , {data:JSON.parse(value) , status:data.paymentStatus , method:data.paymentMethod})

}
catch(err) {
  res.status(200).json({'success': false})

}

}
async getAllOrder(req, res) {
  try {
   Order.find()
   .then(data => {
    data = data.map(value => value.toObject())
    res.render('order' , {data})

   })
 
  }
  catch(err) {
    res.status(200).json({'success': false})
  
  }
  
  }
}


module.exports = Orders
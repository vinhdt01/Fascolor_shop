
const express = require('express');
const Orders = require('../controllers/Order/order.controller.js')
const router = express.Router();
   
const order = new Orders;    

router.get('/getorder/:slug' , order.getOrder)
router.get('/getorders/:slug' , order.getOrders)

router.get('/getorder' , order.getAllOrder)

router.post('/create-order' , order.createOrder)
router.put('/update-payment' , order.updateOrderPayment)


module.exports = router;
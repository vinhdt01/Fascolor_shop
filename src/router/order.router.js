
const express = require('express');
const Orders = require('../controllers/Order/order.controller.js')
const router = express.Router();
const Authetication = require('../controllers/middelware/auth.js')

const order = new Orders;    
const au = new Authetication;

router.get('/getorder/:slug' , order.getOrder)
router.get('/getorders/:slug' , order.getOrders)

router.get('/getorder' ,  au.verify , order.getAllOrder)

router.post('/create-order' , au.verify , order.createOrder)
router.put('/update-payment' , order.updateOrderPayment)


module.exports = router;
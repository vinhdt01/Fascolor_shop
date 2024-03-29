
const express = require('express');
const Orders = require('../controllers/Order/order.controller.js')
const router = express.Router();
const Authetication = require('../controllers/middelware/auth.js')

const order = new Orders;    
const au = new Authetication;

router.get('/getorder/:slug' , order.getOrder)
router.get('/getorders/:slug' , order.getOrders)
router.get('/tracking/:slug' , order.trackingOrder)

router.get('/getorder' ,  au.verify , order.getAllOrder)

router.post('/create-order'  , order.createOrder)
router.put('/update-payment' , order.updateOrderPayment)
router.post('/delete/:slug' , au.verify , order.deleteOrder)


module.exports = router;
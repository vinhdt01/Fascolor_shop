
const express = require('express');
const Orders = require('../controllers/Order/order.controller.js')
const router = express.Router();
   
const order = new Orders;    


router.post('/create-order' , order.createOrder)


module.exports = router;
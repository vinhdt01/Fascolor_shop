
const express = require('express');
const Product = require('../controllers/product.controller')
const router = express.Router();
   
const product = new Product;    
router.get('/' , product.getProduct )



module.exports = router;
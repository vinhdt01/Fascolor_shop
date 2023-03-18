
const express = require('express');
const Product = require('../controllers/product.controller')
const router = express.Router();
   
const product = new Product;    
router.get('/get-product' , product.getProduct)
router.get('/get-product/:slug' , product.getOneProduct)

router.get('/import' , product.importProduct )
router.post('/import/save' , product.saveimportProduct )

module.exports = router;
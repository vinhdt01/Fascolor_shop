
const express = require('express');
const Products = require('../controllers/Product/product.controller')
const router = express.Router();
   
const product = new Products;    

router.get('/product' , product.getProduct)
router.get('/get-product/:slug' , product.getOneProduct)
router.get('/create-product' , product.createProductView)
router.post('/create-product' , product.createProduct)



module.exports = router;
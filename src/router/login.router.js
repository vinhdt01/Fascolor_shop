
const express = require('express');
const Login = require('../controllers/middelware/login.js')
const router = express.Router();
   
const login = new Login;    
router.get('/login'  ,  login.index)
router.post('/authen' , login.authen)



module.exports = router;
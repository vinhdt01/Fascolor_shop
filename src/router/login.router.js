
const express = require('express');
const Login = require('../controllers/middelware/login.js')
const router = express.Router();
   
const login = new Login;    

router.get('/login' , login.index)



module.exports = router;
// const routers=require(express).Router()
const express = require('express');
const routers = express.Router();
const{login,register,verifylogin,alluserVerify,register2}=require('../controler/control')
routers.use(alluserVerify)
routers.get('/user/login',verifylogin,login)
routers.get('/user/register',register)
routers.get('/user/register2',verifylogin,register2)
module.exports=routers
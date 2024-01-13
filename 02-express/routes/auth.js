const express=require('express')
const {login}=require('../controller/authController')
const router=express.Router()

// router.post('/', login)
router.route('/').post(login)

module.exports=router
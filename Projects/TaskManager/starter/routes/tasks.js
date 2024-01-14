const express=require('express')
const router=express.Router()
const {getAllTasks}=require('../contollers/tasks')
router.route('/').get(getAllTasks)

module.exports=router
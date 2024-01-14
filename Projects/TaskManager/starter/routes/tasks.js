const express=require('express')
const router=express.Router()

const {getAllTasks,createTask,updateTask,getTask,deleteTask}=require('../contollers/tasks')
//chaining
router.route('/').get(getAllTasks).post(createTask)
// router.patch('/:id',updateTask)
// router.delete('/:id',deleteTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router
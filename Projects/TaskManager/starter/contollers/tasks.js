
const Task=require('../models/Task')

const getAllTasks=(req,res) =>{
    res.send('all items are listed here')
}

const createTask=async(req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({ task })
}
const deleteTask=(req,res)=>{
    res.json(req.params)
}

const updateTask=(req,res)=>{
    res.json(req.params)
}
const getTask=(req,res)=>{
    res.json(req.params)
}
module.exports={getAllTasks,createTask,updateTask,getTask,deleteTask}
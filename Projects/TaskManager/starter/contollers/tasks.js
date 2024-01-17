
const Task=require('../models/Task')
//async await is just for convention it does not return a promise
const getAllTasks=async(req,res) =>{
    try{
        //find makes use of filter, when left blank it just returns all the data
        const tasks=await Task.find({})
        res.status(200).json({tasks: tasks})//({tasks}) its same as the property name and the variable for the value is exactly same.
    }catch(err){
        res.status(500).json({msg: err})
    }
}

const createTask=async(req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(201).json({ task })
    }catch(err){
        res.status(500).json({msg: err})
    }
}
const getTask=async(req,res)=>{//single task
    try{
        const {id:taskId}=req.params//alias to identify
        const task=await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg: `no task with id : ${taskId}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg: err})
    }
}
const deleteTask =async(req,res)=>{
    try{
        const {id:taskId}=req.params
        const task=await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg: `no task with id : ${taskId}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg: err})
    }

}
const updateTask=async(req,res)=>{
    try{    
        const {id:taskId}=req.params
        
        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators: true})
        if(!task){
            return res.status(404).json({msg: `no task with id : ${taskId}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg: err})
    }
}
module.exports={getAllTasks,createTask,updateTask,getTask,deleteTask}
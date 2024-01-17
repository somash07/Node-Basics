
const Task=require('../models/Task')
const asyncWrapper=require('../middlewares/async')
const {createCustomError}=require('../error/custom-error')
//async await is just for convention it does not return a promise
const getAllTasks=asyncWrapper(async(req,res) =>{
        //find makes use of filter, when left blank it just returns all the data
        const tasks=await Task.find({})
        // res.status(200).json({success:true,data:{tasks: tasks, nbHits: tasks.length}})//({tasks}) its same as the property name and the variable for the value is exactly same.
        res.status(200).json({tasks:tasks})//({tasks}) its same as the property name and the variable for the value is exactly same.
})

const createTask=asyncWrapper(async(req,res)=>{
        const task=await Task.create(req.body)
        res.status(201).json({ task })
})
const getTask=asyncWrapper(async(req,res,next)=>{//single task
        const {id:taskId}=req.params//alias to identify
        const task=await Task.findOne({_id:taskId})
        if(!task){
        //     const err=new Error('Not found') //Built in js Error 
        //     err.status=404;
        //     return next(err)

        //     return res.status(404).json({msg: `no task with id : ${taskId}`})

        return next(createCustomError(`no task with id : ${taskId}`,404))
        }
        res.status(200).json({task})
})
const deleteTask =asyncWrapper(async(req,res,next)=>{
        const {id:taskId}=req.params
        const task=await Task.findOneAndDelete({_id:taskId})
        if(!task){
                return next(createCustomError(`no task with id : ${taskId}`,404))
        }
        res.status(200).json({task})
})
const updateTask=asyncWrapper(async(req,res,next)=>{ 
        const {id:taskId}=req.params
        
        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators: true})
        if(!task){
                return next(createCustomError(`no task with id : ${taskId}`,404))
        }
        res.status(200).json({task})
})
module.exports={getAllTasks,createTask,updateTask,getTask,deleteTask}
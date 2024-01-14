

const getAllTasks=(req,res) =>{
    res.send('all items are listed here')
}

const createTask=(req,res)=>{
    res.json(req.body)
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
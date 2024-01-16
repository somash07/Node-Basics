const express=require('express');
const app=express();
const tasks=require('./routes/tasks.js')
const connectDB = require('./db/connect.js')
require('dotenv').config()


app.use(express.urlencoded({extended: false}))
app.use(express.json())//req.body ma data jana
app.use('/api/v1/tasks',tasks)
//routes

app.get('/hello',(req,res)=>{
    res.send('task manager app')
})

const port=4502
const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`running on port ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}

start()
// app.get('/api/v1/tasks')//alltask
// app.post('/api/v1/tasks')//createtask
// app.get('/api/v1/tasks/:id')//getSingleTask
// app.patch('/api/v1/tasks/:id')//updateTask
// app.delete('/api/v1/tasks/:id')//deleteTask
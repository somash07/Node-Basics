const express=require('express')
const app=express()
const {people}=require('./data')

//get method.
app.get('/api/peoples',(req,res)=>{
    res.status(200).json({success: true, data: people})
})
app.listen(4501,()=>console.log('listening to port 4501'))


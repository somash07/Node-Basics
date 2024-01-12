const express=require('express')
const app=express()
const axios=require('axios')
const {people}=require('./data')
const path =require('path')
app.use(express.static(path.resolve(__dirname,'Form-httpMethods')))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get('/api/v1',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/v1',(req,res)=>{
    // console.log(req.body)

    const {name}=req.body

    if(!name){
       return res.status(400).json({success:false,msg:'please enter a messsage '})
    }
    res.status(200).json({success:true,person:name})
})
app.listen(4501,()=>{
    console.log('4501......')
})
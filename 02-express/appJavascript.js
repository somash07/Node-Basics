//node for the javascript.html

const express=require('express')
const app=express()
const path=require('path')
const axios=require('axios')
const {people}=require('./data')

app.use(express.static(path.resolve(__dirname,'Form-httpMethods')))

//parse json
app.use(express.json())//handeling incoming json data

app.use(express.urlencoded({extended: false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true,data: people})
})

app.post('/api/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success: false,msg: 'please provide name value'})
    }
    res.status(201).json({success:true,person: name})
})


app.listen(4502,()=>{
    console.log('4502.......')
})
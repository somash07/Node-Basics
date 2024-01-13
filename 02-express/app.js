/*
    express router: groups the routes together and set them up as separate controllers. MVC is a convention.

*/

const express=require('express')
const app=express()
const axios=require('axios')
// const {people}=require('./data')
const path =require('path')
const v1route=require('./routes/v1route.js')
const auth=require('./routes/auth.js')

app.use(express.static(path.resolve(__dirname,'Form-httpMethods')))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/api/v1', v1route)
// api/v1 is a base route

app.use('/login',auth)



app.listen(4501,()=>{
    console.log('4501......')
})
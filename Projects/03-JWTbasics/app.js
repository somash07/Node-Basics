require('dotenv').config()
require('express-async-errors')

const express=require('express')
const connectDB=require('./db/dbConnect')
const errorHandlerMiddleware=require('./middlewares/error-handler')
const notFoundMiddleware=require('./middlewares/not-found')


const app=express()

//middlewares
app.use(express.static('./public'))
app.use(express.json())


app.get('/',(req,res)=>{
    res.send='hiii bro'
})
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const port=process.env.PORT || 3000;

const start=async()=>{
    try{
    await connectDB(process.env.MONGO_URI)
    console.log('connected to db')
    app.listen(port,()=>{
        console.log(`server running on ${port}`)
    })
    }catch(err){
        console.log(err)
    }

}

start()
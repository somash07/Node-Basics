require('dotenv').config()
require('express-async-errors')

const express=require('express')
const connectDB=require('./db/dbConnect')
const mainRouter=require('./routes/main')
const errorHandlerMiddleware=require('./middlewares/error-handler')
const notFoundMiddleware=require('./middlewares/not-found')

const app=express()

//middlewares
//setting up router
app.use(express.json())
app.use('/api/v1',mainRouter)
app.use(express.static('./public'))
app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)


const port=process.env.PORT || 3000;

const start=async()=>{
    try{
        app.listen(port,()=>{
        console.log(`server running on ${port}`)
    })
    }catch(err){
        console.log(err)
    }
}

start()
require('dotenv').config();
//async errors


const express=require('express');
const app=express();

const notFoundMiddleware =require('./middlewares/not-found')
const errorHandlerMiddleware =require('./middlewares/error-handler')

//middleware
app.use(express.json());

//routes
app.get('/',(req,res)=>{
    res.send('<h1>store</h1><a href="/api/v1/products">product routes</a>')
})

//products route


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port=process.env.PORT || 3000

const start=async()=>{
    try{
        // DB
        app.listen(port,()=>{
            console.log(`server is listening to port ${port}....`)
        })
    }catch(err) {
        console.log(err)
    }
}


start()
require('dotenv').config();
require('express-async-errors');//async errors


const connectDB=require('./db/connect');
const productsRouter=require('./router/products')
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
//setting router
app.use('/api/v1/products', productsRouter )
//products route

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port=process.env.PORT || 3000

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server is listening to port ${port}....`)
        })
    }catch(err) {
        console.log(err)
    }
}

start()
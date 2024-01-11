/*
    Middlewares: Express apps are just a bunch of middlewares. Funx that execute during request to the server.

    Request-->middleware--->response

    middleware must be passed it onto next middleware until we are terminating the whole cycle by sending the response.send

    1.app.use('route',middleware)
    2. options: our own,built in middlewares in express,thirdparty middlewares


*/

const express=require('express')
const app= express();
const logger=require('./logger');//importing looger fnx from another file.
const authority=require('./authorize')

// //middleware  , express supplies the res,req,next
// const logger=(req,res,next)=>{
    //     const method=req.method;
    //     const url=req.url;
    //     const time=new Date().getFullYear();
    //     console.log(method,url,time)
    //     //either terminate by res.send(smth)
    
    //     //or pass it on to next middleware. ALWAYSSSS
    //     next()
    
    //     //if nothing is done from the above 2 conditions, browser keeps on loading on refresh.
    // }
    
    app.get('/', logger ,(req,res)=>{
        res.send('homeeeeeeess')
    })
    
    app.get('/about',logger,(req,res)=>{
        res.send('About')
    })

    // app.use(logger)//invokes logger for each and every route, order matters ie here for home and about route the logger is added manually so keeping this below.
    
    app.use('/api',logger)//logger for route /api

    // app.use([authority,logger]) //using both middlewares, order matters

app.get('/api/v1',(req,res)=>{
    res.send("v1")
})
app.get('/api/v2',(req,res)=>{
    res.send("v2")
})

//now for adding authorization with path /route only.we can also

app.use('/route',authority)

app.get('/route/smth',(req,res)=>{
    res.send("this is a resp of route path")
})

app.get('/route/smthsmth',(req,res)=>{
    console.log(req.user)//user data form middeware
    res.send("this is a resp of route path")
})


app.listen(4501,()=>{
    console.log('listening to server 4501');
})
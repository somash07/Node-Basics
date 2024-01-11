/*
    route Parameter in node . ->
    /path/:param1/:param2/....
    
    console.log(req.params)-->  {param1: value,param2: value,param3: value......}


*/

//

const { log } = require('console')
const express=require('express')
const {products}=require('./data')

const app=express()

app.get('/',(req,res)=>{
    res.send('<h2>homepage</h2><a href="/api/products">api</a>')
})

app.get('/api/products',(req,res)=>{
    const newProd=products.map((product)=>{
        //destructuring from product
        // console.log(product)
        const {id,name,image}=product
        return {id,name,image}
    })
    res.json(newProd)
})

app.get('/api/products/:productId',(req,res)=>{//the productId in url is always a string.


    // console.log(req);
    console.log(req.params)

    const{productId}=req.params
    const singleProduct=products.find((product)=>{
       return product.id===Number(productId)
    })

    //is singleProduct doesnt exists
    if(!singleProduct){
        return res.status(404).send("product does not exist")
    }

    res.json(singleProduct)
})

app.all('*',(req,res)=>{
    res.status(404).send("file not found")
})

app.listen(4502,()=>{
    console.log('listening to port number 4501')
})
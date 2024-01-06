/*
    SSR: server side rendering.

    api->json->res.json()->stringify

    res.json()
*/


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

app.get('/api/products/1',(req,res)=>{
    const singleProduct=products.find((product)=>{
       return product.id===1
    })
    res.json(singleProduct)
})


app.listen(4502,()=>{
    console.log('listening to port number 4501')
})
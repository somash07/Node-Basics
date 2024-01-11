/*
    QueryStringParameters or url parameters: used to send small amout of information using url

*/

const express=require('express')

const app=express()

const {products}=require('./data')

app.get('/',(req,res)=>{
    res.status(200).send("this is a server using express. <a href='/api/products'>data from data.js</a> ")
})

app.get('/api/products/query', (req, res) => {
    console.log(req.query);
 
    const { Pname, limit } = req.query;
    let sortedProduct = [...products]; // copying array using the spread operator

    if (Pname) {
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(Pname);
        });
    }

    if (limit) {
        sortedProduct = sortedProduct.slice(0, Number(limit));
    }

    if(sortedProduct.length<1){
        // res.status(200).send("no product found");

        return res.status(200).json({staus: 'true',data: []})
        //condition then return because we can only have one response per request.

    }
    res.status(200).send(sortedProduct);
});


app.get('/api/products',(req,res)=>{
    res.json(products.map((product)=>{
       const {id,name,image}=product
       return {id,name,image}
    })
    )

})

app.all('*',(req,res)=>{
    res.status(404).send("file not found")
})

app.listen(4501,()=>{
    console.log("server runninng on port 4501")
})
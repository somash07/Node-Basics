const { query } = require('express')
const Product=require('../models/product')
const getAllProductsStatic=async(req,res)=>{
    // throw Error('testing async errors')//does just like async wrapper, does not require next()
    // const search='a'
    // const products=await Product.find({
    //     name: {$regex:search,$options: 'i'}//$options : 'i' indicates case insensitive and has (search) in it
    // })

    const products=await Product.find({price : {$gt: 30 }})
    .sort('-name price')//name alphabetically z bata and price ascending for same name
    .select('name company price')
    // .limit(10)
    // .skip(2)
    res.status(200).json({products,noofHits: products.length})
}
const getAllProducts=async(req,res)=>{
    const {featured,company,name,sort,fields}=req.query
    const queryObj={}
    if(featured){
        queryObj.featured=featured ==='true'? true: false;
    }
    if(company){
        queryObj.company=company
    }
    if(name){
        queryObj.name=name
    }
    console.log(queryObj)
    // let products=await Product.find(queryObj)//products is an array so .sort() method of array will be implemented so to tacke this: 
    // if(sort){
    //     products=products.sort()
    //

    let query=Product.find(queryObj)
    // console.log(query)
    if(sort){
        const sortList=sort.split(',').join(' ');//converting to array and joining with space 
        query= query.sort(sortList)
        // console.log(sortList)
    }
    else{
        query=query.sort(company)
    }

    if(fields){
        const fieldList=fields.split(',').join(' ');//converting to array and joining with space 
        query= query.select(fieldList)
    }

    const page=Number(req.query.page) || 1;
    const limit=Number(req.query.limit) || 10;
    const skip=(page -1)* limit;
    
    query=query.skip(skip).limit(limit)

    const products=await query
    res.status(200).json({products,noofHits: products.length})
}

module.exports={getAllProducts,getAllProductsStatic}
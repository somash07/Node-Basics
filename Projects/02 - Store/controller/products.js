const Product=require('../models/product')
const getAllProductsStatic=async(req,res)=>{
    // throw Error('testing async errors')//does just like async wrapper, does not require next()
    const products=await Product.find({
        featured: true,
    })
    res.status(200).json({products,noofHits: products.length})
}
const getAllProducts=async(req,res)=>{
    console.log(req.query)
    const products=await Product.find(req.query)
    res.status(200).json({products,noofHits: products.length})
}

module.exports={getAllProducts,getAllProductsStatic}
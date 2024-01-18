require('dotenv').config()
const connectDB=require('./db/connect')
const Product=require('./models/product')

const jsonProducts=require('./product.json')

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();//delete all the existing data in the collections
        await Product.create(jsonProducts)
        console.log('success')
        process.exit(0);//everything went well
    }catch(err){
        console.log(err);
        process.exit(1);//error occured
    }
}

start();
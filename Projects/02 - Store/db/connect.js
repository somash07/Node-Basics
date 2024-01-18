const mongoose=require('mongoose');

const connectDB=(url)=>{
    //returning promise
    return mongoose.connect(url)
}

module.exports=connectDB;
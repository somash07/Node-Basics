const mongoose=require('mongoose')
const uri = "mongodb+srv://somash:S0m%40sh123@cluster0.eosgzxx.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority";

const connectDB=(url)=>{
    return mongoose
    .connect(uri,{
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
    })
}

module.exports= connectDB
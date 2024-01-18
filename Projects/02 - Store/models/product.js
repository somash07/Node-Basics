const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true,'product name must be provied']
    },
    price: {
        type: Number,
        required: [true,'price required']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ['ikea','liddy','marcos','caressa'],
            message: '{VALUE} is not supported'  //access whaterver user provides.
        }

    }
})

module.exports=mongoose.model('Product',productSchema);


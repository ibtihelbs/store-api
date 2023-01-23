const mongoose = require('mongoose')

const products = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'name needs to be provided']
    },
    price:{
        type:Number,
        required: [true, "price needs to be provided"]
    },
    featured:{
        type:Boolean,
        default: false,
    },
    rating:{
        type:Number,
        default: 5,
    },
    createdAt:{
        type:Date,
        default: Date.now(),
    },
    company:{
        type:String,
        enum:{
            value:['watercolor', 'acrylic', 'oil'],
            message:"{VALUE} is not a valid"
        }
    }
})

module.exports = mongoose.model('products', products)
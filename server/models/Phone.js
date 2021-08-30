const mongoose = require('mongoose')

const Schema = mongoose.Schema

const phone = new Schema({
    model:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    os:{
        type:String,
        required:true
    },
    companyID:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('Phone',phone)
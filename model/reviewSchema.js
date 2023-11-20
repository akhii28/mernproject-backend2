const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    reviewtitle:{ 
        type:String,
        required:true
    },
    reviewDes:{
        type:String
    },
    reviewNo:{
        type:Number,
        required:true
    },
    cid:{
        type:String,
        required:true
    }
},{
    collection:"reviews"
});

const collection = mongoose.model('review',newSchema);

module.exports = collection;
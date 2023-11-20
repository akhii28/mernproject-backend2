const mongoose=require("mongoose");

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name : {
        type:String,
        required:true
    },
    lastname:{
        type:String
    },
    mobile:{
        type:String
    },
    Address:{
        type:String
    }
},{
    collection:"credentials"
});

const collection = mongoose.model('log_reg_form', newSchema);

module.exports = collection;
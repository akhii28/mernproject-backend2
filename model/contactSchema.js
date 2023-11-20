const mongoose=require("mongoose");

const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    }
},{
    collection:"Contact"
});

const collection = mongoose.model('contact', newSchema);

module.exports = collection;
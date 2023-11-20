const express = require("express")
const collection = require("../model/contactSchema");
const contactRoute = new express.Router();

contactRoute.get("/",(req,res)=>{
    collection.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

contactRoute.post("/create-contact",(req,res)=>{
    collection.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

contactRoute.delete("/delete/:id",(req,res)=>{
    collection.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = contactRoute;
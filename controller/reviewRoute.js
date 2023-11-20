const express = require("express")
const collection = require("../model/reviewSchema");
const reviewRoute = new express.Router();

reviewRoute.get("/",(req,res)=>{
    collection.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

reviewRoute.post("/create-review",(req,res)=>{
    collection.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

reviewRoute.delete("/delete-review/:id",(req,res)=>{
    collection.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

module.exports = reviewRoute;




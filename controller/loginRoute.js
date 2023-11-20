const express = require("express")
const collection = require("../model/loginSchema");
const loginRoute = new express.Router();

loginRoute.get("/",(req,res)=>{
    collection.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

loginRoute.get("/:id",(req,res)=>{
    collection.findById(req.params.id,(err,data)=>{ 
        if(err)
            return err;
        else
            res.json(data);
    })
})

loginRoute.post("/",async(req,res)=>{
    const {name, email, password} = req.body;
    collection.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json(user);
            }
            else{
                res.json("Wrong password");
            }
        }
        else{
            res.json("No records found! ");
        }
    })

})



loginRoute.post("/signup",async(req,res)=>{
    const {email, password} = req.body;
    collection.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            collection.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })

})

loginRoute.route("/update-details/:id")
.get((req,res)=>{
    collection.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    collection.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});

module.exports = loginRoute;
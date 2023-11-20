const mongoose = require("mongoose");
const express = require("express");
const loginRoute = require("./controller/loginRoute");
const reviewRoute = require("./controller/reviewRoute");
const contactRoute = require("./controller/contactRoute")
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://test:12345@cluster0.9qmcdvw.mongodb.net/users");
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/loginRoute", loginRoute);
app.use("/reviewRoute", reviewRoute);
app.use("/contactRoute", contactRoute);

app.listen(5000,()=>{
    console.log("Server connected at 5000");
})

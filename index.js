const express = require("express");
const UserRouter = require("./Router/UserRouter.js");
const app = express();
app.use('/api/v1/user',UserRouter);
// const dotenv = require("dotenv");
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,()=>{
    console.log("your port is start today listening now at 300");
})

const express =require('express');
const app=express();
const bodyParser=require('body-parser')
const cors=require('cors')
app.use(bodyParser.json());
app.use(cors());
app.use(function(req,res,next){
 res.header("Access Control Allow Origin","*")
 res.header("Access Control Allow Headers","Origin, X-Requested with, Content-Type, Accept");
 next();
})
app.post()
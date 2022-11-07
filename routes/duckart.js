var express = require('express');
var router = express.Router();
require("./conn")
const duckart=require("../models/register");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('duckart');
});
router.get('/database',async(req,res)=>{
 
    try{
     const g=await duckart.find()
    // res.status(201).send(g)
     res.render('duckart',{data:g})
  
    }
    catch(e)
    {
     res.status(400).send(e);
    }
})
module.exports=router;
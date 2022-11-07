var express = require('express');
var router = express.Router();
const signup=require("../models/signup")
router.get('/dasboard', function(req, res, next) {
    res.render('dasboard');
  });
  router.get('/login', function(req, res, next) {
    res.render('login',{msg: ''});
  });
  router.post('/lg', async(req, res) =>{
    // res.render('login');
    try{
      const email=req.body.email
      const password=req.body.password
     const useremail=await signup.findOne({email:email})
    //  res.send(useremail)
    if(useremail.password==password)
    {
      res.status(201).render("dasboard")
    }
    else{
      res.render("login",{msg:"Invalid userID/Password"})
    }

      // console.log(`${email} and password is${password}`)
    }
    catch(e){
      res.status(400).send("invalid email")
    }
  });
  router.get('/signup', function(req, res, next) {
    res.render('signup',{msg:''});
  });
  router.post('/signc',async(req,res)=>{
    try{
    //  console.log(req.body.usname)
    // res.send(req.body.usname)
    const password=req.body.pswd
    const cpassword=req.body.cpswd
    if(password==cpassword)
    {
      const sigcr= new signup({
        username: req.body.usname ,
      email: req.body.email,
      password: req.body.pswd,
      cpassword: req.body.cpswd
      })
      const sin=await sigcr.save();
      res.status(201).render("login")

    }
    else{
      res.render("signup",{msg:"invalid confirm password"})
    }
    }
    catch(e){
      res.status(400).send(e)
    }
  })
  module.exports=router
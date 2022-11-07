const mongoose=require("mongoose")
const signupSchema=new mongoose.Schema({
   
    username:{
        type:String,
        required:true
    } ,
    email:{
        type:String,
        unique:true,
        required:true,
        
    },
    password:{
        type:String,
        required:true

    },
    cpassword:{
        type:String,
        required:true
    }
   
})


// now we need to create a collection
const signup=new mongoose.model("signup",signupSchema)
module.exports=signup;
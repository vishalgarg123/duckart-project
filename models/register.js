const mongoose=require("mongoose")
const employeeSchema=new mongoose.Schema({
   
    username:{
        type:String,
        required:true
    } ,
    profession:{
        type:String,
        required:true,
        
    }
   
})


// now we need to create a collection
const Register=new mongoose.model("Create",employeeSchema)
module.exports=Register;

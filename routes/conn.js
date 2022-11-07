const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/inten")
.then(()=>
{
    console.log("connection is successful")
}).catch((err)=>{
    console.log("No connection")
})
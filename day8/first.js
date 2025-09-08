 // WE WILL STUDY HERE ABOUT THE MIDDLEWARE

 const express = require("express");
 const app = express();

  app.use("/user",(req,res)=>{

   console.log("first");
   res.send("Heelo ji");
   console.log("First First");
   res.send("Mein Mast hu"); 

  })











 app.listen(3000,()=>{
    console.log("Listening at port 3000");
 })
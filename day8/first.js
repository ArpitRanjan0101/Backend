 // WE WILL STUDY HERE ABOUT THE MIDDLEWARE

 const express = require("express");
 const app = express();

  app.use("/user",(req,res)=>{

   res.send("Heelo ji")

  })











 app.listen(3000,()=>{
    console.log("Listening at port 3000");
 })
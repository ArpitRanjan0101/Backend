 // WE WILL STUDY HERE ABOUT THE MIDDLEWARE

 const express = require("express");
 const app = express();



     // ROUTE HANDLER   NICHE LIKHE CODE KO BOLTE HAI , JO APP.USE KE ANDAR  LIKHA HUA HAI
 

  app.use("/user",(req,res,next)=>{

   console.log("first");
   // res.send("Heelo ji");
   // console.log("First First");
   // res.send("Mein Mast hu"); // two response possible nhi hai , ek single request pe
   next();  // yeah next niche wale code ka reference ko store krke rakh rha hai , aur call kr rha hai next ko hi , jaise hi call kiya then niche wala code execute hone lgega
   console.log("Sixth");
 },
  (req,res,next)=>{
   console.log("Second"); // yeah console yaha pe terminal me print krega esse vs code me
   // res.send("I am Second");
   next();   
   console.log("Fifth")
  },
  (req,res)=>{
   console.log("Third");
   res.send("I am Third");
   console.log("Fourth")
  }
)











 app.listen(3000,()=>{
    console.log("Listening at port 3000");
 })
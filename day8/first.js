 // WE WILL STUDY HERE ABOUT THE MIDDLEWARE

 const express = require("express");
 const app = express();

  app.use("/user",(req,res,next)=>{

   console.log("first");
   // res.send("Heelo ji");
   console.log("First First");
   // res.send("Mein Mast hu"); // two response possible nhi hai , ek single request pe
   next();  // yeah next niche wale code ka reference ko store krke rakh rha hai , aur call kr rha hai next ko hi , jaise hi call kiya then niche wala code execute hone lgega
 },
  (req,res)=>{
   console.log("Second");
   res.send("I am Second");
  }
)











 app.listen(3000,()=>{
    console.log("Listening at port 3000");
 })
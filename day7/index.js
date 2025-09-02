const express = require("express");
const app = express();


app.use("/user",(req , res)=>{

    res.send("hello guys , Heer here this side");
})

app.listen(4000 ,()=>{
    console.log("listening at port 4000");
})
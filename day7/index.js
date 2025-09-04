const express = require("express");
const app = express();


// app.use("/user",(req , res)=>{

//     res.send("hello guys , Heer here this side");
// })


// we use here GET METHOD to fetch the data from the server , see below


app.get("/user",(req , res)=>{

    res.send("hello guys , Heer here this side"); // we can also print json data here using get method
})


app.listen(4000 ,()=>{
    console.log("listening at port 4000");
})
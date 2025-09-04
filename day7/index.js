const express = require("express");
const app = express();


// app.use("/user",(req , res)=>{

//     res.send("hello guys , Heer here this side");
// })


// we use here GET METHOD to fetch the data from the server , see below


app.get("/user",(req , res)=>{

    console.log(req); // yah pe bhut sare request jate hai request ko print krne pe
    res.send("hello guys , Heer here this side"); // we can also print json data here using get method
})


// below is the post mentod to send the data to the server
// post method is used to send the data to the server
// post method is used to create the data on the server
// post method is used to update the data on the server
// post method is used to delete the data on the server
// post method is used to fetch the data from the server

app.post("/user",(req , res)=>{
    console.log("data saved successfully");
    res.send("Data saved successfully"); // we can also print json data here using get method
})


app.listen(4000 ,()=>{
    console.log("listening at port 4000");
})
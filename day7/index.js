const express = require("express");
const app = express();


// app.use("/user",(req , res)=>{

//     res.send({name:"arpit"})
// })


// we use here GET METHOD to fetch the data from the server , see below


app.get("/user",(req , res)=>{

    // console.log(req);   // yah pe bhut sare request jate hai request ko print krne pe
    res.send({name:"arpit"}); // we can also print json data here using get method
})


// below is the post method to send the data to the server
// post method is used to send the data to the server
// post method is used to create the data on the server
// post method is used to update the data on the server
// post method is used to delete the data on the server
// post method is used to fetch the data from the server

app.post("/user",(req , res)=>{

      console.log(req.body);  // getting the data from the frontend ,as data is printed in the console , but in the terminal it is showing undefined

    // console.log("data saved successfully"); // yeah data ko store krne keliye console likha hua hai
    res.send("Data saved successfully"); //  and store krne ke baad yeah response bhi bhej rha hai
})


app.listen(4000 ,()=>{
    console.log("listening at port 4000");
})
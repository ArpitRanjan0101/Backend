const express = require('express');


const app = express();  // Sever create kiya humne yaha pe , using the express likh kar aur uss app bhi bolte hai  too , usse humne const app me store kar liya , yeah ek actually instant hai , jo btatata hai ki humne server create kiya hai



// app.use((req,res) =>{
//     res.send("Hello ji, welcome to our home page");
// }) 

// yaha pe humne ek callback function pass kiya hai , jisme req and res hai , req means request and res means response
// jab bhi koi request aayegi to woo is function ko call karega , aur res.send ke through response dega

// we can also send the data in json format niche diye hue code me likha hua hai , just check it out

// app.use((req,res) =>{
//     res.send({name : "Nexus", age : 29, city : "Bangalore"});
// }) 

// yaha pe humne ek callback function pass kiya hai , jisme req and res hai , req means request and res means response
// jab bhi koi request aayegi to woo is function ko call karega , aur res.json ke through response dega in json format


app.use("/about",(req,res) =>{
    res.send({name : "arpit", age : 12, city : "california"});
})

app.use("/contact",(req,res) =>{
    res.send(" hello everyone , this side arpit ranjan");
})


app.use("/detail",(req,res) =>{
    res.send(" hello everyone , this is detail page");

})

app.use("/",(req,res) =>{
    res.send(" hello everyone this is the landing page, this side arpit ranjan");
})

// yaha pe humne 2 alag alag route banaye hai , about and contact , jab bhi koi request aayegi to woo is function ko call karega , aur res.send ke through response dega

// agar hum chahte hai ki jab bhi koi about ke route pe request bheje to woo about ka hi response de , aur contact ke route pe request bheje to woo contact ka hi response de , to hum app.use ke andar pehla argument me route ka naam de denge , jese upar diye hue code me likha hua hai

app.listen(4000, () =>{
    console.log("listening at port 4000");
})    // yaha se listen karna start kar dega server 4000 port pe likin ess time koe response nhi dega  , to reply dene keliye hum app.use ka use karenge , jo ki upar likha hua hai
// jab bhi koi request aayegi to woo app.use ke andar jo function hoga usse call karega

// app.use() ka use karte hai hum , jab bhi koi request aayegi to woo app.use ke andar jo function hoga usse call karega
// app.use ke andar ek callback function pass karte hai jisme req and res hota hai
// req means request and res means response
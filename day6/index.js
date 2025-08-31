const express = require('express');


const app = express();  // Sever create kiya humne yaha pe , using the express likh kar aur uss app bhi bolte hai  too , usse humne const app me store kar liya 

app.use((req,res) =>{
    res.send("Hello ji, welcome to our home page");
})  // yaha pe humne ek callback function pass kiya hai , jisme req and res hai , req means request and res means response
// jab bhi koi request aayegi to woo is function ko call karega , aur res.send ke through response dega




app.listen(4000, () =>{
    console.log("listening at port 4000");
})    // yaha se listen karna start kar dega server 4000 port pe likin ess time koe response nhi dega  , to reply dene keliye hum app.use ka use karenge

// app.use() ka use karte hai hum , jab bhi koi request aayegi to woo app.use ke andar jo function hoga usse call karega
// app.use ke andar ek callback function pass karte hai jisme req and res hota hai
// req means request and res means response
const express = require('express');
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());


main().then(()=>{
    console.log("Connected to DB")
    app.listen(3000,()=>{
        console.log("Listening at port 3000");
    });
})
.catch((err)=>console.log(err));
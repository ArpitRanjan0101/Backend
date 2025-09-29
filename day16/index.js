// Server setup

const express = require('express');
const app = express();
const main = require('./database');
const User =require("./Models/users")

app.use(express.json());


// CRUD : Create Read Update Delete

main()
.then(async()=>{
    console.log("Connected to DB");
    app.listen(3000,()=>{
        console.log("Listening at port 3000");
    })
})

.catch((err)=>console.log(err));
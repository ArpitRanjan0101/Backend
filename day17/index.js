const express = require('express');
const app = express();
const main = require("./database");
const User = require("./users");

app.use(express.json());


main()
.then(async()=>{                      // here we did mnistake of not using then and catch with main function which returns a promise
    console.log("Connected to DB")
    app.listen(3000,()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));  
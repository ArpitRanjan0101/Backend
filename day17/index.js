const express = require('express');
const app = express();
const main = require("./database");
const User = require("./users");

app.use(express.json());


// In this api we will create a user and store it in the database , will write in try block while in catch block we will handle the error

app.post("/register",async(req,res)=>{


    try{
        
        await User.create(req.body);   // here we are using create method of mongoose to create a user and store it in the db , if any error occurs it will go to catch block
        res.send("User Registered Successfully"); // after successful creation of user this message will be sent to the client
    }

    catch(err){
        res.send("Error"+ err.message);  // if any error then it will handle all the stuff , this catch block will work
    }
     
})

// here we are going to make app.get api to get all the users from the database

app.get("/info",async(req ,res)=>{
    try{
        const result = await User.find();  // here we have used the find method of mongoose to get all the users from the database
        // and also we have used here await function since the information will not appear instantly it will take some time to fetch the data from the database
        res.send(result);
    
    }

    catch(err){
         res.send("Error"+err/message);
   
    }
})


main()
.then(async()=>{                      // here we did mnistake of not using then and catch with main function which returns a promise
    console.log("Connected to DB")
    app.listen(3000,()=>{
        console.log("Listening at port 3000");
    })
})
.catch((err)=>console.log(err));  


// we face an error here , that we unable to connect with the db becoz we could not install the mongoose package
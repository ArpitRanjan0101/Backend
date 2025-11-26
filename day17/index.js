const express = require('express');
const app = express();
const main = require("./database");
const User = require("./users");

app.use(express.json());


// In this api we will create a user and store it in the database , will write in try block while in catch block we will handle the error

app.post("/register",async(req,res)=>{


    try{

        // we will validate here  that ki user ka first name present hai ki nhi , agar hai present to hi aage ke line of code execute honge otherwise nhi honge
        
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
         res.send("Error"+err.message);
   
    }
})


// Here we will make the app.get for getting the info by ID so that we can get the information relate  d to particular user by ID

app.get("/user/:id",async(req,res)=>{
    try{
       const result = await User.findById(req.params.id);
       res.send(result);
    }

    catch(err){
        res.send("Error"+ err.message);
    }
})


// Here we will make app.Delete api to delete the user by ID and we are using findbyidanddelete method of mongoose so that it can find delete the id by finding it first

app.delete("/user/:id",async(req,res)=>{

    try{
        await User.findByIdAndDelete(req.params.id);
       res.send("User Deleted Successfully");
    }

    catch(err){
        res.send("Error"+ err.message);
    }
})


// Here we will use app.patch api to update the user by ID and we are using findbyidandupdate method of mongoose so that it can find update the id by finding it first

// {
//     "_id":"6925cd339dae346b40de1e21",
//     "age":13,
//     "emailId":"arpitr@gmail.com"
// }

app.patch("/user",async(req,res)=>{ 
    try{
        const{_id , ...update} =req.body;  // we are doing here array destructuring to get the id and the rest of the data to be updated
         await User.findByIdAndUpdate(_id, update, { runValidators: true });
         res.send("Update Successful");  
    }

    catch(err){ 
        res.send("Error"+ err.message);
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
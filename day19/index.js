const express = require('express'); 
const app = express();   // we store the express function in the app variable
const main = require("./database");
const User = require("./users");
const validateUser = require("./utils/validateUser");
const bcrypt = require("bcrypt");  // bcrypt is a library which helps us to hash the password before storing it in the database

app.use(express.json());


// In this api we will create a user and store it in the database , will write in try block while in catch block we will handle the error // donw here

app.post("/register",async(req,res)=>{
    try{

        // we will validate here  that ki user ka first name present hai ki nhi , agar hai present to hi aage ke line of code execute honge otherwise nhi honge

        // req.body ke andar data aaaya hai usmein first_name present hai ki nahi yeah check karenge and execute karenge , futher code only if it is present


       validateUser(req.body);  // here we are calling the validateUser function to validate the user data before creating the user in the database
      // WE ARE GOING TO DO VALIDATION OF THE PASSWORD AT THE API LEVEL SO THAT BY THE USER END THERE HSOULD COMPLEX PASSWORD CAN BE SET , SO LET'S VALIDATE IT
       // ON THE API LEVEL WE CAN ALSO CHECK THE SPECIFIC REQUIRED FIELD NEEDED BY US
       // FIRSTname should be length of >>3 , max <20)  


       // here below we are converting the password into the hascode using bcrypt libray

     req.body.password= await bcrypt.hash(req.body.password,10); // so here we are using the bcrypt library to hash the password , so that the hacker could not hack the password 



    //    const mandatoryField= ["firstName","emailId","age","password"] ;

    //    const IsAllowed = Object.keys(req.body).every((key)=> mandatoryField.includes(key)); 

    //    if(!IsAllowed){
    //     throw new Error("Fields Missing");
    //    }

       
     // WE ARE GOING TO DO VALIDATION OF THE PASSWORD AT THE API LEVEL SO THAT BY THE USER END THERE HSOULD COMPLEX PASSWORD CAN BE SET , SO LET'S VALIDATE IT 
      // ON THE API LEVEL WE CAN ALSO CHECK THE SPECIFIC REQUIRED FIELD NEEDED BY US
       // FIRSTname should be length of >>3 , max <20
        
        await User.create(req.body);   // here we are using create method of mongoose to create a user and store it in the db , if any error occurs it will go to catch block
        res.send("User Registered Successfully"); // after successful creation of user this message will be sent to the client
    }

    catch(err){
        res.send("Error"+ err.message);  // if any error then it will handle all the stuff , this catch block will work
    }
     
})



// we will make the login api here , so that we can login with the email and password and we will validate the email and password with the database and if it is valid then we will send the success message otherwise we will send the error message
app.post("/login", async(req , res)=>{
    try{
     // validate karna hai yaha pe
     const people = await User.findById(req.body._id);  // this actually find the user by id and return the user data in the people variable , if the user is not found then it will return null
     
     if(!(req.body.emailId ===people.emailId))
        throw new Error("Invalid credential");

 const IsAllowed = await bcrypt.compare(req.body.password ,10);

    if(!IsAllowed)
        throw new Error("Invalid credential");


    res.send("Login successfully");

 }
    catch(err){
       res.send("Error:"+err.message);
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
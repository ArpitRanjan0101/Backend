const express = require('express');
const app = express();
 const main = require('./database');   // database.js file ko import kr liya hai humne yaha pe taki wo connect ho jaye database se
 const User = require("./Models/users");   // yaha pe humne user model ko import kiya hai taki wo database me create ho jaye
 app.use(express.json());


// CRUD operations
// C - create , we learned here how to create the data and store it in the database
// R - read , we learned here how to read the data from the database
// U - update
// D - delete

app.get("/info",async (req, res) => {
    // res.send("Hello from express");
const ans = await User.find({});
res.send(ans);
});

app.post("/info" ,async (req ,res) => {   // sync function likha jaruri hai so that we can use the await keyword

    // const ans = new User(req.body);
    // await ans.save();
    // res.send("Data added successfully");

// another way to store the data in the database
// we can use create() function to create the object and save it in the database directly
// to  avoid the error we use try catch block

try{
await User.create(req.body);
res.send("Data added successfully");
}
catch(err){
    res.send(err);
}

})

app.delete("/info", async (req, res) => {
   await User.deleteOne({name:"Vishal"});   // await likhna bhut jrurui hai bhai yaha pe , kyuki network call jaega to kuch time to lgegga response call back hone me , to uske liye await lagana jruri hai 
  res.send("Data deleted successfully"); 

});  // delete the data from the database



main()
    .then(async() => {      // yaha pe humne async isliye lagaya hai taki hum await use kr ske neeche
        console.log("ConnectED TO db")
        app.listen(3000,() => {
            console.log(" listening at port 3000");
        })

const ans = await User.find({name: "Arpit"});
   console.log(ans);


    })
    .catch((err) => console.log(err));



// app.listen(3000, () => {
//     console.log(" listening at port 3000");
// })
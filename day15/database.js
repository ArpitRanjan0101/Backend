const mongoose = require('mongoose');
// const {Schema} = mongoose;   // Schema is a class , we are extracting it from mongoose

async function main() {   // TO connect with the mongodb , we are writing this function
    await mongoose.connect('mongodb+srv://arpitvijans1234:arpitvijans11111@clustertest.itezwo1.mongodb.net/BookStore');   // URl link ke last me humne database ka name likha hai , woo automatically create ho jayega agar wo exist nhi krta hoga to , simply , we need not create database manually

    // all code will be writing over here

    // const userSchema = new Schema({    // oe we can us here  new mongoose.Schema bhi likh skte hai
    //     name: String,
    //     age: Number,
    //     city: String,
    //     gender: String   
    // })

    // Model ko create krna === Collection ko create krna(table ko create krna)
// Simply bol skte hai ki Class ko create kiya hai 

//    const User = mongoose.model('User', userSchema);   // User is the name of the collection , aur uss user collection ka schema upar likha hua hai  , esse ko model create krna bolte hai aur collection create krna bhi bolte hai 

   // if we want to create the object of the class , we just use the new keyword aur esko Document ko create kiya hai bol skte hai
   const user1 = new User({name: "Arpit", age: 21, city:"Hazaribagh", gender:"Male"});

   await user1.save();   // save() function is used to save the object in the database

   await User.create({name: "Ankit", age: 22, city:"Ranchi",});   // create() function is used to create the object and save it in the database directly


   // if we want to create the multiple objects at a time , we can use insertMany() function
    await User.insertMany([{name:"Ankit", age: 22, city:"Ranchi", gender:"Male"}])

    // sabhi documents ko find out krne keliye we use below line of code aur phir usse terminal pe print karwane keliye we use below line of code
    // const ans = await User.find();
    // console.log(ans);


    // to find documents by particular field , we use below line of code
    const ans = await User.find({name: "Arpit"});
    console.log(ans);

} 


main()
    .then(() => console.log("ConnectED TO db"))
    .catch((err) => console.log(err));
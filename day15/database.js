const mongoose = require('mongoose');

async function main() {   // TO connect with the mongodb , we are writing this function
    await mongoose.connect('mongodb+srv://arpitvijans1234:arpitvijans11111@clustertest.itezwo1.mongodb.net/BookStore');   // URl link ke last me humne database ka name likha hai , woo automatically create ho jayega agar wo exist nhi krta hoga to , simply , we need not create database manually

    // all code will be writing over here

    const userSchema = new Schema({
        name: String,
        age: Number,
        city: String,
        gender: String   
    })

    // Model ko create krna === Collection ko create krna(table ko create krna)
   const User = mongoose.model('User', userSchema);   // User is the name of the collection , aur uss user collection ka schema upar likha hua hai  , esse ko model create krna bolte hai aur collection create krna bhi bolte hai 
}


main()
    .then(() => console.log("ConnectED TO db"))
    .catch((err) => console.log(err));
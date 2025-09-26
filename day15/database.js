const mongoose = require('mongoose');

async function main() {   // TO connect with the mongodb , we are writing this function
    await mongoose.connect('mongodb+srv://arpitvijans1234:arpitvijans11111@clustertest.itezwo1.mongodb.net/');

    // all code will be writing over here

    const userSchema = new Schema({
        name: String,
        age: Number,
        city: String,
        gender: String   
    })
}


main()
    .then(() => console.log("ConnectED TO db"))
    .catch((err) => console.log(err));
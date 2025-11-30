const mongoose = require('mongoose');
// moongose is a library which helps us to connect to mongodb database from our nodejs application
async function main() {
    await mongoose.connect("mongodb+srv://arpitvijans1234:arpitvijans11111@clustertest.itezwo1.mongodb.net/Instagram") // in the previous database we had created the database with Bookstore name but now in the new connection  we are creating the database with Aadhar name
}



   // const userId = req.params.id;  // here we are getting the id from the url parameter
module.exports = main; // ye isliye ki hum is file ko import kar sakein , jahan jahan hume database se connect hona hai aur help krta hai
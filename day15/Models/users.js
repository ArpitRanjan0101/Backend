const mongoose = require('mongoose'); // this line help us to import mongoose library
const {Schema} = mongoose; // this line help us to import Schema from mongoose library

const userSchema = new Schema({    // oe we can us here  new mongoose.Schema bhi likh skte hai
        name: String,
        age: Number,
        city: String,
        gender: String   
    })
    const User = mongoose.model('User', userSchema);
module.exports = User; // this line help us to export User model to use in other files
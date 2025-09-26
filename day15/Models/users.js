const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({    // oe we can us here  new mongoose.Schema bhi likh skte hai
        name: String,
        age: Number,
        city: String,
        gender: String   
    })
    const User = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

async function main() {
    await mongoose.connect("mongodb+")
}




module.exports = main; // ye isliye ki hum is file ko import kar sakein , jahan jahan hume database se connect hona hai
const mongoose = require('mongoose');
const {Schema} = mongoose;


// We have made user Schema here , with the help of which , we can make api call , this schema design will be shown over the database 

const userSchema = new Schema({
   firstName:{
    type:String
   },
   lastName:{
    type:String 
   }, 
   age:{
        type:Number
   },
   gender:{
        type:String
   },
   emailId:{
        type:String
   },
   password:{
        type:String
   },
   photo:{
        type:String  // type isislye string kyuki hum url store karenge , photo kahi aur hi store hogi
   }
});

const User = mongoose.model("user", userSchema);

module.exports = User; 
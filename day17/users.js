const mongoose = require('mongoose');
const {Schema} = mongoose;


// We have made user Schema here , with the help of which , we can make api call , this schema design will be shown over the database 

const userSchema = new Schema({
   firstName:{
    type:String,
    required:true  // this is actually a validation we are applying here to validate that first name is required field , agar jab tak hum required :true nahi karenge tab tak hum user create  nhi kar payenge bina first name ke bhi
   },
   lastName:{
    type:String 
   }, 
   age:{
        type:Number,
        min:14,
        max:65
   },
   gender:{
        type:String
   },
   emailId:{
        type:String,
        required:true 
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
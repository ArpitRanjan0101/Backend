const mongoose = require('mongoose');
const {Schema} = mongoose;


// We have made user Schema here , with the help of which , we can make api call , this schema design will be shown over the database 

const userSchema = new Schema({
   firstName:{
    type:String,
    required:true,  // this is actually a validation we are applying here to validate that first name is required field , agar jab tak hum required :true nahi karenge tab tak hum user create  nhi kar payenge bina first name ke bhi
    unique:true, // ye bhi ek validation hai jiska matlab hai ki koi bhi do user same first name ke sath register nahi kar payenge
     minlength:3,  // this tell us we should not go below this length to name the user
     maxlength:30

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
        type:String,
     //    enum:["male","female","others"]  // enum is used to restrict the values that can be taken by gender 

     validate(value){
          if(!["male","female","others"].includes(value))
               throw new Error("Invalid Gender")
     }
   },
   emailId:{
        type:String,
        required:true 
   },
   password:{
        type:String
   },
   photo:{
        type:String, // type isislye string kyuki hum url store karenge , photo kahi aur hi store hogi
        default:"this is the default photo"
   }
});

const User = mongoose.model("user", userSchema);

module.exports = User; 
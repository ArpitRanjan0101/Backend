const mongoose =require('mongoose');
const {Schema} = mongoose;


// we are defining the Schema of the document which we are going to store in the collection

const userSchema = new Schema({
    firstName :{
        type:String
    },
    lastName :{
        type:Number
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
        type:String  // here we will store only the link of the pic while the pic will be hosted in the db     
    }
    
    

    
})

const User = mongoose.model("user",userSchema);
module.exports = User;
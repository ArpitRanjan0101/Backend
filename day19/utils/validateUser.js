const { default: isEmail } = require("validator/lib/isEmail");

 const validator = require("validator");

 function validateUser(data){
 const mandatoryField= ["firstName","emailId","age","password"] ;

       const IsAllowed = Object.keys(data).every((key)=> mandatoryField.includes(key)); 

       if(!IsAllowed)
        throw new Error("Fields Missing");
       
       if(!validator.isEmail(data.emailId))
         throw new Error("invalid Email");  
        
       if(!validator.isStrongPassword(data.password))
         throw new Error("Password is not strong enough");

       if(!(data.firstName.length>=3 && data.firstName.length<=20))
         throw new Error("firstName length is not in range");
        
    };
      module.exports = validateUser; 
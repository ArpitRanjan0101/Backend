const { default: isEmail } = require("validator/lib/isEmail");

 const validator = reuqire("validator");

 function validateUser(date){
 const mandatoryField= ["firstName","emailId","age","password"] ;

       const IsAllowed = Object.keys(date).every((key)=> mandatoryField.includes(key)); 

       if(!IsAllowed){
        throw new Error("Fields Missing");
       }
       if(!validator.isEmail(date.emailId))
         throw new Error("invalid Email");  
        
       if(!validator.isStrongPassword(date.password))
         throw new Error("Password is not strong enough");
    };
      module.exports = validateUser; 
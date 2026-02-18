 
 function validateUser(date){
 const mandatoryField= ["firstName","emailId","age","password"] ;

       const IsAllowed = Object.keys(date).every((key)=> mandatoryField.includes(key)); 

       if(!IsAllowed){
        throw new Error("Fields Missing");
       }
    };
      module.exports = validateUser; 
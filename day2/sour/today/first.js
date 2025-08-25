 const sum = require("./current/sum");
 const sub = require("./current/sub");
 const mul = require("./current/mul");

 // here to use the commonjs modules we have to use the commonjs in package.json file so that node will understand that we are using commonjs modules..


 // to use the MJS modules we have to use the type module in package.json file so that node will understand that we are using MJS modules..


 sum(7,8);
 sub(10,5);
 mul(3,4);      
 // sum 
 // sub
 // mul

  console.log("Hello arpit this side here");
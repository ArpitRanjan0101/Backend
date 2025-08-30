
// CJS: Common JS module system is told for below line of code for importing the second .js to be executed in first.js

// require('./second');   // importing second file here


// ( function(){
//     console.log("hello ji i am second");

//     function sum(a,b){
//         console.log(a+b);
//     }
//     sum(3,4); // this will execute the sum function with 3 and 4 as arguments
// })(); 


// IIFE: Immediately Invoked Function Expression concept is used here, which means the function will execute immediately after its definition, means code of second.js will be be executed in first.js with the help of IIFE, so that we can use the function sum in first.js file.



// sum(3,4);   // will not execute beacause , firstly we have to import the function to be executed .. , sum function private ki trah aya hoga phele jo ki execute nhi hoga   


console.log("hello i am first");

// code will be executed in the order because we have imported second.js in first.js, so the code of second.js will be executed first and then the code of first.js will be executed.


const{ sum, sub} = require('./second'); // importing the sum function from second.js file..as well as sub function using object concept


// ( function(){
//     console.log("hello ji i am second"); 

//     function sum(a,b){
//         console.log(a+b);
//     }
//     sum(3,4); // this will execute the sum function with 3 and 4 as arguments
// })(); 





 












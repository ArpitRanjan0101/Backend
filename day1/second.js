// console.log("this is arpit ranjan here");

// function sum(a,b){
//     console.log(a+b);
// }
// //   sum(7,9);

// module.exports = sum; // exporting the sum function so that it can be used in other files.   


// if we want to export more than two functions then we can use the concept of the object

function sum(a,b){
    console.log(a+b);
}
sum(3,4); // this will execute the sum function with 3 and 4 as arguments

function sub(a,b){
    console.log(a-b);
}
sub(7,4); // this will execute the sub function with 3 and 4 as arguments
 
console.log(module.exports); //   , here module.export is simply empty objects,, here when we will print the module.exports it will show us the object with sum and sub function as properties, which means we can use these functions in other files by importing them using require('./second').,,, but we if we print the module exports before any declaration of module export then it will show the only actual thing like it is an empty object in terminal with sign {} .  


// module.exports = {sum , sub};   // exporting the sum and sub function so that it can be used in other files.
// now we can import the sum and sub function in other files using require('./second');

// when keys and values are same then we use only one name like above


// as an object store kiya humne ,even as an value bhi store kr skte hai like below 

// {sum:sum, sub:sub}  // this is also a valid way to export the functions, but it is not a good practice to do so, because it will make the code less readable and less maintainable. it is for below line of code


module.exports.sum = sum; // exporting the sum function so that it can be used in other files.
module.exports.sub = sub; // exporting the sub function so that it can be used in other files.

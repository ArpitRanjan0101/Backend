// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 10);      // here time is set to 10 milliseconds after which the callback function will be executed 



// // seTimeout yaha pe bass ek funtion calll hai , uski implementation LIBUV ke aNDAR LIKHE  hue hai jo ki C language me likha hua hai

// // setTimeout ek web API hai jo ki browser ke andar hota hai 
// // node js me bhi yehi concept hai but node js me ye LIBUV ke andar likha hua hai jo ki C language me likha hua hai
// // jab hum setTimeout call karte hai to wo ek timer start kar deta hai aur jab wo timer complete ho jata hai to wo callback function ko call kar deta hai
// // ye callback function event loop ke through call hota hai


// yaha pe javascript synchronous hai , iska matlab ye hai ki ye line by line execute hota hai
// jab tak ek line execute nahi hoti tab tak dusri line execute nahi hoti
// jab hum setTimeout call karte hai to wo ek timer start kar deta hai aur jab wo timer complete ho jata hai to wo callback function ko call kar deta hai
// ye callback function event loop ke through call hota hai

// but settimeout ko js handle nhi kar pta hai , isilye woo LIBUV ko de deta hai tabki wo esse handle kre , agar o LIBUV ko nhi dega to code block ho jaega  aur aage code execute nhi hoga 


const fs = require('fs'); // file system module
// fs module ke through hum file read and write kar sakte hai

// fs.readFile('data.json', 'utf-8', (err, data) => {   // yaha pe hum data.json file read kar rahe hai  

let a = 10;
let b = "Hello myself arpit ranjan";

console.log(b);

function sum(a, b) {
    return a + b;
}

setTimeout(() =>{  
    console.log("Hello after 2 seconds");
},6000)

// settimeout hume call back function deta hai jo ki event loop ke through call hota hai  , yaha pe hello after 2 seconds 3 second ke baad print hoga

console.log(a);
console.log(sum(10, 20));    
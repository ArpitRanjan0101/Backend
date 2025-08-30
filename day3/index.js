// setTimeout(() => {
//     console.log("Hello after 2 seconds");
// }, 10);      // here time is set to 10 milliseconds after which the callback function will be executed 



// // seTimeout yaha pe bass ek funtion calll hai , uski implementation LIBUV ke aNDAR LIKHE  hue hai jo ki C language me likha hua hai

// // setTimeout ek web API hai jo ki browser ke andar hota hai 
// // node js me bhi yehi concept hai but node js me ye LIBUV ke andar likha hua hai jo ki C language me likha hua hai
// // jab hum setTimeout call karte hai to wo ek timer start kar deta hai aur jab wo timer complete ho jata hai to wo callback function ko call kar deta hai
// // ye callback function event loop ke through call hota hai


let a = 10;
let b = "Hello myself arpit ranjan";

console.log(b);

function sum(a, b) {
    return a + b;
}

setTimeout(() =>{  
       
    console.log("Hello after 2 seconds");
},3000)

// settimeout hume call back function deta hai jo ki event loop ke through call hota hai

console.log(a);
console.log(sum(10, 20));   
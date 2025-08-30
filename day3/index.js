setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 200);      

// seTimeout yaha pe bass ek funtion calll hai , uski implementation LIBUV ke aNDAR LIKHE  hue hai jo ki C language me likha hua hai

// setTimeout ek web API hai jo ki browser ke andar hota hai 
// node js me bhi yehi concept hai but node js me ye LIBUV ke andar likha hua hai jo ki C language me likha hua hai
// jab hum setTimeout call karte hai to wo ek timer start kar deta hai aur jab wo timer complete ho jata hai to wo callback function ko call kar deta hai
// ye callback function event loop ke through call hota hai

 
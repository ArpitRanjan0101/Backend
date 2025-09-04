
// agar niche hum method ko define krte hai to yeah fetch wale ko get method hi samjta hai
// default method get hi hota hai
// means by default fetch get method hi hota hai
// means agar hum fetch me method define nhi krte hai to yeah get method hi leta hai

// we need not to define to much things like that of Post method , sinc eit get already understood that this get method and fetching the data from the backend 

// Default method is GET method
const response2  = await fetch("https://fktuygjbd.com");


//below is the post method to send the data to the server
// means with help of the given below function we show that , it is the way to write down the post method
// post method is used to send the data to the server
// post method is used to create the data on the server
// post method is used to update the data on the server 
// post method is used to delete the data on the server
// post method is used to fetch the data from the server

const response = await fetch("https://fktuygjbd.com",{
    method : "POST",
    headers : {
        "Content-Type" : "application/json"
    },
    body : JSON.stringify({
        name : "Heer",
        age : 21
    })
});


// Patch and Put method bhi same hi hota hai ,  Post ke jaisa hi work krta hai
// difference is that , put me pura data update krta hai , aur patch me kuch part hi update krta hai
// put me agar hum kuch field nhi bhejte hai to wo field null ho jati hai
// patch me agar hum kuch field nhi bhejte hai to wo field waise hi rehti hai

// Patch method

// const response3 = await fetch("https://fktuygjbd.com",{
//     method : "PATCH",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify({
//         name : "Heer",
//         age : 21
//     })
// });


// Put method

// const response4 = await fetch("https://fktuygjbd.com",{
//     method : "Put",
//     headers : {
//         "Content-Type" : "application/json"
//     },
//     body : JSON.stringify({
//         name : "Heer",
//         age : 21
//     })
// });
 


// agar niche hum method ko define krte hai to yeah fetch wale ko get method hi samjta hai
// default method get hi hota hai
// means by default fetch get method hi hota hai
// means agar hum fetch me method define nhi krte hai to yeah get method hi leta hai
fetch("https://fktuygjbd.com")


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
 

const http = require('http'); // http module ko import kar rahe hai
// http module ke through hum server create kar sakte hai

const server = http.createServer((req ,res)=>{
    // res.end("Hello jii");   // jo bhi server pe visit krega usse hello ji bolkar greeting hoga

if(req.url==="/"){
    res.end("Hello ji, welcome to our home page");
}
else if(req.url==="/contact"){
    res.end("Hello ji, welcome to our contact page");
}
else if(req.url==="/about"){
    res.end("Hello ji, welcome to our about page");
}
else {
    res.end("404 page not found");
}


});


// above snippet code is for creating a server , which show the routing 


// server create kre ke baad sunega bhi too woo port number 4000 pe sunega
// jab bhi koi request aayegi to woo ek callback function call karega jisme req and res hoga

// request and response hum waha se dege , jaha se server create kiye hai  call bac function banakar aisa krte hai hum

server.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
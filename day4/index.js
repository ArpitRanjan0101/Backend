const http = require('http');

const server = http.createServer((req ,res)=>{
    res.end("Hello jii");   // jo bhi server pe visit krega usse hello ji bolkar greeting hoga

});


// server create kre ke baad sunega bhi too woo port number 4000 pe sunega
// jab bhi koi request aayegi to woo ek callback function call karega jisme req and res hoga

// request and response hum waha se dege , jaha se server create kiye hai  call bac function banakar aisa krte hai hum

server.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
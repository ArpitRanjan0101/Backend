const http = require('http');

const server = http.createServer();


// server create kre ke baad sunega bhi too woo port number 4000 pe sunega
// jab bhi koi request aayegi to woo ek callback function call karega jisme req and res hoga

// request and response hum waha se dege , jaha se server create kiye hai

server.listen(4000,()=>{
    console.log("Server is running on port 4000");
})
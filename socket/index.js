const express = require('express');
const app = express();
const {Server} = require("socket.io"); // here we are importing the Server class from the socket.io library to create a socket server , simply we can say that , here , we are creating the socket server after creating the http(TCP connection) server using express , upgrade kr diya humne TCP connection ko websocket connection me using socket.io library
const http = require("http"); // here we are importing the http module to create a http server using express app

const server = http.createServer(app);

const io = new Server(server); // here we are creating a socket server by passing the http server to the Server class  , simply yaha yeah meaning hai ki , jab normal request ati hai to usse server level pe handle kro , but jaise hi koi websocket connection request aati hai to ussee socket server level pe handle kro using socket.io library , by putting it into the io variable


io.on("connection",(socket)=>{
    socket.on('message',(data)=>{
        io.emit("new-message",data);
    })

    socket.on("disconnect",()=>{
        console.log("Disconnected from the server");
    })
})







server.listen(3000 ,()=>{
  console.log("Listening on port 3000");
})







//  const server = app.listen(3000,() =>{
//     console.log("listening at port 3000");
// })

// const io = new Server(server); // here we are creating a socket server by passing the http server to the Server class  , simply yaha yeah meaning hai ki , jab normal request ati hai to usse server level pe handle kro , but jaise hi koi websocket connection request aati hai to ussee socket server level pe handle kro using socket.io library , by putting it into the io variable
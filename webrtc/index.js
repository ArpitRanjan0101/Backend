// here in this file we will study about the webrtc module and mcp server
// webrtc module is used for real time communication between two peers
// mcp server is used for media control protocol server
const express = require('express');
const app = express();  
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
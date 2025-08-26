// we are actually doing the here that we are exporting multiple functions from different files in a single file using CommonJS module system in Node.js abd we will import this file in the first.js file to use all the functions in a single file..

const sum = require("./sum");
 const sub = require("./sub");
 const mul = require("./mul");
 
 Module. exports = {sum, sub, mul}; // This is the CommonJS way of exporting functions in Node.js using the object shorthand property..
const express = require('express');
const app = express();
const main = require("./database");
const User = require("./Models/users");

app.use(express.json());
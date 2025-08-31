const express = require('express');


const app = express();  // Sever create kiya humne yaha pe , using the express likh kar aur uss app bhi bolte hai  too , usse humne const app me store kar liya 
app.listen(4000, () =>{
    console.log("listening at port 4000");
})    // yaha se listen karna start kar dega server 4000 port pe
const express = require('express');
const app = express();
 const main = require('./database');   // database.js file ko import kr liya hai humne yaha pe taki wo connect ho jaye database se
 app.use(express.json());


main()
    .then(() => {
        console.log("ConnectED TO db")
        app.listen(3000,() => {
            console.log(" listening at port 3000");
        })
    })
    .catch((err) => console.log(err));



app.listen(3000, () => {
    console.log(" listening at port 3000");
})
const express = require("express");
const app = express();

// we have not studied about database yet , so we will use here array of objects to store the data
// means we will use here array of objects to store the data of the books

const BookStore =[
    {id:1,name:"Harry Potter",author:"DevFlux"},
    {id:2,name:"Friends",author:"J.K.Rowling"},
    {id:3,name:"The Alchemist",author:"Paulo Coelho"},
    {id:4,name:"Wings of Fire",author:"A.P.J Abdul Kalam"},
    {id:5,name:"Rich Dad Poor Dad",author:"Robert Kiyosaki"},
    {id:6,name:"Think and Grow Rich",author:"Napoleon Hill"},
    {id:7,name:"The Power of Now",author:"Eckhart Tolle"},
    {id:8,name:"The Subtle Art of Not Giving a F*ck",author:"Mark Manson"},
    {id:9,name:"Atomic Habits",author:"James Clear"}
]

app.use(express.json()); // ye line humne isliye likhi hai , jisse hum data ko read kr ske , ye parsing krta hai , without this line we cant read the data from the frontend

app.get("/book",(req ,res) =>{
    res.send(BookStore); // we can also print json data here using get method , as if request will appear on this url , then it will show the data of the books which is present in the array of objects through get method
})

app.get("/book/:id",(req ,res) =>{

    const id = parseInt(req.params.id); // ye line humne isliye likhi hai , jisse hum id ko read kr ske , as we are using here dynamic routing
    // console.log(typeof req.params.id); // yeah string type ka hai , too usse number me convert krne keliye hum parseInt use krte hai

     const book = BookStore.find(info=> info.id === id); // with this line of code we can find the details of book with the particular id

    //  console.log(req.params); // ye line humne isliye likhi hai , jisse hum id ko read kr ske , as we are using here dynamic routing
    res.send(book); // we can also print json data here using get method , as if request will appear on this url with particular id , then it will show the data of the book which is present in the array of objects through get method
    // ");
}) // ye line humne isliye likhi hai , jisse hum id ko read kr ske , as we are using here dynamic routing

app.post("/book",(req,res)=>{
    // console.log(req.body);
    BookStore.push(req.body);
    res.send("Data saved successfully"); 
})

app.patch("/book",(req,res)=>{
    res.send("Patch");
})


app.listen(3000,()=>{
    console.log("listening at port 3000");
})
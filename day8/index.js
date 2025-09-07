const express = require("express");
const app = express();

// we have not studied about database yet , so we will use here array of objects to store the data
// means we will use here array of objects to store the data of the books

const BookStore =[
    {id:1,name:"Harry Potter",author:"DevFlux"},
    {id:2,name:"Friends",author:"Vikas"},
    {id:3,name:"The Alchemist",author:"Paulo Coelho"},
    {id:4,name:"Wings of Fire",author:"A.P.J Abdul Kalam"},
    {id:5,name:"Rich Dad Poor Dad",author:"Robert Kiyosaki"},
    {id:6,name:"Hello",author:"Vikas"},
    {id:7,name:"The Power of Now",author:"Eckhart Tolle"},
    {id:8,name:"The Subtle Art of Not Giving a F*ck",author:"Mark Manson"},
    {id:9,name:"Atomic Habits",author:"James Clear"}
]

app.use(express.json()); // ye line humne isliye likhi hai , jisse hum data ko read kr ske , ye parsing krta hai , without this line we cant read the data from the frontend

app.get("/book",(req ,res) =>{

     console.log(req.query);  // jis author ki hume book chye , usse search krke findout krne keliye hum Query ka use krte hai

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

// Patch request ke through hum , kisi particular data me update ktr skte hai like firstly hum jis id me update krna hai use hum .find ke help se find krte hai then hum uske baad hum body of postman me raw data dekar change kr dete hai , bass yaha pe code ke through command dete hai ,mai execution postman ke through krte hai , jo generally front end se aata hai , jo bhi changes aaegi patch request dene ke baad , woo postman ke get request me show hoga simply

app.patch("/book",(req,res)=>{
    console.log(req.body);

    const Book = BookStore.find(info=>info.id===req.body.id); // this line of code is helping me to find the particular book with the help of id which is coming from the body of postman

    // Book.author = req.body.author; // this line of code is helping me to update the author name of the particular book which is coming from the body of postman

    // suppose multiple cases  update krne  aa gye agar too phir hum simply if statement ka use krne lgege

    if(req.body.author)
        Book.author = req.body.author;
    if(req.body.name)
        Book.name = req.body.name;

    res.send("Patch updated successfully");
})


// In the PUT request , we will update the whole data of the particular book with the help of the id which is coming from the body of postman

app.put("/book",(req,res)=>{
    const Book = BookStore.find(info=>info.id===req.body.id);
    Book.author = req.body.author;
    Book.name = req.body.name;
    res.send("Changes updated successfully");
})

// In the DELETE request , we will delete the whole data of the particular book with the help of the id which is coming from the body of postman

app.delete("/book/:id",(req,res)=>{

    const id = parseInt(req.params.id);
    const index = BookStore.findIndex(info=>info.id===id); // this line of code se hum us particular book ka index find kr rhe hai , jisse hum delete krna chahte hai

    // console.log(index); // index check krne keliye use kiya hai humne

    BookStore.splice(index,1);  //  this line of code will help us to delte the paticular index book
    res.send("Deleted successfully");  // after deleting the index , this meesage will be shown
})

// yes the above line of code for deleting the particular book from the bookstore array of objects

app.listen(3000,()=>{
    console.log("listening at port 3000");
})
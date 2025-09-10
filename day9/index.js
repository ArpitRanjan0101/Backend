const express = require("express");
const app = express();

// CRUD : Create Read update Delete , we will study here

// we are going to make the project over here 

 // DATABASE :  we are creating over here in which we are storing the food items details 
 
const FoodMenu =[
{id:1 , food:"Chowmin" ,category:"veg", price:500},
{id:2 , food:"Butter Nan", category:"Veg", price:900},
{id:3 , food:"Chicken", category:"non-Veg", price:100},
{id:4 , food:"Tandoori roti", category:"Veg", price:5000},
{id:5 , food:"Veg biryani", category:"Veg", price:300},
{id:6 , food:"Paneer fry", category:"Veg", price:900},
{id:7 , food:"Ras malae", category:"Veg", price:600},
{id:8 , food:"Chawal sabhi", category:"Veg", price:500},
{id:9 , food:"Rajma fry", category:"Veg", price:700},
{id:10 , food:"Dhood roti", category:"Veg", price:800},
{id:11 , food:"Loolipop", category:"non-Veg", price:400},
{id:12 , food:"Khabab", category:"Veg", price:800},
{id:13 , food:"Slaad", category:"Veg", price:900},
{id:14 , food:"Khorma", category:"Veg", price:1000},
{id:15 , food:"Sabji chawal", category:"Veg", price:50},
{id:16 , food:"nun Roti", category:"Veg", price:97},
{id:17 , food:"Mattor paneer", category:"Veg", price:500},
]

// User ka Addtocart hoga yaha pe mention jo bhi diya hua hai

const AddToCart =[] ;



// someone who want to see the foodmenu over the screen , so we have given here app.get request , they can see the  foodmenu , admin aur user dono dekh skte hai
app.get("/food",(req ,res)=>{
    res.send(FoodMenu);
})

app.post("/admin",(req,res)=>{
    // we can write over here food item into this app.post if admin want to add somethings , but firstly i have to decide , is admin is reallty a admin , since using localhost:3000/admin , through which anyone can access to add the foodMenu , we will see , how to protect it  

    // Authentication krna hoga hume , ki such me woo user hi hai na , then Authorisation krna hoga hume agar woo admin such me hua too

    // Dummy code likh rhe hai yaha pe , ki admin ya user apna ek Token lekar aaega
    const token = "ABCDEFG"
    const Access = token ==="ABCDEFG" ?1:0;

    if(Access){
        FoodMenu.push(req.body);
        res.send("Item Added succesfully");
    }
    else{
        res.send("Item can't be added"); 
    }

// Verification humne if ..esle code likha hai 
    if(Access)
})


 

app.listen(3000,()=>{
    console.log("Listening at the port 3000");
})
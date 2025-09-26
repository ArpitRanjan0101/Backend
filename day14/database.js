// const url ="mongodb+srv://arpitvijans1234:<db_password>@clustertest.itezwo1.mongodb.net/";  

// above link , we have mentioned to connect with database server of the mongodb atlas , which is actually a cloud service to store the data of our application
// but we have not mentioned the database name , so we will add that in the below code
// also we will connect through mongoose
// we will see the full working   




// BElow line of code help us to connect with the mongodb database server

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://arpitvijans1234:arpitvijans11111@clustertest.itezwo1.mongodb.net/";  // we have given here , the password of the databse user also
const client = new MongoClient(url); // with the help of this URL we usually connect with the cluster 

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();  // this line od code tells us that to connect with the database server , it would take the some milisec , so for that , period of time wait and till then don't execute the next line of code
  console.log('Connected successfully to server');
  const db = client.db(dbName);  // this line of code tells to connect with the database whose name is 'CoderArmy' , which is present within the cluster but here now we will use dbName only to connect with the server
  const collection = db.collection('user'); // this line of code tells to connect with the collection whose name is 'user' , which is present within the database whose name is 'CoderArmy'

  // the following code examples can be pasted here below

  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

// upar wali lines of code , me findresult likha hua hai , jisme humne collection ke andar se saare documents ko find kar ke , usse array me convert kar diya hai , aur uske baad usse print karwa diya hai aur jo bhi data  database me created tha , wo yaha terminal pe fecth hogya aur print bhi hogya hai

const insertResult = await collection.insertOne({ name: 'arpit', age:40});
console.log('Inserted documents =>', insertResult);

// yeah upar wali lines of code ,insertion keliye use he hai , agar mujhe data enter krna hai too , mere terminal  me show too hojaega hi as well as , database me bhi update ho jaega

  return 'done.';
}

main()    // we called the main function from here , thorugh this line of code .
  .then(console.log)
  .catch(console.error) // koe error aa jae to  to uss error ko catch print karwa dega
  .finally(() => client.close());  // finally yeah krta hai ki , jo connection bana hai usse close kr do .
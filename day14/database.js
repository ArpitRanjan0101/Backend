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
const url = "mongodb+srv://arpitvijans1234:<db_password>@clustertest.itezwo1.mongodb.net/";
const client = new MongoClient(url); // with the help of this URL we usually connect with the cluster 

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();  // this line od code tells us that to connect with the database server , it would take the some milisec , so for that , period of time wait and till then don't execute the next line of code
  console.log('Connected successfully to server');
  const db = client.db(CoderArmy);  // this line of code tells to connect with the database whose name is 'CoderArmy' , which is present within the cluster
  const collection = db.collection('user'); // this line of code tells to connect with the collection whose name is 'user' , which is present within the database whose name is 'CoderArmy'

  // the following code examples can be pasted here...

  return 'done.';
}

main()    // we called the main function from here , thorugh this line of code .
  .then(console.log)
  .catch(console.error) // koe error aa jae to  to uss error ko catch print karwa dega
  .finally(() => client.close());  // finally yeah krta hai ki , jo connection bana hai usse close kr do .
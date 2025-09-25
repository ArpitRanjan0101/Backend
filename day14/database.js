// const url ="mongodb+srv://arpitvijans1234:<db_password>@clustertest.itezwo1.mongodb.net/";  

// above link , we have mentioned to connect with database server of the mongodb atlas , which is actually a cloud service to store the data of our application
// but we have not mentioned the database name , so we will add that in the below code
// also we will connect through mongoose
// we will see the full working   
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://arpitvijans1234:<db_password>@clustertest.itezwo1.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'CoderArmy';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
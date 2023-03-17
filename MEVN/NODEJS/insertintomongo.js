const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://0.0.0.0:27017';

// Database Name
const dbName = 'college';

// Use async/await to connect to the server
async function connectToServer() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db('college');
  console.log("Connected successfully to server");
  // Do something with the database here...

  // Get the collection
  const collection = db.collection('Department');

  // Insert a document
  const result = await collection.insertOne({ F_nm: 'Varun', L_nm: 'Rajeshirke', DOB: '10/10/2001',Phone_no: '8484976409' });

  console.log(`Inserted ${result.insertedCount} document into the collection`);

  client.close();
}

connectToServer();
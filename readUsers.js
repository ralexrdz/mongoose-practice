let mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'bedu-mongo';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) console.log(err)

  console.log("Connected successfully to server");
 
  const db = client.db(dbName);

  db.collection('users').find().toArray(function (err, res) {
    if (err) console.log(err)
    console.log('res users.find', res)
  })
 
  client.close();
});
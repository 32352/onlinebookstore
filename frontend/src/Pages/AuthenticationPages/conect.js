const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ravi:dingutaka@raviteja.9z9ger1.mongodb.net/demo?retryWrites=true&w=majority&appName=raviteja";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("demo").collection("users");
    // create a document to be inserted
    const doc = { username: "exampleUser", password: "examplePass", email: "example@example.com" };
    collection.insertOne(doc, function(err, res) {
      if (err) throw err;
      console.log("Document inserted");
      // close the connection to db when you are done with it
      client.close();
    });
  });
  
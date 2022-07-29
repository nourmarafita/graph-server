const { MongoClient } = require('mongodb')

const uri = "mongodb+srv://nourmarafita:nurma123@cluster0.mbmsa07.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let database

async function connect() {
  try {
    await client.connect();
    database = client.db("graph");
    
  } catch (e) {
    console.log(e);
  }
}

function getDatabase() {
    return database
}


module.exports = {
    connect,
    getDatabase
}
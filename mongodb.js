//CRUD Create Read Update Delete

const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(connectionURL,{monitorCommands:true});

const databaseName = 'task-manager'

client.connect();
const db = client.db(databaseName)
db.collection('users').insertOne({
    name: 'Sagar',
    age: 25
})  


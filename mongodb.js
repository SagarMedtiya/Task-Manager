//CRUD Create Read Update Delete

const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(connectionURL,{monitorCommands:true});
const id = new ObjectId()

const databaseName = 'task-manager'

client.connect();
const db = client.db(databaseName)                                  

db.collection('users').deleteMany({
    age:17
}).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


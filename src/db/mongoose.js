const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User',{
    name: {
        type: String
    },
    age:{
        type: Number
    },
    description:{
        
    }
})


const me = new User({
    name: 'Sagar',
    age: 45,
     
})

me.save().then(()=>{
    console.log(me)
    }).catch((error)=>{
    console.log(error)
})
const mongoose = require('mongoose')
const validator = require("validator")

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is not valid ")
            }
        } 
    },
    age:{
        type: Number,
        default: 0,
        validate(value ){
            if(value< 0){
                throw new Error('Age must be a positive no.')
            }
        }
    },
    description:{
        
    }
})


const me = new User({
    name: '   Sagar   ',
    email:'Saha@gm.com'
})

me.save().then(()=>{
    console.log(me)
    }).catch((error)=>{
    console.log(error)
})

// const Task = mongoose.model('Task',{
//     description:{
//         type: String
//     },
//     completed:{
//         type: Boolean
//     }
// })

// const task = new Task({
//     description:'Learn the mongoose library',
//     completed: true
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((err)=>{
//     console.log(err)
// })
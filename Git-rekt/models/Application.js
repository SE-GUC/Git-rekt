const mongoose = require ('mongoose')
const Schema = mongoose.Schema

//Create the schema
const ApplicationSchema = new Schema(
{
    user: {//takes user id
        type: String, 
        required: true  
    },
    task:{//takes task id
        type: String,
        required: true
    },
    description:{//takes task id
        type: String,
        required: true
    },
    date:{//date of creation
        type: Date,
        //default: Date.now()
    }
})

module.exports = Application = mongoose.model('applications', ApplicationSchema)
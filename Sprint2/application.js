const uuid = require('uuid')
/*class application {
    constructor( submitted_by,submitted_for) {
        this.submitted_by = submitted_by,
        this.submitted_on = Date(),
        this.submitted_for = submitted_for
        this.id = uuid.v4()
       
    };
}*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const AppSchema = new Schema({
    submitted_by: {
        type: String,
        required: true
    },
    submitted_on: {
        type: Date(),
        required: true
    },
    submitted_for: {
        type: String,
        required: true
    },
    
})

module.exports = User = mongoose.model('application', AppSchema)


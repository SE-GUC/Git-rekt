const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const consultancySchema = new Schema({
    com_reg_num: {
        type: Number,
        required: true
    },
    established_since: {
        type: String, 
        required: true
    },
    field: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contact_info: {
        type: [String]
    }
})

module.exports = ConsultancySchema = mongoose.model('consultancy', consultancySchema)
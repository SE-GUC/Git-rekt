const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const consultancySchema = new Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    comRegNum: {
        type: Number,
        required: true,
        unique:true

    },
    establishedSince: {
        type: String, 
        required: true
    },
    field: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique:true

    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    phoneNumber:{
        type: String,
        unique:true,
        required:true
    }
})

module.exports = ConsultancySchema = mongoose.model('consultancy', consultancySchema)
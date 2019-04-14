const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const CertificateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    prerequisites: {
        type: [String],
        required: true
    },
    issuedBy: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

module.exports = Certificate = mongoose.model('certificates', CertificateSchema)
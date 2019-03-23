const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const CertificateSchema = new Schema({
    issuingDate: {
        type: Date(),
        required: true,
        unique: true
    },
    issuedFor: {
        type: String,
        required: true,
        unique:true
    },
    certifiesWhat: {
        type: String,
        required: true,
    },
    approvedBy: {
        type: String, 
        required: true
    },
    issuedBy: {
        type: String,
        required:true,
    }
})

module.exports = certification = mongoose.model('certificate', CertificateSchema)

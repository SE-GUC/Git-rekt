const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const CertificateApplicationSchema = new Schema({
    certificate: {
        type: String,
        required: true
    },
    applicant: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

module.exports = CertificateApplication = mongoose.model('certificateApplications', CertificateApplicationSchema)
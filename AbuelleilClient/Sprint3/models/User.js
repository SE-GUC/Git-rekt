const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    githubPortofolio: {
        type: [String]
    },
    contactInfo: {
        type: Number,
        required: true
    },updatedCV: {
        type: [String]
    },
    registeredOn: {
        type: Number
    },
    signed: {
        type: Boolean
    },
    rating: {
        type: Number
    },
    notifications: {
        type: [String]
    },
    certifications: {
        type: [String]
    },
})

module.exports = User = mongoose.model('users', UserSchema)
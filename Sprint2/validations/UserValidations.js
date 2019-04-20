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
        required: true,
        unique: true
	    },
	password: {
	    type: String,
	    required: true
	},
	githubPortofolio: {
	    type: String,
        required: true,
        unique: true
    },
    contactInfo: {
	    type: String,
	    required: true
    }, 
    updatedCV: {
	    type: [String],
        required: true
    },
    registeredOn: {
	    type: Date(),
        required: true
    },
    signed: {
        type: Boolean,
        required: true
        
    },
    rating: {
        type: Number,
        required: true 
        
    },
    notifications: {
        type: [String],
        required: true
        
    },
    certifications: {
        type: [String],
        required: true
	},
})
	
module.exports = User = mongoose.model('users', UserSchema)
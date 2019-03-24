const mongoose = require('mongoose')
const Schema = mongoose.Schema

// The User Model
const PartnerSchema = new Schema({
    
        name:{
                type: String,
                required: true
        },
        password:{
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true
        },
        contactInfo: {
                type: Number,
                required: true    
        },
        registeredOn: {
                type: Date,
                required: true  
        } ,
        com_reg_num: {
                type: String,
                required: true
        },
        info: {
                type: String,
                required: true
        },
        signed: {
                type: String,
        }, 
        rating: {
                type: Number,
        },
        submitted_tasks: {
                type: [String],
        },
        notifications:{
                type: [String],
        },
        associates: {
                type: [String],
        },
        board_members: {
                type: [String],
                required: true
        },
        events: {
                type: [String],
        },
        feedback: {
                type: String,
        }
})
module.exports = Partner = mongoose.model('partners', PartnerSchema)
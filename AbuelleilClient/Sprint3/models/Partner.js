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
        contact_info: {
                type: String,
                required: true    
        },
        registered_on: {
                type: Date,
                default:Date.now
        } ,
        com_reg_num: {
                type: Number,
                required: true
        },
        info: {
                type: String,
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
        submitted_tasks: {
                type: [String],
                required: true
        },
        notifications:{
                type: [String],
            required: true
        },
        associates: {
                type: [String],
                required: true
        },
        board_members: {
                type: [String],
                required: true
        },
        events: {
                type: [String],
                required: true
        },
        feedback: {
                type: String,
                required: true
        }
})
module.exports = Partner = mongoose.model('partners', PartnerSchema)
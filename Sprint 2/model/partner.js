const uuid = require('uuid')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

// The User Model
const PartnerSchema = new Schema({
    
        name:{
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
                required: true  
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
                type: Double,
                required: true
        },
        submitted_tasks: {
                type: [task],
                required: true
        },
        notifications:{
                type: [notification],
            required: true
        },
        associates: {
                type: [],
                required: true
        },
        board_members: {
                type: [],
                required: true
        },
        events: {
                type: [],
                required: true
        },
        feedback: {
                type: String,
                required: true
        }
})
module.exports = partner = mongoose.model('Partner', BookSchema)
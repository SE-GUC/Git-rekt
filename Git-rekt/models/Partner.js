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
                 
        } ,
        com_reg_num: {
                type: Number,
                
        },
        info: {
                type: String,
             
        },
        signed: {
                type: Boolean,
               
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
            
        },
        events: {
                type: [String],
              
        },
        feedback: {
                type: String,
           
        }
})
module.exports = Partner = mongoose.model('partners', PartnerSchema)
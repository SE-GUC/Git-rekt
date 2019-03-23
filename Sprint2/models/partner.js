const uuid = require('uuid')

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const notification = require('../models/notification')
const task = require('../models/task')
const partner = require('../models/partner')


const PartnerSchema = new Schema({ 
        name:{
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true,
                unique:true
        },
        contactInfo: {
                type: String,
                required: true,
                unique:true   
        },
        registeredOn: {
                type: Date,
                required: true  
        } ,
        comRegNum: {
                type: Number,
                required: true,
                unique:true
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
        submittedTasks: {
            type : Array ,
            default : [Object],
            required: true
        },
        notifications:{
            type : Array ,
            default : [Object],
            required: true
        },
        associates:{
                type: [partner],
                required: true
        },
        boardMembers:{
            type : Array ,
            default : [Object],
            required: true
        },
        events: {
            type : Array ,
            default : [String],
            required: true
        },
        feedback: {
            type: String,
            required: true
        }
})
const partnerSc = mongoose.model('Partner', PartnerSchema)
module.exports = partnerSc;
// // The User Model
// class partner {
//     constructor(name,email,contact_info, com_reg_num, info,signed) {
//         this.name = name,
//         this.email = email,
//         this.contact_info = contact_info,
//         this.registered_on = Date(),
//         this.com_reg_num = com_reg_num,
//         this.info = info,
//         this.signed = signed, 
//         this.rating = null,
//         this.submitted_tasks = [],
//         this.notifications = [],
//         this.associates = [],
//         this.board_members = [],
//         this.events = [],
//         this.feedback = [],
//         this.id = uuid.v4();
//     };
// };
// module.exports = partner
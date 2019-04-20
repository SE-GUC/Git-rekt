const uuid = require('uuid')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const task = require('../../models/task')
const notification = require('../../models/notification')

const AdminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
     },
    uploaded_tasks: {
        type: [task],
        required: true
    },
    notifications:{
        type: [notification],
        required: true
    }
})
// class admin {
//     constructor(name,email,access_level) {
//         this.name = name;
//         this.email = email;
//         this.access_level = access_level;
//         this.registered_on = Date();
//         this.uploaded_tasks = [];
//         this.notifications = [];
//         this.id = uuid.v4()
       
//     };
// }

module.exports = admin = mongoose.model('admin', AdminSchema)
// module.exports = admin
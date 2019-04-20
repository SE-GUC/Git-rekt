const mongoose = require('mongoose')
const Schema = mongoose.Schema


const NotificationSchema = new Schema({
    sent_to: {
        type: String,
        required: true
    },
    notifies: {
        type: String,
        required: true
    },
    sent_from: {
        type: String,
        required: true
    },
    time: {
        type: Number, 
        required: true
    },
})

module.exports = Notification = mongoose.model('notifications', NotificationSchema)
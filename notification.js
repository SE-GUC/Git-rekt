const uuid = require('uuid')
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
        type: Number,
        required: true
    },
    time: {
        type: String, 
        required: true
    },
})

module.exports = Notification = mongoose.model('Notification', NotificationSchema)

// The User Model
class notification {
    constructor(sent_to,sent_from, notfies) {
        this.sent_to= sent_to,
        this.notifies = notfies,
        this.sent_from = sent_from,
        this.time = Date(),
        this.id = uuid.v4();
    };
};
module.exports = notification
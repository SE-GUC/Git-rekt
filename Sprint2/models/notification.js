const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationSchema = new Schema({
    sentTo: {
        type: String,
        required: true
    },
    notifies: {
        type: String,
        required: true
    },
    sentFrom: {
        type: String,
        required: true
    },
    time: {
        type: Date, 
        required: true
    },
})

module.exports = notification = mongoose.model('notification', NotificationSchema)

// // The User Model
// class notification {
//     constructor(sent_to,sent_from, notfies) {
//         this.sent_to= sent_to,
//         this.notifies = notfies,
//         this.sent_from = sent_from,
//         this.time = Date(),
//         this.id = uuid.v4();
//     };
// };
// module.exports = notification
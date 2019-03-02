const uuid = require('uuid')

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
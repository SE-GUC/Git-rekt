const uuid = require('uuid')

// The User Model
class partner {
    constructor(name,email,contact_info, com_reg_num, info,signed) {
        this.name = name,
        this.email = email,
        this.contact_info = contact_info,
        this.registered_on = Date(),
        this.com_reg_num = com_reg_num,
        this.info = info,
        this.signed = signed, 
        this.rating = null,
        this.submitted_tasks = [],
        this.notifications = [],
        this.associates = [],
        this.board_members = [],
        this.events = [],
        this.feedback = [],
        this.id = uuid.v4();
    };
};
module.exports = partner
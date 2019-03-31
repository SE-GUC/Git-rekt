const uuid = require('uuid')
class admin {
    constructor(name,email,access_level) {
        this.name = name;
        this.email = email;
        this.access_level = access_level;
        this.registered_on = Date();
        this.uploaded_tasks = [];
        this.notifications = [];
        this.id = uuid.v4()
       
    };
}

module.exports = admin
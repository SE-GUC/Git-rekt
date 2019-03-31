const uuid = require('uuid')

// The User Model
class user {
    constructor(name,email,github_link,contact_info,updated_CV,signed) {
        this.name = name,
        this.email = email,
        this.github_link = github_link,
        this.contact_info = contact_info,
        this.updated_CV = updated_CV,
        this.registered_on = Date(),
        this.signed = signed,
        this.rating = null,
        this.exp = [],
        this.notifications = [],
        this.certifications = []
        this.events = []
        this.id = uuid.v4();
    };
};
module.exports = user
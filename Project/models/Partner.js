// The Partner Model
class Partner {
    constructor(name, email, contactInfo, registeredOn, signed, rating, submitedTasks, Partners, board, events, filedWork, pastProjects, form, notifications) {
        this.name = name;
        this.email = email;
        this.contactInfo = contactInfo;
        this.rating = rating;
        this.registeredOn = registeredOn;
        this.signed = signed;
        this.submitedTasks = [];
        this.notifications = [];
        this.Partners = [];
        this.board = [];
        this.events = [];
        this.filedWork = [];
        this.pastProjects = [];
        this.form = [];
        this.id = uuv4();
    };
}

module.exports = Partner
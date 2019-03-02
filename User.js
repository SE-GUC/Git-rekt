const uuid = require('uuid')

// The User Model
class User {
    constructor(name, age,email,github_portofolio,contact_info,updated_CV,registered_on,signed,rating,notifications,certifications,id) {
        this.name = name;
        this.age=age;
        this.email = email;
        this.github_portofolio=github_portofolio;
        this.contact_info=contact_info;
        this.updated_CV=updated_CV;
        this.registered_on=registered_on;
        this.signed=signed;
        this.rating=rating;
        this.notifications=notifications;
        this.certifications=certifications;
        this.id = uuid.v4();
    };
};

module.exports = User

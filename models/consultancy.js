const uuid = require('uuid')

// The User Model
class consultancy {
    constructor(com_reg_num,established_since,field,description,contact_info){
        this.com_reg_num= com_reg_num,
        this.established_since = established_since,
        this.field = field,
        this.description =description,
        this.contact_info = contact_info,
        this.rating = null,
        this.associates = [],
        this.board_members = [],
        this.events = [],
        this.studies = [],
        this.notifications = [],
        this.certifications =[],
        this.consulted_projects =[]
        this.id = uuid.v4();
    };
};
module.exports = consultancy
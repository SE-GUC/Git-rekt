const uuid = require('uuid')

// The User Model
class certification {
    constructor(issued_by,approved_by,issued_for,certifies_what) {
        this.issuing_date = Date(),
        this.issued_by = issued_by, 
        this.approved_by = approved_by,
        this.issued_for = issued_for,
        this.certifies_what = certifies_what,
        this.id = uuid.v4();
    };
};
module.exports = certification
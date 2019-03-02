const uuid = require('uuid')
class application {
    constructor( submitted_by,submitted_for) {
        this.submitted_by = submitted_by,
        this.submitted_on = Date(),
        this.submitted_for = submitted_for
        this.id = uuid.v4()
       
    };
}

module.exports = application
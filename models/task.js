const uuid = require('uuid')

// The User Model
class task {
    constructor(approved_by,description,posted_by,Estimated_effort,Time_taken,Level_of_commitment,Experience_level,Monetary_compensation,Owner,Assigned_Consultancy,reviewed) {
    this.approved_by = approved_by,
    this.description = description,
    this.posted_on = Date(),
    this.posted_by = posted_by,
    this.Estimated_effort = Estimated_effort,
    this.Time_taken = Time_taken ,
    this.Level_of_commitment = Level_of_commitment,
    this.Experience_level = Experience_level,
    this.Monetary_compensation = Monetary_compensation,
    this.Owner = Owner,
    this.Assigned_Consultancy = Assigned_Consultancy,
    this.reviewed = reviewed,
    this.Required_set_of_skills = [],
    this.task_list = [],
    this.applicant_list = [],
    this.assigned_users = [],
    this.id = uuid.v4();
    };
};
module.exports = task
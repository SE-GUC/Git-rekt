const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creating the Schema 
const taskSchema = new Schema({
  approved_by: {
    type: String,
  },
  description: {
    type: String,
    required: true
  },
  posted_on: {
    type: Date,
    default: Date.now,
    required: true
  },
  posted_by: {
    type: String,
    required: true
  },
  status: {
    type: String,
    require: true
  },
  Estimated_effort: {
    type: String,
  },
  Time_taken: {
    type: String,
  },
  Level_of_commitment: {
    type: String,
  },
  Experience_level: {
    type: String,
  },
  Monetary_compensation: {
    type: Number,
  },
  Owner: {
    type: String,
  },
  Assigned_Consultancy: {
    type: String,
  },
  reviewed: {
    type: Boolean,
  },
  Required_set_of_skills: {
    type: [String],
  },
  task_list: {
    type: [String],
  },
  applicant_list: {
    type: [String]
  },
  assigned_users: {
    type: [String]
  }
});

module.exports = Task = mongoose.model('tasks', taskSchema)
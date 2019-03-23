const uuid = require('uuid')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creating the Schema 
const taskSchema = new Schema({
  approved_by: {
    type: String,
    required: true
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
  Estimated_effort: {
    type: String,
    required: true
  },
  Time_taken: {
    type: String,
    required: true
  },
  Level_of_commitment: {
    type: String,
    required: true
  },
  Experience_level: {
    type: String,
    required: true
  },
  Monetary_compensation: {
    type: Number,
    required: true
  },
  Owner: {
    type: String,
    required: true
  },
  Assigned_Consultancy: {
    type: String,
    required: true
  },
  reviewed: {
    type: Boolean,
    required: true
  },
  Required_set_of_skills: {
    type: [String],
    required: true
  },
  task_list: {//?
    type: [String],
    required: true
  },
  applicant_list: {
    type: [String]
  },
  assigned_users: {
    type: [String]
  }
});

module.exports = Task = mongoose.model('tasks', taskSchema)
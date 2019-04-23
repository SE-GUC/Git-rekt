const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creating the Schema 
const taskSchema = new Schema({
  approved_by: {
    type: String,
    default:''
  },
  description: {
    type: String,
    required: true
  },  
  posted_on: {
    type: Date,
    default: Date.now,
  },
  posted_by: {
    type: String,
    required: true
  },
  Estimated_effort: {
    type: String,
  },
  Time_taken: {
    type: String,
  },
  Level_of_commitment: {
    type: String,
    required: true
  },
  Experience_level: {
    type: String,
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
    default:''
  },
  reviewed: {
    type: Boolean,
  },
  Required_set_of_skills: {
    type: [String],
    default:[]
  },
  task_list: {
    type: [String],
    default:[]
  },
  applicant_list: {
    type: [String],
    default:[]
  },
  assigned_users: {
    type: [String],
    default:[]
  },
  stauts:{
    type:String,
    default:'pending'
  }
});

module.exports = Task = mongoose.model('tasks', taskSchema)
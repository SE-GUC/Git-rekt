const Joi = require('joi')
const task = require('../../models/task')
const notification = require('../../models/notification')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(40).required(),
            password: Joi.String().min(8).max(32).required(),
            // uploaded_tasks: Joi.array().items(task.required()),
            // notifications: Joi.array().items(notification.required())
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(8).max(30),
            email: Joi.string().min(20).max(100),
            password: Joi.string().min(8).max(32),
            uploaded_tasks: Joi.array().items(task),
            notifications: Joi.array().items(notification)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
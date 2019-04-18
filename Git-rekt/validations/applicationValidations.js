const Joi = require('joi')
//const validator = require("../../validations/taskValidations");

module.exports = {
    createValidation: request => {
        const createSchema = {
            user: Joi.string().min(1).max(32).required(),
            task: Joi.string().min(1).max(32).required(),
            description: Joi.string().min(1).max(500),
            date: Joi.date()
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            user: Joi.string().min(1).max(32),
            task: Joi.string().min(1).max(32),
            description: Joi.string().min(1).max(500),
            date: Joi.date()
        }
        return Joi.validate(request, updateSchema)
    }
}
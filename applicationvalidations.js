const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            submitted_by: Joi.string().min(3).max(500).required(),
            submitted_on: Joi.date().min(3).max(500).required(),
            submitted_for: Joi.string().min(50).max(3000).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            submitted_by: Joi.string().min(3).max(500),
            submitted_on: Joi.date().min(3).max(100),
            submitted_for: Joi.string().min(50).max(3000),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
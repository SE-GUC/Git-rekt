const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            submittedBy: Joi.string().min(3).max(50).required(),
            submittedOn: Joi.date().required(),
            submittedFor: Joi.string().min(50).max(3000).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            submittedBy: Joi.string().min(3).max(500),
            submittedOn: Joi.date(),
            submittedFor: Joi.string().min(50).max(3000),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
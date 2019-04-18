const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            certificate: Joi.string().min(1).max(200).required(),
            applicant: Joi.string().min(1).max(500).required(),
            status: Joi.string().required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            certificate: Joi.string().min(1).max(200),
            applicant: Joi.string().min(1).max(500),
            status: Joi.string(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            title: Joi.string().min(1).max(200).required(),
            description: Joi.string().min(1).max(500).required(),
            prerequisites: Joi.array().items(Joi.string()),
            issuedBy: Joi.string().required(),
            type: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            title: Joi.string().min(1).max(200),
            description: Joi.string().min(1).max(500),
            prerequisites: Joi.array().items(Joi.string()),
            issuedBy: Joi.string(),
            type: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}
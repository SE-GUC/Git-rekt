const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            issuingDate: Joi.date().required(),
            issuedFor: Joi.string().min(3).max(50).required(),
            certifiesWhat: Joi.string().min(3).max(50).required(),
            approvedBy: Joi.string().min(3).max(50).required(),
            issuedBy: Joi.string().min(3).max(50).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            issuingDate: Joi.date(),
            issuedFor: Joi.string().min(3).max(50),
            certifiesWhat: Joi.string().min(3).max(50),
            approvedBy: Joi.string().min(3).max(50),
            issuedBy: Joi.string().min(3).max(50)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
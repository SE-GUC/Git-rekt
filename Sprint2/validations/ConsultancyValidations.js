const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            comRegNum: Joi.number().min(8).max(12).required(),
            name: Joi.string().min(3).max(50).required(),
            establishedSince : Joi.string().required(),
            field: Joi.string().min(3).max(200).required(),
            description: Joi.string().min(3).max(500).required(),
            email: Joi.string().min(20).max(50).required(),
            phoneNumber: Joi.string().min(8).max(11).required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            comRegNum: Joi.number().min(8).max(12),
            name: Joi.string().min(3).max(50),
            establishedSince: Joi.string(),
            field: Joi.string().min(3).max(200),
            description: Joi.string().min(3).max(500),
            email: Joi.string().min(20).max(50),
            phoneNumber: Joi.string().min(8).max(11)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
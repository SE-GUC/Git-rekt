const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(1).max(30).required(),
            comRegNum: Joi.number().min(1),
            establishedSince : Joi.date(),
            field: Joi.string().max(200),
            description: Joi.string().max(100),
            email:Joi.string().max(100).required(),
            password:Joi.string().max(100).required(),
            phoneNumber:Joi.number().min(11).required()
        
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(1).max(30),
            comRegNum: Joi.number().min(1),
            establishedSince : Joi.date(),
            field: Joi.string().min(3).max(200),
            description: Joi.string().min(3).max(100),
            email:Joi.string().min(1).max(100),
            password:Joi.string().max(100),
            phoneNumber:Joi.number().min(11)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
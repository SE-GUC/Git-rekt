const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            age: Joi.number().max(120).required(),
            email: Joi.string().email().max(256).required(),
            password: Joi.string().required(),
            githubPortofolio: Joi.array().items(Joi.string().min(3).required()),
            contactInfo: Joi.number().required(),
            updatedCV: Joi.array().items(Joi.string().required()),
            registeredOn: Joi.number().required(),
            signed: Joi.string().min(2),
            rating:Joi.number(),
            notifications:Joi.array().items(Joi.string()),
            certifications:Joi.array().items(Joi.string()),
            }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500),
            age: Joi.number().max(120),
            email: Joi.string().email().max(256),
            password: Joi.string(),
            githubPortofolio: Joi.array().items(Joi.string().min(3)),
            contactInfo: Joi.number(),
            updatedCV: Joi.array().items(Joi.string()),
            registeredOn: Joi.number(),
            signed: Joi.string().min(2),
            rating:Joi.number(),
            notifications:Joi.array().items(Joi.string()),
            certifications:Joi.array().items(Joi.string()),
           }

        return Joi.validate(request, updateSchema)
    }, 
}
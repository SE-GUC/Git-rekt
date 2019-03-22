const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            age: Joi.number().max(120).required(),
            email: Joi.string().email().max(256).required(),
            github_portofolio: Joi.string().min(3).required(),
            contact_info: Joi.number().required(),
            updated_CV: Joi.string().required(),
            registered_on: Joi.number().required(),
            signed: Joi.string().min(2),
            rating:Joi.number(),
            notifications:Joi.string,
            certifications:Joi.string.required(),
            }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(500).required(),
            age: Joi.number().max(120).required(),
            email: Joi.string().email().max(256).required(),
            github_portofolio: Joi.string().min(3).required(),
            contact_info: Joi.number().required(),
            updated_CV: Joi.string().required(),
            registered_on: Joi.number().required(),
            signed: Joi.string().min(2),
            rating:Joi.number(),
            notifications:Joi.string,
            certifications:Joi.string.required(),
           }

        return Joi.validate(request, updateSchema)
    }, 
}
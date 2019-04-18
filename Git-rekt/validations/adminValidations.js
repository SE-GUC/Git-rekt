const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(40).required(),
            password: Joi.string().min(8).max(32).required(),
            uploaded_tasks: Joi.array().items(Joi.string().required()),
            notifications: Joi.array().items(Joi.string().required())
        }
        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(8).max(30),
            email: Joi.string().min(20).max(100),
            password: Joi.string().min(8).max(32),
            uploaded_tasks: Joi.array().items(Joi.string()),
            notifications: Joi.array().items(Joi.string())
        }

        return Joi.validate(request, updateSchema)
    }, 
}
const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(40).required(),
            password: Joi.string().min(8).max(32).required(),
            //uploaded_tasks: Joi.array().items(Joi.string().required()),
            //notifications: Joi.array().items(Joi.string().required())
        }
        return Joi.validate(request, createSchema)
    },
    loginValidation: request => {
        const  loginSchema = {
           // name: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(40).required(),
            password: Joi.string().min(8).max(32).required(),
            //uploaded_tasks: Joi.array().items(Joi.string().required()),
            //notifications: Joi.array().items(Joi.string().required())
        }
        return Joi.validate(request, loginSchema)
    },
    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(8).max(30),
            email: Joi.string().min(15).max(100),
            password: Joi.string().min(8).max(32),
            uploaded_tasks: Joi.array().items(Joi.string()),
            notifications: Joi.array().items(Joi.string()),
            //notifications: Joi.array().items(Joi.object().keys({
            //     sent_to: Joi.string().required(),
            //     notifies: Joi.string().required(),
            //     sent_from: Joi.string().required(),
            //     time:Joi.number().required()
            // })),
            certificatonApplication: Joi.array().items(Joi.string())
        }

        return Joi.validate(request, updateSchema)
    }, 
}
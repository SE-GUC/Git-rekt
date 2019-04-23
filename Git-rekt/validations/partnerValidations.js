const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().max(60).required(),
            password: Joi.string().max(30).required(),
            email: Joi.string().max(50).required(),
            contact_info: Joi.string().max(50).required(),
            registered_on: Joi.date(),
            com_reg_num: Joi.number().min(1).max(500),
            info: Joi.string().max(500),
            signed: Joi.boolean(),
            rating: Joi.number().min(0).max(500),
            submitted_tasks: Joi.array().items(Joi.string().max(500)),
            notifications: Joi.array().items(Joi.string().max(500)),
            associates: Joi.array().items(Joi.string().max(500)),
            board_members: Joi.array().items(Joi.string().max(500)),
            events: Joi.array().items(Joi.string().max(500)),
            feedback: Joi.string().max(500),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().max(60),
            password: Joi.string().max(30),
            email: Joi.string().max(50),
            contact_info: Joi.string().max(50),
            registered_on: Joi.date(),
            com_reg_num: Joi.number().min(1).max(500),
            info: Joi.string().max(500),
            signed: Joi.boolean(),
            rating: Joi.number().min(0).max(500),
            submitted_tasks: Joi.array().items(Joi.string().max(500)),
            notifications: Joi.array().items(Joi.string().max(500)),
            associates: Joi.array().items(Joi.string().max(500)),
            board_members: Joi.array().items(Joi.string().max(500)),
            events: Joi.array().items(Joi.string().max(500)),
            feedback: Joi.string().max(500),
        }

        return Joi.validate(request, updateSchema)
    }, 
}

const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(60).required(),
            password: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(50).required(),
            contact_info: Joi.string().min(5).max(50).required(),
            registered_on: Joi.date(),
            com_reg_num: Joi.string().min(3).max(500).required(),
            info: Joi.string().min(3).max(500).required(),
            signed: Joi.string().min(3).max(500).required(),
            rating: Joi.number().min(3).max(500).required(),
            submitted_tasks: Joi.array().items(Joi.string().min(3).max(500).required()),
            notifications: Joi.array().items(Joi.string().min(3).max(500).required()),
            associates: Joi.array().items(Joi.string().min(3).max(500).required()),
            board_members: Joi.array().items(Joi.string().min(3).max(500).required()),
            events: Joi.array().items(Joi.string().min(3).max(500).required()),
            feedback: Joi.string().min(3).max(500).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(60),
            password: Joi.string().min(8).max(30),
            email: Joi.string().min(15).max(50),
            contact_info: Joi.string().min(5).max(50),
            registered_on: Joi.date(),
            com_reg_num: Joi.string().min(3).max(500),
            info: Joi.string().min(3).max(500),
            signed: Joi.string().min(3).max(500),
            rating: Joi.number().min(3).max(500),
            submitted_tasks: Joi.array().items(Joi.string().min(3).max(500)),
            notifications: Joi.array().items(Joi.string().min(3).max(500)),
            associates: Joi.array().items(Joi.string().min(3).max(500)),
            board_members: Joi.array().items(Joi.string().min(3).max(500)),
            events: Joi.array().items(Joi.string().min(3).max(500)),
            feedback: Joi.string().min(3).max(500),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
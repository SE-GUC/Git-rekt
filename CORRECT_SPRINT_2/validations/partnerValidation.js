const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(60).required(),
            password: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(50).required(),
            contactInfo: Joi.number().required(),
            registeredOn: Joi.date().required(),
            com_reg_num: Joi.string().min(3).max(500).required(),
            info: Joi.string().min(3).max(500).required(),
            signed: Joi.string().min(2),
            ratings: Joi.number(),
            submitted_tasks: Joi.array().items(Joi.string().min(3).max(100)),
            notifications: Joi.array().items(Joi.string().min(3).max(1000)),
            associates: Joi.array().items(Joi.string().min(3).max(100)),
            board_members: Joi.array().items(Joi.string().min(3).max(50).required()),
            events: Joi.array().items(Joi.string().min(3).max(100)),
            feedback: Joi.string().min(3).max(500),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(60),
            password: Joi.string().min(8).max(30),
            email: Joi.string().min(15).max(50),
            contactInfo: Joi.number(),
            registeredOn: Joi.date(),
            com_reg_num: Joi.string().min(3).max(500),
            info: Joi.string().min(3).max(500),
            signed: Joi.string().min(2),
            ratings: Joi.number(),
            submitted_tasks: Joi.array().items(Joi.string().min(3).max(100)),
            notifications: Joi.array().items(Joi.string().min(3).max(1000)),
            associates: Joi.array().items(Joi.string().min(3).max(100)),
            board_members: Joi.array().items(Joi.string().min(3).max(50)),
            events: Joi.array().items(Joi.string().min(3).max(100)),
            feedback: Joi.string().min(3).max(500),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
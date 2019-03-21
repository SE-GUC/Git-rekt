const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(60).required(),
            password: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(50).required(),
            contact_info: Joi.string().min(5).max(50).required(),
            registered_on: Joi.string(),
            com_reg_num: Joi.string().min(3).max(500).required(),
            info: Joi.string().min(3).max(500).required(),
            signed: Joi.string().min(3).max(500).required(),
            ratings: Joi.string().min(3).max(500).required(),
            submitted_tasks: Joi.string().min(3).max(500).required(),
            notifications: Joi.string().min(3).max(500).required(),
            associates: Joi.string().min(3).max(500).required(),
            board_members: Joi.string().min(3).max(500).required(),
            events: Joi.string().min(3).max(500).required(),
            feedback: Joi.string().min(3).max(500).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(60).required(),
            password: Joi.string().min(8).max(30).required(),
            email: Joi.string().min(15).max(50).required(),
            contact_info: Joi.string().min(5).max(50).required(),
            registered_on: Joi.string(),
            com_reg_num: Joi.string().min(3).max(500).required(),
            info: Joi.string().min(3).max(500).required(),
            signed: Joi.string().min(3).max(500).required(),
            ratings: Joi.string().min(3).max(500).required(),
            submitted_tasks: Joi.string().min(3).max(500).required(),
            notifications: Joi.string().min(3).max(500).required(),
            associates: Joi.string().min(3).max(500).required(),
            board_members: Joi.string().min(3).max(500).required(),
            events: Joi.string().min(3).max(500).required(),
            feedback: Joi.string().min(3).max(500).required(),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
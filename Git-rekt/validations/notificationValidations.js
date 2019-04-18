const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            sent_to: Joi.string().min(3).max(50).required(),
            notifies: Joi.string().min(3).max(50).required(),
            sent_from: Joi.string().min(3).max(50).required(),
            time:Joi.number().min(3).max(3000).required()
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            sent_to: Joi.string().min(3).max(500),
            notifies: Joi.string().min(3).max(100),
            sent_from: Joi.string().min(3).max(50),
            time: Joi.number().min(3).max(3000)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            sentTo: Joi.string().min(3).max(50).required(),
            notifies: Joi.string().min(3).max(150).required(),
            sentFrom: Joi.string().min(3).max(50).required(),
            time:Joi.date().required()
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            sentTo: Joi.string().min(3).max(50),
            notifies: Joi.string().min(3).max(150),
            time: Joi.date(),
            sentFrom: Joi.string().min(3).max(50)
        }

        return Joi.validate(request, updateSchema)
    }, 
}
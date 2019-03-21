const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            com_reg_num: Joi.number().min(50).max(3000).required(),
            established_since : Joi.string(),
            field: Joi.string().min(3).max(500).required(),
            description: Joi.string().min(3).max(100).required(),
            contact_info: Joi.string().min(3).max(100).required()
           
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            com_reg_num: Joi.number().min(50).max(3000).required(),
            established_since : Joi.string(),
            field: Joi.string().min(3).max(500).required(),
            description: Joi.string().min(3).max(100).required(),
            contact_info: Joi.string().min(3).max(100).required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}
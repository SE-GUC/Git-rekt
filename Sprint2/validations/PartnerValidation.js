const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(50).required(),
            email: Joi.string().min(15).max(50).required(),
            contactInfo: Joi.string().min(5).max(50).required(),
            registeredOn: Joi.date().required(),
            comRegNum: Joi.string().min(8).max(16).required(),
            info: Joi.string().min(3).max(500).required(),
            signed: Joi.boolean().required(),
            ratings: Joi.number().min(1).max(5).required(),
            submittedTasks: Joi.array().items(Joi.object({
                name: Joi.string().required(),
                email: Joi.string().required(),
                contactInfo: Joi.string().required(),
                registeredOn: Joi.date().required(),
                comRegNum: Joi.number().required(),
                info: Joi.string().required(),
                signed: Joi.boolean().required(),
                rating: Joi.number().required(),
                submittedTasks: Joi.array().required(),
                notifications:Joi.array().required(),
                associates: Joi.array().required(),
                boardMembers: Joi.required(),
                events: Joi.required(),
                feedback: Joi.required()
            })),
            notifications: Joi.array().items().required(),
            associates: Joi.array().items().required(),
            boardMembers: Joi.array().items().required(),
            events: Joi.array().items().required(),
            feedback: Joi.string().min(3).max(500).required(),
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().min(3).max(50),
            email: Joi.string().min(15).max(50),
            contactInfo: Joi.string().min(5).max(50),
            //registeredOn: Joi.string(),
            //comRegNum: Joi.string().min(3).max(500),
            info: Joi.string().min(3).max(500),
            //signed: Joi.string().min(3).max(500),
            ratings: Joi.string().min(3).max(500),
            submittedTasks: Joi.string().min(3).max(500),
            notifications: Joi.string().min(3).max(500),
            associates: Joi.string().min(3).max(500),
            boardMembers: Joi.string().min(3).max(500),
            events: Joi.string().min(3).max(500),
            feedback: Joi.string().min(3).max(500),
        }

        return Joi.validate(request, updateSchema)
    }, 
}
const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            approved_by: Joi.string().min(1).max(150)
            , description: Joi.string().min(1).required()
            , posted_on: Joi.date().required()
            , posted_by: Joi.string().min(1).max(150).required()
            , status: Joi.string().min(1).max(50).required()
            , Estimated_effort: Joi.string().min(4).max(150)
            , Time_taken: Joi.string()
            , Level_of_commitment: Joi.string().min(1).max(150)
            , Experience_level: Joi.string().min(1).max(150)
            , Monetary_compensation: Joi.number().min(1)
            , Owner: Joi.string().min(1).max(150)
            , Assigned_Consultancy: Joi.string().min(1).max(150)
            , reviewed: Joi.boolean()
            , Required_set_of_skills: Joi.array().items(Joi.string().min(1).max(50))
            , task_list: Joi.array().items(Joi.string().min(1))
            //, applicant_list: Joi.array().items(Joi.string().min(1).required())
            //not sure how to validate type user
            , applicant_list: Joi.array().items(Joi.string().min(1))
            //, assigned_users: Joi.array().items(Joi.string().min(1).required())
            , assigned_users: Joi.array().items(Joi.string().min(1))
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            approved_by: Joi.string().min(1).max(150)
            , description: Joi.string().min(1)
            , posted_on: Joi.date()
            , posted_by: Joi.string().min(1).max(150)
            , status: Joi.string().min(1).max(50)
            , Estimated_effort: Joi.string().min(4).max(150)
            , Time_taken: Joi.string()
            , Level_of_commitment: Joi.string().min(1).max(150)
            , Experience_level: Joi.string().min(1).max(150)
            , Monetary_compensation: Joi.number().min(1)
            , Owner: Joi.string().min(1).max(150)
            , Assigned_Consultancy: Joi.string().min(1).max(150)
            , reviewed: Joi.boolean()
            , Required_set_of_skills: Joi.array().items(Joi.string().min(1).max(50))
            , task_list: Joi.array().items(Joi.string().min(1))
            //, applicant_list: Joi.array().items(Joi.string().min(1).required())
            //not sure how to validate type user
            , applicant_list: Joi.array().items(Joi.string().min(1))
            //, assigned_users: Joi.array().items(Joi.string().min(1).required())
            , assigned_users: Joi.array().items(Joi.string().min(1))
        }

        return Joi.validate(request, updateSchema)
    },
}
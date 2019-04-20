const express = require('express') 
const router = express.Router()
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const mongo = require('mongo')

const Application = require('../../models/Application') //models
const validator = require('../../validations/applicationValidations')

//get all applications
router.get('/', async(req, res) =>{
    const applications = await Application.find()
    res.json({data: applications})
})

//search for specific application
router.get('/:id', async (req,res) => {
    res.json( await Application.findById(req.params.id) )
});

//create application
router.post('/', async (req, res) => {
    try{
        const isValidated = validator.createValidation(req.body)
        if(isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newApplication = await Application.create(req.body)
        res.json({msg: `Application was created successfully`, data: newApplication})
    }catch(error){
        //need to be handled later
        console.log(error)
    }
})

//update Application
router.put('/:id', async(req,res) => {
    try {
        const id = req.params.id
        const application = await Application.findById(id)
        if(!application) return res.status(404).send({ error: 'Application does not exist' })
        const isValidated = validator.updateValidation(req.body)
        if(isValidated.error) return res.status(400).send({error: isValidated.details[0].message})
        const updatedCertificate = await Application.findByIdAndUpdate(id, req.body)
        res.json({msg: 'Application updated successfully', data: updatedCertificate})
    } catch (error) {
        console.log(error)
    }
})

//delete Application
router.delete('/:id', async (req, res) => {
    try{
        const appId = req.params.id
        const deleteApplication = await Application.findByIdAndRemove(appId);
        res.json({msg: 'Application was deleted successfull', data: deleteApplication})
    }
    catch(error){
        console.log(error)
    }
});


module.exports = router



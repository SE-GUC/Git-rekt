const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Application = require('../../models/application')
const validator = require('../../validations/applicationvalidations')

router.get('/GetApplication', async (req,res) => {
    const applications = await Application.find()
    res.json({data: applications})
})



router.post('/CreateApplication', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newApplication = await Application.create(req.body)
    res.json({msg:'Application was created successfully', data: newApplication})
   }
   catch(error) {
       console.log(error)
   }  
})


router.put('UpdateApplication/:id', async (req,res) => {
    try {
     const id = req.params.id
     const application = await Application.findOne({id})
     if(!application) return res.status(404).send({error: 'Application does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedApplication = await Application.updateOne(req.body)
     res.json({msg: 'Application updated successfully'})
    }
    catch(error) {
        console.log(error)
    }  
 })

 router.delete('DeleteApplication/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedApplication = await Application.findByIdAndRemove(id)
     if(!deletedApplication) return res.status(404).send({error: 'Application does not exist'})
     res.json({msg:'Application was deleted successfully', data: deletedApplication})
    }
    catch(error) {
        console.log(error)
    }
 })

 

module.exports = router
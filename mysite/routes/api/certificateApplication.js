const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const validator = require('../../validations/certificateApplicationValidations')
const CertificateApplication = require('../../models/CertificateApplication')

//Get all certificate applications
router.get('/', async (req,res) => {
    const certificateApplications = await CertificateApplication.find()
    res.json({data: certificateApplications})
})

 //search for specific certificate application
 router.get('/:id', async (req,res) => {
    const certificateApplicationId = req.params.id
    const certificateApplication = await CertificateApplication.findById(certificateApplicationId);
    res.json(certificateApplication);
});

// Create a certificate Application
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newCertificateApplication = await CertificateApplication.create(req.body)
    res.json({msg:'Certificate was created successfully', data: newCertificateApplication})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a certificate application
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const certificateApplication = await CertificateApplication.findById(id)
     if(!certificateApplication) return res.status(404).send({error: 'Certificate does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedCertificateApplication = await CertificateApplication.updateOne(req.body)
     res.json({msg: 'Certificate updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedCertificateApplication = await CertificateApplication.findByIdAndRemove(id)
     res.json({msg:'Certificate was deleted successfully', data: deletedCertificateApplication})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 })

module.exports = router
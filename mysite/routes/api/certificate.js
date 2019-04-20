const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Certificate = require('../../models/Certificate')
const validator = require('../../validations/certificateValidations')

//Get all certificates
router.get('/', async (req,res) => {
    const certificates = await Certificate.find()
    res.json({data: certificates})
})

//search for specific certificate
 router.get('/:id', async (req,res) => {
    const certificateId = req.params.id
    const certificate = await Certificate.findById(certificateId);
    res.json(certificate);
});

// Create a certificate
router.post('/', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newCertificate = await Certificate.create(req.body)
    res.json({msg:'Certificate was created successfully', data: newCertificate})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a certificate
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const certificate = await Certificate.findById(id)
     if(!certificate) return res.status(404).send({error: 'Certificate does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedCertificate = await Certificate.updateOne(req.body)
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
     const deletedCertificate = await Certificate.findByIdAndRemove(id)
     res.json({msg:'Certificate was deleted successfully', data: deletedCertificate})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 })

 

module.exports = router
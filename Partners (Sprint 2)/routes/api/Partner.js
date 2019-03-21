const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// const app = express()
// app.use(express.json())

const Partners = require('../../models/partner')
const validator = require('../../validation/Partenervalidation')

// //main page
// router.get('/',(req,res) => {
//     res.send(`<h1>helloooo partnerrrrr *wink wink*</h1>`)
//     res.send(Partner)
//     return res.json({ data: Partner });
// })
//create new partner
router.post('/', async (req,res) => {
    try{
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newPartner = await Partners.create(req.body)
        res.json({msg:'Parner was created successfully', data: newBook})
    }
    catch{
        // We will be handling the error later
        console.log(error)
    }
})

//update partner 
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const updatePartner = await Partners.findOne({id})
     if(!updatePartner) return res.status(404).send({error: 'Partner does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedPartner = await Partners.updateOne(req.body)
     res.json({msg: 'Partner updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//delete partner 
router.delete('api/partner/:id',(req,res) => {
    const partnerId = req.params.id
    const partner =  partner.find(partner => partnerId === Partner.id)
    Partner.splice(Partner.indexOf(partner),1)
    return res.json({ data: Partner });})

//show a specific partner 
router.get('api/partner/:id', (req,res) =>{
    const partnerId = req.params.id
    return res.json(partner.find(partner => partnerId === Partner.id)
    )
})

//show all partners 
router.get('/', (req,res) => {
    return res.json({ data: Partner });})

module.exports = router

// const port = process.env.PORT | 6969
// router.listen(port, () => console.log(`Server is up and running at port ${port}`))

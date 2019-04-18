const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// const app = express()
// app.use(express.json())

const Partner = require('../../models/Partner')
//const Admin = require('../../models/Admin')
const validator = require('../../validations/partnerValidations')

// //main page
// router.get('/',(req,res) => {
//     res.send(`<h1>helloooo partnerrrrr wink wink</h1>`)
//     res.send(Partner)
//     return res.json({ data: Partner });
// })

//create new partner

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newPartner = await Partner.create(req.body)
     res.json({msg:'Partner was created successfully', data: newPartner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//update partner 
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const updatePartner = await Partner.findById(id)
     if(!updatePartner) return res.status(404).send({error: 'Partner does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedPartner = await Partner.updateOne(req.body)
     res.json({msg: 'Partner updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//delete partner 
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedPartner = await Partner.findByIdAndRemove(id)
     res.json({msg:'Partner was deleted successfully', data: deletedPartner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//show a specific partner 
router.get('/:id', async (req,res) =>{
    try {
        const id = req.params.id
        const Partner1 = await Partner.findById(id)
        res.json({msg:'Partner was retrieved successfully', data: Partner1})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
})

//show all partners
router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})

//contact admin through mail
// router.get('/contact:name', async (req,res) => {
//     try {
//         const name = req.params.name
//         const admin = await Admin.findOne(name)
//         if(!updatePartner) return res.status(404).send({error: 'Partner does not exist'})
//         const mail = admin.contactInfo
//         res.json({msg:'Admin was retrieved successfully', data: mail})
//        }
//        catch(error) {
//            // We will be handling the error later
//            console.log(error)
//        }
// })

module.exports = router

// const port = process.env.PORT | 6969
// router.listen(port, () => console.log(`Server is up and running at port ${port}`))
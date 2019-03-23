const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// const app = express()
// app.use(express.json())

const Partners = require('../../models/partner')
const validator = require('../../validation/Partnervalidation')

// //main page
// router.get('/',(req,res) => {
//     res.send(`<h1>helloooo partnerrrrr *wink wink*</h1>`)
//     res.send(Partner)
//     return res.json({ data: Partner });
// })

//create new partner

router.post('/', async (req,res) => {
    const {name, password, email, contact_info, registered_On, com_reg_num, info, signed, rating, submitted_tasks, notifications, associates, board_members, events, feedback}  = req.body
    const partnerToBe = await Partners.findOne(email)
    if(partnerToBe) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newPartner = new Partner({
        name, 
        password: hashedPassword, 
        email, 
        contact_info, 
        registered_On, 
        com_reg_num, 
        info, 
        signed, 
        rating, 
        submitted_tasks, 
        notifications, 
        associates, 
        board_members, 
        events,
        feedback
        })
    newPartner
    .save()
    .then(partnerToBe => res.json({data: partnerToBe}))
    .catch(err => res.json({error: 'Can not create partner'}))
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
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedPartner = await Partners.findByIdAndRemove(id)
     res.json({msg:'Partner was deleted successfully', data: deletedPartner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//show a specific partner 
router.get('/:id', (req,res) =>{
    try {
        const id = req.params.id
        const Partner1 = await Partners.findOneById(id)
        res.json({msg:'Partner was retrieved successfully', data: Partner1Partner})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
})

router.get('/', async (req,res) => {
    const partners = await Partners.find()
    res.json({data: partners})
})
module.exports = router

// const port = process.env.PORT | 6969
// router.listen(port, () => console.log(`Server is up and running at port ${port}`))

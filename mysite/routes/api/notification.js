const express =  require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Notification = require('../../models/Notification')
const validator = require('../../validations/notificationValidations')

//mongoose
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newNotification = await Notification.create(req.body)
     res.json({msg:'Notification was created successfully', data: newNotification})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
//mongooses
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const Notification = await Notification.findOne({id})
     if(!Notification) return res.status(404).send({error: 'Notification does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedNotification = await Notification.updateOne(req.body)
     res.json({msg: 'Notification updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


//mongoose
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedNotification = await Notification.findByIdAndRemove(id)
     res.json({msg:'Notification was deleted successfully', data: deletedNotification})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//mongoose 
router.get('/', async (req,res) => {
    const Notifications = await Notification.find()
    res.json({data: Notifications})
})

module.exports = router
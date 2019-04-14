const express =  require('express')
const mongoose = require('mongoose')
const router = express.Router()
const Admin = require('../../models/Admin')

const Notification = require('../../models/Notification')
const validator = require('../../validations/notificationValidations')



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

 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const notification = await Notification.findById(id)
     if(!notification) return res.status(404).send({error: 'Notification does not exist'})
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
 router.post('/notification/', async (req,res) => {
    try {
        console.log(req.body)
     const content = req.body.notificationConten
     const adminId = req.body.adminId
     const deletedNotification = await Notification.find({notifies:content})
     const foundAdmin = await Admin.findById(adminId)
     console.log(adminId)

     for(var i = 0 ; i < foundAdmin.notifications.length ; i++){
        if(foundAdmin.notifications[i] === content){
            foundAdmin.notifications.splice(i,1);
        }
     }
     foundAdmin.save()
     res.json({msg:'Notification was deleted successfully', data: foundAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


router.get('/', async (req,res) => {
    const Notifications = await Notification.find()
    res.json({data: Notifications})
})

//search for specific notification
 router.get('/:id', async (req,res) => {
    const notificationId = req.params.id
    const notification = await Notification.findById(notificationId);
    res.json(notification);
});

module.exports = router
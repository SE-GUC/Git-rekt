const express =  require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const router = express.Router()

const Notification = require('../../models/Notification')
const validator = require('../../validations/NotificationValidations')


// app.get('/',(req,res) => {
//     res.send(`<h1>send notifications</h1>`)
// })

//create new notification
app.post('/api/notification', (req,res) => {
    const sent_from = req.body.sent_from
    const sent_to = req.body.sent_to
    const notifies = req.body.notifies
    if (!sent_from) return res.status(400).send({ err: 'sender field is required' });
    if (!sent_to) return res.status(400).send({ err: 'reciever field is required' });
    if (!notifies) return res.status(400).send({ err: 'message field is required' });
    const notification = {
        sent_to,
        sent_from,
        notifies,
        id : uuid.v4()
    }
    Notification.push(notification)
    res.send(Notification)
})

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

//search for a notification 
app.get('/api/notification/:sent_to', (req,res) => {
    const reciever = req.params.sent_to
   res.json(Notification.find(notification => reciever ===notification.sent_to))
})
//get all notification
app.get('/api/notification/', (req,res) => {
    res.send(Notification)
})
//mongoose 
router.get('/', async (req,res) => {
    const Notifications = await Notification.find()
    res.json({data: Notifications})
})
// //update notification  (omitted because it does not make sense to update a notification)
// app.put('/api/apps/:email',(req,res) => {
//     const appmail = req.params.email
//     const newmail = req.body.email
//     const app = Applications.find(app => appmail === Applications.email)
//     Applications.submitted_by = newmail
//     res.json({ data:  Notification})
// })

router.get('/', (req, res) => res.json({ data:  Notification}))

module.exports = router

// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
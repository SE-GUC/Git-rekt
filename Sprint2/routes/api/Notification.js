const express =  require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Notifications = require('../../models/notification')
const NotificationValidator = require('../../validations/NotificationValidations')
// //main page 
// app.get('/',(req,res) => {
//     res.send(`<h1>send notifications</h1>`)
// })

//create new notification
router.post('/api/notification/createNotification', (req,res) => {
  try {
     const isValidated = NotificationValidator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newNotification = await Notifications.create(req.body)
     if(newNotification){
        return res.status(400).json({error:'application already exists'})
    }       
     res.json({msg:'Notification was created successfully', data: newNotification})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
} 
})
//delete a notification
router.delete('/api/notification/deleteNotification/:id', (req,res) => {
    try {
        const id = req.params.id
        const deletedNotification = await Notification.findByIdAndRemove(id)
        if(!deletedNotification) return res.status(404).send({error: 'Notification does not exist'})
        res.json({msg:'Notification was deleted successfully', data: deletedNotification})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
   } 
})
//search for a notification 
router.get('/api/notification/findNotification/:id', (req,res) => {
    const {sentTo,sentFrom,Time,notifies} = req.body
    const notify = await Application.find({sentTo,sentFrom,Time,notifies})
    res.json({data: notify})
})
//get all notification
router.get('/api/notification/', (req,res) => {
    const Notifications = await Notifications.find()
    res.json({data: Notifications})
})

router.put('/api/notification/updateNotification/:id', async (req,res) => {
    try {
     const id = req.params.id
     const Notification = await Notifications.findOne({id})
     if(!Notification) return res.status(404).send({error: 'Notification does not exist'})
     const isValidated = NotificationValidator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedNotification = await Notifications.updateOne(req.body)
     res.json({msg: 'Notification updated successfully',data:updatedNotification})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
})

//router.get('/', (req, res) => res.json({ data:  Notification}))

module.exports = router

// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
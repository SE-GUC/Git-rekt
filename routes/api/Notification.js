const express =  require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Notifications = require('../../models/notification')
const Notification = [
    new Notifications('m7ama mahrous','adel shakal','ala am7ama ya mahrous yala',)
   
]
// //main page 
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
//delete a notification
app.delete('/api/notification/:id', (req,res) => {
    const notificationId = req.body.id
    const notification = Notification.find(notification => notificationId === notification.id )
    Notification.splice(Notification.indexOf(notification,1))
    res.json({ data:  Notification})
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
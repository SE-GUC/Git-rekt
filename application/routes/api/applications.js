const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Application = require('../../models/Application')

// temporary data
const applications = [
    new Application("ahmed", "SE", "11/1/2018"),
    new Application("mohamed", "C", "22/1/2015")
];

// Get all applications
app.get('/api/applications', (req, res) => {
    res.send(applications)
})


// Get a certain application
app.get('/api/applications/:id', (req, res) => {
    const applicationId = req.params.id
    const application = applications.find(application => application.id === applicationId)
    res.send(application)
})

// Create an application
app.post('/api/applications/', (req, res) => {
    const user = req.body.user
    const task = req.body.task
    const date = req.body.date
    const releaseYear = req.body.releaseYear
    
    const application = {
        user: user,
        task: task,
        date: date,
        id: applications.length + 1
    }
    applications.push(application)
    res.send(applications)
})


// Update an application's task
app.put('/api/applications/:id', (req, res) => {
    const applicationId = req.params.id 
    const updatedTask = req.body.task
    const application = applications.find(application => application.id === applicationId)
    application.task = updatedTask
    res.send(applications)
})

// Update an application's user
app.put('/api/applications/:id', (req, res) => {
    const applicationId = req.params.id 
    const updatedUser = req.body.user
    const application = applications.find(application => application.id === applicationId)
    application.user = updatedUser
    res.send(applications)
})


// Delete an application
app.delete('/api/applications/:id', (req, res) => {
    const applicationId = req.params.id 
    const application = applications.find(application => application.id === applicationId)
    const index = applications.indexOf(application)
    applications.splice(index,1)
    res.send(applications)
})
router.get('/', (req, res) => res.json({ data: applications }))
module.exports = router
const express = require('express')

const partner = require('./routes/api/partner')
const admin = require('./routes/api/admin')
const user = require('./routes/api/user')
const task = require('./routes/api/task')
const certificate = require('./routes/api/certificate')
const application = require('./routes/api/application')
const consultancy = require('./routes/api/consultancy')
const notification = require('./routes/api/notification')

const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub (moghad shewaya zo2 m3aya el sprint bs wenaby)</h1>
     <a href="/api/admin">admin</a> <br>
     <a href="/api/partner">partner</a> <br>
     <a href="/api/user">user</a> <br>
     <a href="/api/application">application</a> <br>
     <a href="/api/notification">notification</a> <br>
     <a href="/api/certificate">certificate</a> <br>
     <a href="/api/consultancy">consultancy</a> <br>
     <a href="/api/task">task</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/partner', partner)
app.use('/api/admin', admin)
app.use('/api/user', user)
app.use('/api/task', task)
app.use('/api/application', application)
app.use('/api/certificate', certificate)
app.use('/api/notification', notification)
app.use('/api/consultancy', consultancy)


// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 5000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
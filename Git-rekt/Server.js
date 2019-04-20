
const express = require('express')
const mongoose = require('mongoose')

// Require Router Handlers
const tasks = require('./routes/api/task')
const certificates = require('./routes/api/certificate')
const partners = require('./routes/api/partner')
const notifications = require('./routes/api/notification')
const users = require('./routes/api/user')
const applications = require('./routes/api/application')
const consultancy = require('./routes/api/consultancy')
const admin = require('./routes/api/admin')
const certificateApplication = require('./routes/api/certificateApplication')

const app = express()

// DB Config
const db = require('./config/keys').mongoURI

// Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

// Init middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Entry point
app.get('/', (req,res) => res.send(`<h1>Certificate Store</h1>`))
app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku</h1>`))

// Direct to Route Handlers
app.use('/api/task', tasks)
app.use('/api/certificate', certificates)
app.use('/api/partner', partners)
app.use('/api/notification', notifications)
app.use('/api/user', users)
app.use('/api/application', applications)
app.use('/api/consultancy', consultancy)
app.use('/api/admin', admin)
app.use('/api/certificateApplication', certificateApplication)

app.use((req,res) => res.status(404).send(`<h1>Can not find what you're looking for</h1>`))

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server on ${port}`))

//mongoose.connection.dropDatabase()
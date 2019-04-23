const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Require Router Handlers
const tasks = require('./routes/api/task')
const certificates = require('./routes/api/certificate')
const partners = require('./routes/api/partner')
const notifications = require('./routes/api/notification')
const passport = require('passport')
const users = require('./routes/api/user')
const applications = require('./routes/api/application')
const consultancy = require('./routes/api/consultancy')
const admin = require('./routes/api/admin')
const certificateApplication = require('./routes/api/certificateApplication')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(passport.initialize())
// DB Config
const db = require('./config/keys').mongoURI
require('./config/passport')(passport)
// Connect to mongo
mongoose
    .connect(db,{ useNewUrlParser: true })
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

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server on ${port}`))

//mongoose.connection.dropDatabase()
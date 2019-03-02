const express = require('express')

const applications = require('./routes/api/application')

const app = express()
app.use(express.json())

// Direct routes to appropriate files 
app.use('/api/application', applications)

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))

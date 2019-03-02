// Dependencies
const express = require('express');
const app = express()
app.use(express.json())


//Direct routes to appropriate files
app.use('/api/partners', partners)

const port = 3000
app.listen(port, () => console.log(`Server is up and running on port ${port}`))

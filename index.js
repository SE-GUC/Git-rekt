const express = require('express')
const uuid = require('uuid');
const notification = require('./routes/api/notification')
// Create the app
const app = express()

// Use it with post
app.use(express.json())
app.get('/', (req, res) => res.json({ data: notification }))

app.get('/', (req,res) => res.send(`<h1>GAFI WEBSITE!!!</h1>`))

app.use('/api/notification', notification)

app.put('/', (req,res) => res.send(`<h1>GAFI WEBSITE!!!</h1>`))
app.use('/api/notification', notification)

app.delete('/', (req,res) => res.json.send())
app.use('/api/notification', notification)



app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

 const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`)) 
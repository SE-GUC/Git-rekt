const express = require('express')
const app = express()
app.use(express.json())


app.get('/',(req,res) => {
    res.send(`<h1>Tasks</h1>
    <a href="/api/tasks">Tasks</a>
    `);
})


//direct routes
app.use('/api/tasks', Tasks)


// Handling 404
app.use((req, res) => {
    res.status(404).send({ err: '404: Not found :(' });
})


const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Application = require('../../models/application')
const Applications = [
    new Application('kobebryant@gmail.com','project habdawy')
]
// //main page
// router.get('/',(req,res) => {  
//     res.send(`<h1>hiiii</h1>`)
// })   
//create new application 
router.post('/api/application',(req,res) => {  
    const email = req.body.submitted_by
    const proj = req.body.submitted_for
    if (!proj) return res.status(400).send({ err: 'Project field is required' });
	if (!email) return res.status(400).send({ err: 'Email field is required' });
    const app = {
        email,
        proj, 
        id: uuid.v4()
    }
    Applications.pushapp(app)
    res.send(Applications)
})   
//show all applications 
router.get('/api/application', (req,res) => {
    res.send(Applications)
})
//show sepcific applications 
router.get('/api/application/:email', (req,res) => {
    const appmail = req.params.email
    res.json((Applications.find(app => appmail === app.email)))
})
//delete an application 
router.delete('/api/application/:email',(req,res) => {
    const appmail = req.params.email
    const app = Applications.find(app => appmail === app.email)
    Applications.splice(indexOf(app,1))
    res.json({ data:  Applications})
})
//update an app 
router.put('/api/application/:email',(req,res) => {
    const appmail = req.params.email
    const newmail = req.body.email
    const app = Applications.find(app => appmail === app.email)
    Applications.submitted_by = newmail
    res.send(Applications)
})

router.get('/', (req, res) => res.json({ data:  Applications}))
module.exports = router

// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
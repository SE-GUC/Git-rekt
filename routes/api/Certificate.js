const express =  require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Certificates = require('../../models/certificate')
const Certificate = [
    new Certificates('abo fatma electronics','manta habadaology ','adelshakal@gmail.com','habd power')
   
]
// //main page 
// app.get('/',(req,res) => {
//     res.send(`<h1>send help</h1>`)
// })

//create new certificate 
app.post('/api/certificate', (req,res) => {
    const issued_by = req.body.issued_by
    const approved_by = req.bdoy.approved_by
    const issued_for = req.body.issued_for
    const certifies_what = req.body.certifies_what
    if (!issued_by) return res.status(400).send({ err: 'Name field is required' });
	if (!approved_by) return res.status(400).send({ err: 'approval field is required' });
    if (!issued_for) return res.status(400).send({ err: 'Name field is required' });
    if (!certifies_what) return res.status(400).send({ err: 'certifcation field is required' });
    const certification = {
        issued_by,
        approved_by,
        issued_for,
        certifies_what,
        id: uuid.v4()
    }
    Certificate.push(certification)
    res.send(Certificate)
})
//delete a cetificate
app.delete('/api/certificate/:id', (req,res) => {
    const certificateId = req.body.id
    const certificate = Certificate.find(certificate => certificateId === certificate.id )
    Certificate.splice(Certificate.indexOf(certificate,1))
    res.json(Certificate)
})
//search for a certification (returns certifications that were given for a specific person)
app.get('/api/certificate/:issued_for', (req,res) => {
    const issuedForEmail = req.params.issued_for
    res.json( Certificate.find(certificate => issuedForEmail === certificate.issued_for))
})
//get all certifications
app.get('/api/certificate/', (req,res) => {
    res.send(Certificate)
})

router.get('/', (req, res) => res.json({ data:  Certificate}))
module.exports = router

// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
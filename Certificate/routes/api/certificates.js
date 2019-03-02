const express = require('express')
const router = express.Router()

const Certificates = [
    {
          id: 1
        , title = 'C 1.0'
        , description = 'Basics of C covering declarations, arrays and if conditions'
        , prerequisites = '-'
    }
   ,{
          id: 2
        , title = 'C 1.1'
        , description = 'Basics of C covering while loops, classes'
        , prerequisites = 'C 1.0'
    } 
   ,{
          id: 3
        , title = 'Python 2.0'
        , description = 'Intermediate Python course covering ~'
        , prerequisites = 'Python 1.9'
    }
]


router.get('/', (req, res) => res.json({ data: Certificates }))

//get all certificates
app.get('/api/certificates', (req, res) => {
    res.send(certificates)
})

//get a certain certificate
app.get('/api/certificates/:id',(req,res)=>{
const certificateID = req.param.id
const t = certificates.find(certificates => certificates.id == certificateID)
res.send(t)
})

// Create a certificate
app.post('/api/certificates/', (req, res) => {
    const title = req.body.title
    const prerequisites = req.body.prerequisites
    const description = req.body.description

    const certificate = {
         id: certificates.length + 1
        ,title:title
        ,prerequisites: prerequisites
        ,description: description
    }
    certificates.push(certificate)
    res.send(certificates)
})


// Update a certificate's title
app.put('/api/certificates/:id', (req, res) => {
    const certificateId = req.params.id
    const updatedtitle = req.body.title
    const certificate = certificates.find(certificate => certificate.id === certificateId)
    certificate.title = updatedtitle
    res.send(certificates)
})

// Update a certificate's prerequisites
app.put('/api/certificates/:id', (req, res) => {
    const certificateId = req.params.id
    const updatedprerequisites = req.body.prerequisites
    const certificate = certificates.find(certificate => certificate.id === certificateId)
    certificate.prerequisites = updatedprerequisites
    res.send(certificates)
})


// Update a certificate's description
app.put('/api/certificates/:id', (req, res) => {
    const certificateId = req.params.id
    const updateddescription = req.body.description
    const certificate = certificates.find(certificate => certificate.id === certificateId)
    certificate.title = updateddescription
    res.send(certificates)
})


// Delete a certificate
app.delete('/api/books/:id', (req, res) => {
    const certificateId = req.params.id
    const certificate = certificates.find(certificates => certificate.id === certificateId)
    const index = certificates.indexOf(certificate)
    certificates.splice(index, 1)
    res.send(certificates)
})


module.exports = router

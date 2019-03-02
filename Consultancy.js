const express = require('express')
const app = express()
app.use(express.json())

const consultancies = [

]


app.get('/', (req, res) => {
    res.send(`<h1>Consultancy</h1>`)
})

// Create
app.post('/api/consultancies', (req, res) => {
   // Certifications to be added
    const name = req.body.name
    const field = req.body.field
    const establishmentYear  = req.body.establishmentYear
    const description = req.body.description
    const contactInfo = req.body.contactInfo
    const rating = req.body.rating
    const previousConsultancies = req.body.previousConsultancies
    

    const consult = {
        name: name,
        field: field,
        establishmentYear : establishmentYear,
        description : description,
        contactInfo : contactInfo,
        rating : rating,
        previousConsultancies : previousConsultancies,
        id: consultancies.length + 1
    }
    consultancies.push(consult)
    res.send(consultancies)
})

// Updated name
app.put('/api/consultancies/:id', (req, res) => {
    const consultId = req.params.id 
    const updatedName = req.body.name
    const updatedField = req.body.field
    const updatedDescription = req.body.description
    const updatedContactInfo = req.body.contactInfo
    const updatedRating = req.body.rating
    const consult = consultancies.find(consult => consult.id === consultId)
    consult.name = updatedName
    consult.field = updatedField
    consult.updatedDescription = updatedDescription
    consult.contactInfo = updatedContactInfo
    consult.rating = updatedRating
    res.send(consultancies)
})

// Update field
app.put('/api/consultancies/:id', (req, res) => {
    const consultId = req.params.id 
    const updatedField = req.body.field
    const consult = consultancies.find(consult => consult.id === consultId)
    consult.field = updatedField
    res.send(consultancies)
})

// Update description
app.put('/api/consultancies/:id', (req, res) => {
    const consultId = req.params.id 
    const updatedDescription = req.body.description
    const consult = consultancies.find(consult => consult.id === consultId)
    consult.updatedDescription = updatedDescription
    res.send(consultancies)
})
// Update Contact info
app.put('/api/consultancies/:id', (req, res) => {
    const consultId = req.params.id 
    const updatedContactInfo = req.body.contactInfo
    const consult = consultancies.find(consult => consult.id === consultId)
    consult.contactInfo = updatedContactInfo
    res.send(consultancies)
})
// Update Rating
app.put('/api/consultancies/:id', (req, res) => {
    const consultId = req.params.id 
    const updatedRating = req.body.rating
    const consult = consultancies.find(consult => consult.id === consultId)
    consult.rating = updatedRating
    res.send(consultancies)
})


// Deleted
app.delete('/api/consultancies/:id', (req, res) => {
    const consultId = req.params.id 
    const consult = consultancies.find(consult => consult.id === consultId)
    const index = consultancies.indexOf(consult)
    consultancies.splice(index,1)
    res.send(consultancies)
})


// View all
app.get('/api/consultancies', (req, res) => {
    res.send(consultancies)
})


// View certain consu. agency
app.get('/api/consultancies/:id', (req, res) => {
    const consultId = req.params.id 
    const consult = consultancies.find(consult => consult.id === consultId)
    res.send(consultancies)
})


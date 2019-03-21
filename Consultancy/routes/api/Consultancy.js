const express =  require('express')
const app = express()
const mongoose = require('mongoose')
const validator = require('../../validations/consultancyValidations')
app.use(express.json())
const router = express.Router()
const Consultancies = require('../../models/consultancy')
const Consultancy = [ 
    new Consultancies(15254,'1998','Full stack development','bensa3dak te3mel el website eli nefsak fih ya mafia ya kebir','nemret madam affaf el receptionist')

]

router.get('/', async (req,res) => {
    const consultancy = await consultancy.find()
    res.json({data: consultancy})
})

//create consultancy mongooDB


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newConsultancy = await consultancy.create(req.body)
     res.json({msg:'Consultancy was created successfully', data: newConsultancy})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })



 // Update a consultancy mongooDB
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const consultancy = await consultancy.findOne({id})
     if(!consultancy) return res.status(404).send({error: 'consultancy does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedConsultancy = await consultancy.updateOne(req.body)
     res.json({msg: 'consultancy updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

// Delete a consultancy mongooDB
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedConsultancy = await consultancy.findByIdAndRemove(id)
     res.json({msg:'consultancy was deleted successfully', data: deletedConsultancy})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })




/*create consultancy
router.post('/api/consultancy',(req,res) => {
    const com_reg_num = req.body.com_reg_num
    const established_since = req.body.established_since
    const field = req.body.field
    const description = req.body.description
    const contact_info = req.body.contact_info
    if (!com_reg_num) return res.status(400).send({ err: 'company regestration number field is required' });
    if (!established_since) return res.status(400).send({ err: 'Establishment date field is required' });
    if (!field) return res.status(400).send({ err: 'field is required' });
    if (!description) return res.status(400).send({ err: 'Description field is required' });
    if (!contact_info) return res.status(400).send({ err: 'Contact info field is required' });

const consultancy = {
    com_reg_num,
    established_since,
    field,
    description,
    contact_info,
    id: uuid.v4()
 }
 Consultancy.push(consultancy)
 res.send(Consultancy)
})
//update consultancy field
router.put('/api/consultancy/:id',(req,res) => {
    const consultancyId = req.params.id
    const newField = req.body.field
    const newRating = req.body.rating
    const newContactInfo = req.body.contact_info
    const newDescription = req.body.description
    const newProject = req.body.consulted_projects
    const newCertification = req.body.certifications
    const newAssociates = req.body.associates
    const new_board_members = req.body.board_members
    const newEvent = req.body.event
    const newStudies = req.body.studies
    const newNotifications = req.body.notifications
    const consultancy =  Consultancy.find(consultancy => consultancyId === consultancy.id)
    if(newField !== undefined){
    consultancy.field = newField
    }
    if(newRating !== undefined){
        consultancy.rating = newRating
    }
    if(newDescription !== undefined){
        consultancy.description = newDescription
    }
    if( newProject !== undefined){
        consultancy.consulted_projects.push(newProject)
    }
    if( newCertification!== undefined){
        consultancy.certifications.push(newCertification)
    }
    if( newNotifications!== undefined){
        consultancy.notifications.push(newNotifications)
    }
    if( newStudies!== undefined){
        consultancy.studies.push(newStudies)
    }
    if( new_board_members !== undefined){
        consultancy.board_members.push(new_board_members)
    }
    if( newAssociates !== undefined){
        consultancy.associates.push(newAssociates)
    }
    if( newEvent !== undefined){
        consultancy.events.push(newEvent)
    }
    if(newContactInfo !== undefined){
       consultancy.contact_info = newContactInfo
    }


    res.json({ data:  Consultancy})
})

//delete consultancy 
router.post('/api/consultancy/:id',(req,res) => {
    const consultancyId = req.params.id
    const consultancy =  Consultancy.find(consultancy => consultancyId === consultancy.id)
    res.json(Consultancy.splice(Consultancy.indexOf(consultacny,1)))
})
//search for specific consultancy 
router.get('/api/consultancy/:id',(req,res) => {
    const consultancyId = req.params.id
    const consultancy =  Consultancy.find(consultancy => consultancyId === consultancy.id)
    res.json(consultancy)
})
//search for all consultancies 
router.get('/api/consultancy',(req,res) => {
    res.send(Consultancy)
})
*/

router.get('/', (req, res) => res.json({ data:  Consultancy}))
module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
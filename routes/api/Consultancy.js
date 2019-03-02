const express =  require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Consultancies = require('../../models/consultancy')
const Consultancy = [ 
    new Consultancies(15254,'1998','Full stack development','bensa3dak te3mel el website eli nefsak fih ya mafia ya kebir','nemret madam affaf el receptionist')

]
//main page
// app.get('/',(req,res) => {
//     res.send(`<h1>ew3a el mashari3 ya 3am el hag</h1>`)
// })
//create consultancy
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


router.get('/', (req, res) => res.json({ data:  Consultancy}))
module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
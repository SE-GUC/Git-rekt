const express =  require('express')
const app = express()
const consultancyValidator = require('../validations/consultancyValidations')
app.use(express.json())
const router = express.Router()
const Consultancies = require('../models/consultancy')
const task = require('../models/task')
const Admin = require('../models/admin')
const taskValidator = require('../validations/TaskValidations')
const application = require('../models/application')
const applicationValidation = require('../models/ApplicationValidations')


// const Consultancy = [ 
//     new Consultancies(15254,'1998','Full stack development','bensa3dak te3mel el website eli nefsak fih ya mafia ya kebir','nemret madam affaf el receptionist')
// ]



//create consultancy mongooDB
router.post('/api/consultancy/createConsultancy', async (req,res) => {
    try {
    const isValidated = consultancyValidator.createValidation(req.body)
    if (isValidated.error) {
        return res.status(400).send({error: isValidated.error.details[0].message})
    }
    const Email = req.body.email
    const consultancy = await Consultancies.findOne({Email})
    if(consultancy){
        return res.status(400).json({error:'consultancy already exists'})
    }        
     const newConsultancy = await Consultancies.create(req.body)
     res.json({msg:'Consultancy was created successfully', data: newConsultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })
//consultancy can apply for tasks
router.post('/api/consultancy/:consultancyEmail/applyForTask/:taskId', async (req,res) => {
    try{
        const isValidApp =  applicationValidation.createValidation({submittedBy:consultancyEmail,submittedFor:taskId})
        if(isValidApp.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const newApplication =  await application.create({consultancyEmail,taskId})
        const newTask = await task.find({taskId})
        const newConsultancy =  await Consultancies.find({consultancyEmail})
        newTask.applicant_list.push(newConsultancy)
        //notify admin later on 

        // const isValidated = taskValidator.createValidation(req.body)
        // if(isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
        // const newTask = await task.create(req.body)
        // const newAdmin = await Admin.find({email})
        // newAdmin.uploaded_tasks.push(newTask)
    }catch(error) {
        console.log(error)
    }  
})

 // Update a consultancy mongooDB
 router.put('/api/consultancy/updateConsultancy/:name', async (req,res) => {
    try {
    const name = req.params.name
    const consultancy = await Consultancies.findOne({name})
     if(!consultancy) {
        return res.status(404).send({error: 'consultancy does not exist'})
    }
    const isValidated = consultancyValidator.updateValidation(req.body)
    if (isValidated.error){
        return res.status(400).send({ error: isValidated.error.details[0].message }) 
    }
     const updatedConsultancy = await Consultancies.update(req.body)
     res.json({msg: 'consultancy updated successfully',data:updatedConsultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

// Delete a consultancy mongooDB
 router.delete('/api/consultancy/deleteConsultancy/:id', async (req,res) => {
    try {
     //const name = req.params.name
     const del = await Consultancies.findOne(name).id
     const deletedConsultancy = await Consultancies.findByIdAndRemove({del})
     if(!deletedConsultancy) return res.status(404).json({error:'admin does not exist'})
     res.json({msg:'consultancy was deleted successfully', data: deletedConsultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

// Search for a certain consultancy mongooDB
router.get('/api/consultancy/findConsultancy/:name', async (req,res) => {
    try {
     const name = req.params.name
     const consultancy = await Consultancies.findOne({name})
     if(!consultancy) return res.status(404).json({error:'consultancy does not exist'})
     res.json({msg:'consultancy was searched for successfully', data: consultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

// Search all consultancy
router.get('/api/consultancy/', async (req,res) => {
    const consultancy = await Consultancies.find()
    res.json({data: consultancy})
})
//router.get('/', (req, res) => res.json({ data:  Consultancy}))
module.exports = router

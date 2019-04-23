const express =  require('express')
const app = express()
const consultancyValidator = require('../../validations/consultancyValidations')
app.use(express.json())
const router = express.Router()
const Consultancy = require('../../models/Consultancy')
const applicationValidator = require('../../validations/applicationValidations')
const Application = require('../../models/Application')
const Task = require('../../models/Task')
const fetch = require("node-fetch")
const server = require("../../config/config")
const Admin = require("../../models/Admin")



//create consultancy mongooDB
router.post('/', async (req,res) => {
    try {
     const isValidated = consultancyValidator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newConsultancy = await Consultancy.create(req.body)
     res.json({msg:'Consultancy was created successfully', data: newConsultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

 //search for specific consultancy
 router.get('/:id', async (req,res) => {
    const consultancyId = req.params.id
    const consultancy = await Consultancy.findById(consultancyId);
    res.json(consultancy);
});


// Delete a consultancy mongooDB
 router.delete('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const deletedConsultancy = await Consultancy.findByIdAndRemove(id)
        res.json({msg:'consultancy was deleted successfully', data: deletedConsultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

 // Search for a certain consultancy mongooDB
 router.get('/:name', async (req,res) => {
    try {
     const name = req.params.name
     const getConsultancy = await consultancy.findOne(name)
     res.json({msg:'consultancy was searched for successfully', data: getConsultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

 // Search all consultancy
 router.get('/', async (req,res) => {
    const consultancy = await Consultancy.find()
    res.json({data: consultancy})
})

router.post('/:consultancyId/applyForTask/:taskId', async (req,res) => {
    try{
        const CId = req.params.consultancyId
        const tID = req.params.taskId
        const newTask = await Task.findById({tID})
        const newConsultancy =  await Consultancy.findbyId({CId})
        if(newTask === undefined) return res.status(404).send({error: 'task does not exist error 404'})
        const newApplication =  await Application.create({'user':email,'task':tID})
        const isValidApp =  applicationValidator.createValidation(newApplication)
        if(isValidApp.error) return res.status(400).send({error: isValidApp.error.details[0].message})
        newTask=await Task.findByIdAndUpdate(tId,newTask.applicant_list.push(CId))
        res.send({msg:'application created successfully',data:newApplication})
    }catch(error) {
        console.log(error)
    }  
})

//Negotiate with admin
router.get("/contactAdmin/:id", async(req,res)=>{
    const admin = await fetch(`${server}/api/admin/${req.params.id}`)
    .then(res => res.json())
    .catch(err => console.error(err))
    const Name = admin.name
    const Email = admin.email
    res.json({data: {Name , Email}})
})

router.get('/', (req, res) => res.json({ data:  Consultancy}))
module.exports = router
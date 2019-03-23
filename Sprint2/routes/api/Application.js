const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Application = require('../../models/application')
const ApplicationValidator = require('../../Validations/ApplicationValidations')


//show one application
router.get('/api/application/GetApplication/:id', async (req,res) => {
    const {submittedBy,submittedOn,submittedFor} = req.body
    const applications = await Application.find({submittedBy,submittedOn,submittedFor})
    res.json({data: applications})
})

//show all applications
router.get('/api/application/GetApplication', async (req,res) => {
    const applications = await Application.find()
    res.json({data: applications})
})

//create a new application
router.post('/api/application/CreateApplication', async (req,res) => {
   try {
    const isValidated = ApplicationValidator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({error: isValidated.error.details[0].message})
    const newApplication = await Application.create(req.body)
    if(newApplication){
        return res.status(400).json({error:'application already exists'})
    }        
    res.json({msg:'Application was created successfully', data: newApplication})
   }
   catch(error) {
       console.log(error)
   }  
})

//update application
router.put('/api/application/UpdateApplication/:id', async (req,res) => {
    try {
     const id = req.params.id
     const application = await Application.findOne({id})
     if(!application){
        return res.status(404).send({error: 'Application does not exist'})
    }
     const isValidated = ApplicationValidator.updateValidation(req.body)
     if (isValidated.error) {
        return res.status(400).send({ error: isValidated.error.details[0].message }) 
    }
     const updatedApplication = await Application.updateOne(req.body)
     res.json({msg: 'Application updated successfully',data: updatedApplication})
    }
    catch(error) {
        console.log(error)
    }  
 })

 router.delete('/api/application/DeleteApplication/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedApplication = await Application.findByIdAndRemove(id)
     if(!deletedApplication) return res.status(404).send({error: 'Application does not exist'})
     res.json({msg:'Application was deleted successfully', data: deletedApplication})
    }
    catch(error) {
        console.log(error)
    }
 })

 

module.exports = router
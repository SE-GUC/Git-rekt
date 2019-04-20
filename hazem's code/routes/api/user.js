const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const validator = require('../../validations/userValidations')
const fetch = require("node-fetch")
const server = require("../../config/config")
const Certificate = require("../../models/Certificate")


router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     console.log('------------------------')
        console.log(isValidated)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newUser = await User.create(req.body)
     res.json({msg:'User was created successfully', data: newUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//update a user
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const user = await User.findById(id)
     if(!user) return res.status(404).send({error: 'User does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedUser = await User.updateOne(req.body)
     res.json({msg: 'User updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 //delete a user
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedUser = await User.findByIdAndRemove(id)
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.get('/', async (req,res) => {
    const users = await User.find()
    res.json({data: users})
})

router.get('/:id', async (req,res) => {
    const userId = req.params.id
    const foundUser = await User.findById(userId);
    res.json(foundUser);
});

//Search for Certificate
router.get("/searchCertificate/:id", async(req,res)=>{
    var j
    await fetch(`${server}/api/certificate/${req.params.id}`)
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
})

//apply for a certificate
router.post("/:userID/applyCertificate/:certificateID", async (req, res) => {
    const body = {"certificate": `${req.params.certificateID}`,
                  "applicant": `${req.params.userID}`,
                  "status": "awaiting admin approval"}
    var j
    await fetch(`${server}/api/certificateApplication/`, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
  const body1 = {"sent_to": "admin",
                   "notifies": `${req.params.userID}`+ " has applied for certificate of " + `${req.params.certificateID}`,
                   "sent_from": "Server",
                   "time":"421" };
    await fetch(`${server}/api/notification/`, {
        method: "post",
        body: JSON.stringify(body1),
        headers: { "Content-Type": "application/json" }
      })
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
});

//User can apply for a task
router.post('/api/user/:email/applyForTask/:taskId', async (req,res) => {
    try{
        const isValidApp =  applicationValidation.createValidation({submittedBy:email,submittedFor:taskId})
        if(isValidApp.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const newApplication =  await Application.create({email,taskId})
        const newTask = await Task.find({taskId})
        const newUser =  await User.find({email}) //users dy ana shakek feeha 7awel tet2aked menha 3shan ma3eesh asamy el files
        newTask.applicant_list.push(newUser)
        res.json({msg:'User applied successfully', data: newTask})
    }catch(error) {
        console.log(error)
    }  
})

module.exports = router
const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const Admin = require('../../models/Admin')
const adminValidator = require('../../validations/adminValidations')
const Task = require('../../models/Task')
const User = require('../../models/User')
const Consultancy = require('../../models/Consultancy')
const fetch = require("node-fetch")
const server = require("../../config/config")

//get all admins
router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
})

// Contact Consultancy
router.get("/contactConsultancy/:id", async(req,res)=>{
    const consultancy = await fetch(`${server}/api/consultancy/${req.params.id}`)
    .then(res => res.json())
    .catch(err => console.error(err))
    const Email = consultancy.email
    const phoneNumber = consultancy.phoneNumber 
    res.json({data: {Email , phoneNumber}})
})


//view task description 
router.get('/:AdminEmail/viewTaskDesc/:TaskId', async (req,res) =>{
    const admins = await Admin.findById({AdminEmail})
    const adminTask = admins.uploaded_tasks
    const newTask = await Task.findById({TaskId})
    var flag= false
    for(i=0;i<=adminTask.size();i++){
        if(adminTask[i].id === newTask.id){
            newTask = adminTasks[i].id
            flag =true
        }
    }
    if(!flag) return res.status(404).send({error: 'task does not exist'})       
    return res.send({msg:'task description retrieved successfully',data: newTask.description})
}) 
//assign user to task
router.put('/:userId/assignUser/:id',async(req,res) => {
    const user = await User.findById({userId})
    const task = await Task.findById({id})
    //task.applicant_list.pull(user)
    task.assigned_users.push(user)

})
//assign consultancy to task
router.put('/:consultancyId/assingConsultancy/:id',async(req,res) => {
    const consultancy = await Consultancy.findById({userId})
    const task = await Task.findById({id})
    //task.applicant_list.pull(user)
    task.Assigned_Consultancy = consultancy
    task.assigned_users.push(admin.name)
})

//get admin by ID
router.get('/:id', async (req,res) => {
    const adminId = req.params.id
    const admin = await Admin.findById(adminId);
    res.json(admin);
});


router.post('/', async (req,res) => {
    try {
     const isValidated = adminValidator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newAdmin = await Admin.create(req.body)
     res.json({msg:'Admin was created successfully', data: newAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//update admin 
router.put('/updateAdmin/:email',async (req,res) => {
    const isValid = adminValidator.updateValidation(req.body)
    if(isValid.error){ 
        return res.status(400).send({error: isValid.error.details[0].message})
    }
    const adminEmail = req.params.email
    const admin = await Admin.find({adminEmail})
    if(!admin) {
        return res.status(404).send({error: 'Admin does not exist'})
    }
    const updateAdmin = await Admin.updateOne(req.body)
    return res.json({msg:'Admin updated successfully', data: updateAdmin})
   
})

//delete admin 
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Certificate was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 }) 

 router.delete('DeleteNotification/:email/:NotificationBody', async (req,res) => {
    try {
     const AdminEmail = req.params.email
     const notif= req.params.NotificationBody
     const foundAdmin = await Admin.findOne({email:AdminEmail})
     
     for(var i = 0 ; i < foundAdmin.notifications.length ; i++){
        if(foundAdmin.notifications[i] === notif){
            foundAdmin.notifications.splice(i,1);
        }
     }

     res.json({msg:'Certificate was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 })

//set task attributes
router.put("/setAttributes/:id", async (req, res) => {
    var j
    await fetch(`${server}/api/task/${req.params.id}`, {
    method: "put",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
});

//view consultant
router.get("/viewConsultant/:id", async(req,res)=>{
    var j
    await fetch(`${server}/api/consultancy/${req.params.id}`)
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
})

//upload tasks after negotiation step is over 
router.post("/uploadTask/", async (req, res) => {
    var j
    await fetch(`${server}/api/task/`, {
    method: "post",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
});

//view user's contact info
router.get("/viewUserContactInfo/:id", async (req, res) => {
    var j
    var name
    var contactInfo
    const user = await fetch(`${server}/api/user/${req.params.id}`)
      .then(res => res.json())
      .then(json => j = json)
      .catch(err => console.error(err))
    name = user.name
    contactInfo = user.contactInfo  
    res.json({data: {name,contactInfo}})
  })
  

//view user profile
router.get("/viewUser/:id", async (req, res) => {
  var j
  var name
  var age
  var email
  var githubPortofolio
  var contactInfo
  var updatedCV
  var registeredOn
  var signed
  var rating
  var certifications
  const user = await fetch(`${server}/api/user/${req.params.id}`)
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))

    name = user.name
    age = user.age
    email = user.email
    githubPortofolio = user.githubPortofolio
    contactInfo = user.contactInfo
    updatedCV = user.updatedCV
    registeredOn = user.registeredOn
    signed = user.signed
    rating = user.rating
    certifications = user.certifications
  res.json({
    data: {
      name,
      age,
      email,
      githubPortofolio,
      contactInfo,
      updatedCV,
      registeredOn,
      signed,
      rating,
      certifications
    }
  });
});




module.exports = router

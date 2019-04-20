const express = require('express')
const bcrypt = require('bcryptjs')
const fetch = require("node-fetch")
const server = require("../../config/config")

const router = express.Router()

const Admin = require('../../models/Admin')
const Task = require('../../models/Task')
const User = require('../../models/User')
const Consultancy = require('../../models/Consultancy')
const adminValidator = require('../../validations/adminValidations')


//CRUDS
//get all admins
router.get('/', async (req,res) => {
    const admins = await Admin.find()
    res.json({data: admins})
});

//get admin by ID
router.get('/:id', async (req,res) => {
    try{
        const adminId = req.params.id
        const admin = await Admin.findById(adminId);
        res.json(admin);
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//cretae a new admin
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
router.put('/updateAdmin/:id',async (req,res) => {
    try{
        const isValid = adminValidator.updateValidation(req.body)
        if(isValid.error){ 
            return res.status(400).send({error: isValid.error.details[0].message})
        }
        const adminId = req.params.id
        const admin = await Admin.find(adminId)
        if(!admin) {
            return res.status(404).send({error: 'Admin does not exist'})
        }
        const updateAdmin = await Admin.updateOne(req.body)
        return res.json({msg:'Admin updated successfully'})
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
    
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

//User stories
//creation of a task: view one, contact partner for negotiation, assigning the necessary variable
//view all tasks hat havent been approved
router.get('/viewAllUnapprovedTasks', async (req,res) => {

});

//view task description 
router.get('/:adminId/viewTaskDesc/:taskId', async (req,res) =>{
    try{
        const admins = await Admin.findById(req.params.adminId)
        const adminTask = admins.uploaded_tasks
        const newTask = await Task.findById(req.params.taskId)
        var flag= false
        for(i=0;i<=adminTask.size();i++){
            if(adminTask[i].id === newTask.id){
                newTask = adminTasks[i].id
                flag =true
            }
        }
        if(!flag) return res.status(404).send({error: 'task does not exist'})       
        return res.send({msg:'task description retrieved successfully',data: newTask.description})
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//contact a partner for negotiation over a new submitted task
router.get("/:taskId/contactPartner/:id", async(req,res)=>{
    try {
        //first we need to know which admin is trying to initiate the contact
        const contactingAdminId = req.params.id
        const contactingAdmin = await Admin.findById(contactingAdminId)
        if(!contactingAdmin) return res.status(404).send({error: 'Admin does not exist'})
        //then we need to identify the task being reviewed
        const reviewTaskId = req.params.taskId
        const reviewTask = await Task.findById(reviewTaskId)
        if(!reviewTask) return res.status(404).send({error: 'Task does not exist'})
        //now we need to identify the partner that uploaded the task (owner)
        const owningPartnerId = reviewTask.Owner
        const owningPartner = await Partner.findById(owningPartnerId)
        if(!owningPartner) return res.status(404).send({error: 'Partner does not exist'})
        //almost done we need to get the contact info of said partner, and notify him that current admin wishes to contact him
        //first get the parner contact info
        const partnerContactInfo = {
            "email" : owningPartner.email,
            "contact_info" : owningPartner.contact_info
        }
        //now we send the notification
        const msg = "Admin: " + contactingAdmin.name + ", wishes to contact you via their email: " + contactingAdmin.email + ", to discuss further negotiations concerning the task: " + reviewTaskId + ", posted on:  "  + reviewTask.posted_on + "."
        
        // const newNot = {
        //     "sent_to" : owningPartnerId,
        //     "notifies" : msg,
        //     "sent_from" : contactingAdminId,
        //     "time" : (new Date()).getTime()
        // }
        // await fetch(notificationsAPI+'/', {
        //     method : 'post',
        //     body : JSON.stringify(newNot),
        //     headers : {'Content-Type' : 'application/json'}
        // })
        // .then(res => res.json())
        // .catch(err => console.error(err))
        
        const partnerNots = owningPartner.notifications
        partnerNots.push(msg)
        const newNots ={
            "notifications" : partnerNots
        } 
        
        await fetch(`${server}/api/partner/${owningPartnerId}`, {
            method : 'put',
            body : JSON.stringify(newNots),
            headers : {'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .catch(err => console.error(err)) 
        res.json({msg:'Partner contact info was retrieved successfully', data: partnerContactInfo})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
});

//approve or reject a task

//set task attributes
router.put("/setAttributes/:id", async (req, res) => {
    try{
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
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//upload tasks after negotiation step is over 
// router.post("/uploadTask/", async (req, res) => {
//     try{
//         var j
//         await fetch(`${server}/api/task/`, {
//             method: "post",
//             body: JSON.stringify(req.body),
//             headers: { "Content-Type": "application/json" }
//         })
//         .then(res => res.json())
//         .then(json => j = json)
//         .catch(err => console.error(err))
//         res.json(j)
//     }
//     catch(error){
//         //We will handle error later
//         console.log(error)
//     }
// });

//assign user to task
// router.put('/:userId/assignUser/:id',async(req,res) => {
//     try{
//         const user = await User.findById({userId})
//         const task = await Task.findById({id})
//         //task.applicant_list.pull(user)
//         task.assigned_users.push(user)
//     }
//     catch(error){
//         //We will handle error later
//         console.log(error)
//     }
// });

//get all consultancies to choose from 
router.get('/viewAllConsultancies', async (req, res) =>{
    try{
        var output;
        await fetch(`${server}/api/consultancy`, {
            method : 'get',
            headers : {'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .catch(err => console.error(err)) 
        res.json(output)
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//view consultant
router.get("/viewConsultant/:id", async(req,res)=>{
    try{
        var j
        await fetch(`${server}/api/consultancy/${req.params.id}`)
        .then(res => res.json())
        .then(json => j = json)
        .catch(err => console.error(err))
        res.json(j)
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//Contact Consultancy
router.get("/contactConsultancy/:id", async(req,res)=>{
    try{
        const consultancy = await fetch(`${server}/api/consultancy/${req.params.id}`)
        .then(res => res.json())
        .catch(err => console.error(err))
        const Email = consultancy.email
        const phoneNumber = consultancy.phoneNumber 
        res.json({data: {Email , phoneNumber}})
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//assign consultancy to task
router.put('/:consultancyId/assingConsultancy/:taskid',async (req,res) => {
    try{
        const consultancy = await Consultancy.findById(req.params.consultancyId)
        const task = await Task.findById(req.params.taskId)
        if(!consultancy) return res.status(404).send({error: 'Consultancy does not exist'})
        if(!task) return res.status(404).send({error: 'Task does not exist'})

        const updatedConsultancy = task.Assigned_Consultancy
        updatedConsultancy = consultancy['_id']
        const updatedTask ={
            "Assigned_Consultancy" : updatedConsultancy
        } 
        await fetch(`${server}/api/task/${req.params.taskId}`, {
            method : 'put',
            body : JSON.stringify(updatedTask),
            headers : {'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .catch(err => console.error(err)) 
        res.json({msg:'Task consultancy was updated successfully', data: updatedConsultancy})
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//view user's contact info
router.get("/viewUserContactInfo/:id", async (req, res) => {
    try{
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
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});

//view user profile
router.get("/viewUser/:id", async (req, res) => {
    try{
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
    }
    catch(error){
        //We will handle error later
        console.log(error)
    }
});


module.exports = router

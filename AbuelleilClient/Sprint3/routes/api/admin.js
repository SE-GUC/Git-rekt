const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const Admin = require('../../models/Admin')
const adminValidator = require('../../validations/adminValidations')
const Task = require('../../models/Task')
const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const Consultancy = require('../../models/Consultancy')
const passport = require('passport')
const fetch = require("node-fetch")
const tokenKey = require('../../config/keys_prod').verySecretKey
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

//set task attributes
router.put("/setAttributes/:id",passport.authenticate('jwt', {session: false}), async (req, res) => {
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
router.post("/uploadTask/", passport.authenticate('jwt', {session: false}),async (req, res) => {
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

//view task description 
router.get('/:AdminEmail/viewTaskDesc/:TaskId',passport.authenticate('jwt', {session: false}), async (req,res) =>{
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
router.put('/api/admin/:userId/assignUser/:id',passport.authenticate('jwt', {session: false}),async(req,res) => {
    const user = await User.findById(req.params.userId)
    const task = await Task.findById(req.params.id)
    const newNotification = await Notification.create({"sent_to":user.id,"notifies":`you have been accepted to task${req.params.id} Congratulations`,"sent_from":task.approved_by.id,"Date":Date()})
    await user.findByIdAndUpdate(req.params.userId,{"notifications":user.notifications.push(newNotification)})
    await task.findByIdAndUpdate(req.params.id,{"applicant_list":task.applicant_list.filter((user)=> user !== req.params.userId)})
    await task.findByIdAndUpdate(req.params.id,{"assigned_users":task.assigned_users.push(req.params.userId)})
    res.json({msg:'user assigned successfully',data: task}) 

})
//reject user
router.put('/api/admin/:userId/rejectUser/:id',passport.authenticate('jwt', {session: false}),async(req,res) => {
    const user = await User.findById(req.params.userId)
    const task = await Task.findById(req.params.id)
    const newNotification = await Notification.create({"sent_to":user.id,"notifies":`you have been rejected from task${req.params.id} we're very sorry`,"sent_from":task.approved_by,"Date":Date()})
    await user.findByIdAndUpdate(req.params.userId,{"notifications":user.notifications.push(newNotification)})
    await task.findByIdAndUpdate(req.params.id,{"applicant_list":task.applicant_list.filter((user)=> user !== req.params.userId)})
    res.json({msg:'user assigned successfully',data: task}) 

})

//assign consultancy to task
router.put('/api/admin/:consultancyId/assignConsultancy/:id',passport.authenticate('jwt', {session: false}), async(req,res) => {
    const consultancy = await Consultancy.findById(req.params.consultancyId)
    task.applicant_list.filter((element) => element !== req.params.consultancyId)
    const task = await Task.findByIdAndUpdate(req.params.id,{"Assigned_Consultancy":req.params.consultancyId} )
    res.json({msg:'consultancy assigned successfully',data: task}) 
})
//get admin by ID
router.get('/:id', async (req,res) => {
    const adminId = req.params.id
    const admin = await Admin.findById(adminId);
    res.json(admin);
});
//get all admins 
router.get('/', async (req,res) => {
    const admin = await Admin.find()
    res.json(admin);
});
//create admin
router.post('/createAdmin', async (req,res) => {
    try {
     const isValidated = adminValidator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const salt = bcrypt.genSaltSync(10)
     const hashedPassword = bcrypt.hashSync(password,salt)
     const newAdmin = new Admin({
             name:req.body.name,
             password: hashedPassword ,
             email:req.body.email,
         })
     newAdmin
     .save()
     .then(user => res.json({data: user}))
     .catch(err => res.json({error: 'Can not create user'}))
    //  const hashedPassword = bcrypt.hashSync(password,salt)
    //  const newAdmin= {
    //     name: req.body.name,
    //     email:req.params.email,
    //     password:hashedPassword
    //  }
    //  newAdmin = await Admin.create(newAdmin)
    //  res.json({msg:'Admin was created successfully', data: newAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 router.post("/login", async (req, res) => {
    try {
      const isValidated = adminValidator.loginValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
  
      const email = req.body.email.toLowerCase();
      const password = req.body.password;
  
       const userWithEmail = await Admin.findOne({ email });
       if (!userWithEmail)return res.status(404).send({ error: "No user with this email" });

       const dbHash = userWithEmail["password"];
    //   bcrypt.compare(password, dbHash, async (err, match) => {
        if (password===dbHash) {
          const payload = {
            id: userWithEmail.id,
            name: userWithEmail.name,
            email: userWithEmail.email
          };
          const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
          return res.json({ data: `Bearer ${token}` });
        } else {
          return res.status(401).json({ error: "wrong password" });
        }
    //   });
    } catch (error) {
      console.log(error);
    }
  });
//update admin 
router.put('/updateAdmin/:id',passport.authenticate('jwt', {session: false}),async (req,res) => {
    const isValid = adminValidator.updateValidation(req.body)
    if(isValid.error){ 
        return res.status(401).send({error: isValid.error.details[0].message})
    }
    const admin = await Admin.findByIdAndUpdate(req.params.id,req.body)
    if(!admin) {
        return res.status(404).send({error: 'Admin does not exist'})
    }
    //const updateAdmin = await Admin.updateOne(req.body)
    const upAdmin = await Admin.findById(req.params.id)
    return res.json({msg:'Admin updated successfully', data: upAdmin})
   
})

//delete admin 
router.delete('/:id',passport.authenticate('jwt', {session: false}), async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
 })

module.exports = router
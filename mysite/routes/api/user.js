const express = require('express')
const bcrypt = require('bcryptjs')

const router = express.Router()
const mongoose = require('mongoose')

const User = require('../../models/User')
const validator = require('../../validations/userValidations')
const Certificate = require('../../models/Certificate')

/*create a new user
router.post('/register', async (req,res) => {
    const { email, age, name, password }  = req.body
    const user = await User.findOne({email})
    if(user) return res.status(400).json({error: 'Email already exists'})
    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password,salt)
    const newUser = new User({
            name,
            password: hashedPassword ,
            email,
            age,
            github_portofolio=github_portofolio,
            contact_info,
            updated_CV,
            registered_on,
            signed,
            rating
            ,notifications
            ,certifications,
            })
    newUser
    .save()
    .then(user => res.json({data: user}))
    .catch(err => res.json({error: 'Can not create user'}))
})*/

//Post in a Books-method
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
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

//apply for certification 
router.post('/applyCert/:id', async (req, res) => {
    //1.check if the certification exists
    const certificateId = req.params.id
    const certificate = await Certificate.findById(certificateId)
    if(!certificate) return res.status(404).send({error: 'Certificate does not exist'})

    //2.check if he applied on the certification before
        //get the user him-self
    const userId = req.body.id
    const user = await User.findById(userId)
    if(!user) return res.status(404).send({error: 'User does not exist'}) //unnecessary check

    //3.check if user applied before on the selected certificate
   var certifications = user.appliedApplications//user applied certifs.
    console.log(certifications)
    for(var i=0; i<certifications.length; i++){
        if(certifications[i].value === certificateId.value)
            return res.json({msg: 'user already applied for certificate'} )
    }
    //apply for certificate
    try {
        const update = await User.findByIdAndUpdate(userId, { $push: { appliedApplications: certificateId+"" } }).exec()
       //push to appliedApplications array
        res.json({msg: 'applied for certificate successfully'})
    } catch (error) {
        console.log(error)
    }
    
})


module.exports = router
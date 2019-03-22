const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../../models/User')
const validator = require('../../validation/Uservalidation')


//create a new user
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
})


//update a user
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const user = await User.findOne({id})
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


router.get('/', (req,res) => res.json({data: 'Users working'}))


module.exports = router
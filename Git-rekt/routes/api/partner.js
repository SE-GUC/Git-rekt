const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const fetch = require('node-fetch')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey

const server = require("../../config/config")
// const app = express()
// app.use(express.json())

const Partner = require('../../models/Partner')
//const Admin = require('../../models/Admin')
const validator = require('../../validations/partnerValidations')

const tasks = `${server}/api/task`
// //main page
// router.get('/',(req,res) => {
//     res.send(`<h1>helloooo partnerrrrr wink wink</h1>`)
//     res.send(Partner)
//     return res.json({ data: Partner });
// })

//show all partners
router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})

//show a specific partner 
router.get('/:id', async (req,res) =>{
    try {
        const id = req.params.id
        const Partner1 = await Partner.findById(id)
        res.json({msg:'Partner was retrieved successfully', data: Partner1})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }
})

//create new partner
router.post('/', async (req,res) => {
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newPartner = await Partner.create(req.body)
        res.json({msg:'Partner was created successfully', data: newPartner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
})

//update partner 
router.put('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const updatePartner = await Partner.findById(id)
        if(!updatePartner) return res.status(404).send({error: 'Partner does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedPartner = await Partner.findByIdAndUpdate(id, req.body)
        res.json({msg: 'Partner updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
})

//delete partner 
router.delete('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const deletedPartner = await Partner.findByIdAndRemove(id)
        res.json({msg:'Partner was deleted successfully', data: deletedPartner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
})

//USER STORIES
//Sumbit Task
router.post('/submitTask/:id', async (req, res) => {
    try{
        var output;
        const partner = await Partner.findById(req.params.id);
        await fetch( tasks+'/', {
            method : 'post',
            body : JSON.stringify(req.body),
            headers : {'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
        .then(json => output=json)
        .catch(err => console.error(err)) 
        res.json(output)
        //get id of last task created
        const allTasks = await axios.get(`${server}/api/task`)
        const lastIndex = allTasks.data.data.length;
        await Partner.findByIdAndUpdate(partner, { $push: { submitted_tasks: allTasks.data.data[lastIndex-1]._id +"" } }).exec()
    }catch(error){
        console.log("could not submit the task because ", error )
    }
})

 //searching by email
 router.get('/searchMail/:email', async (req, res) => {
    const partnerEmail = req.params.id
    const foundPartner = await Partner.findOne({partnerEmail});
    res.json(foundPartner);
}); 

 //login partner?!
 router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const partner = await Partner.findOne({email});
		if (!partner) return res.status(404).json({ email: 'Email does not exist' });
		if (password === partner.password) {
            const payload = {
                id: partner.id,
                name: partner.name,
                email: partner.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});


//assign partner from candidate partners to a task


//contact admin through mail
// router.get('/contact:name', async (req,res) => {
//     try {
//         const name = req.params.name
//         const admin = await Admin.findOne(name)
//         if(!updatePartner) return res.status(404).send({error: 'Partner does not exist'})
//         const mail = admin.contactInfo
//         res.json({msg:'Admin was retrieved successfully', data: mail})
//        }
//        catch(error) {
//            // We will be handling the error later
//            console.log(error)
//        }
// })

module.exports = router

// const port = process.env.PORT | 6969
// router.listen(port, () => console.log(`Server is up and running at port ${port}`))
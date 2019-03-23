const express =  require('express')
const app = express()
const consultancyValidator = require('../../validations/consultancyValidations')
app.use(express.json())
const router = express.Router()
const Consultancy = require('../../models/Consultancy')


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



 // Update a consultancy mongooDB
 router.put('/:name', async (req,res) => {
    try {
     const name = req.params.name
     const consultancy = await Consultancy.findOne({name})
     if(!consultancy) return res.status(404).send({error: 'consultancy does not exist'})
     const isValidated = consultancyValidator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedConsultancy = await Consultancy.updateOne(req.body)
     res.json({msg: 'consultancy updated successfully' , data: updatedConsultancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

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







router.get('/', (req, res) => res.json({ data:  Consultancy}))
module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
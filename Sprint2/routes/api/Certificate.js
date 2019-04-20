const express =  require('express')
const router = express()
router.use(express.json())
const router = express.Router()
const Certificates = require('../../models/certificate')
const certificateValidator = require('../../Validations/CertificateValidations')

// const Certificate = [
//     new Certificates('abo fatma electronics','manta habadaology ','adelshakal@gmail.com','habd power')
   
// ]
// //main page 
// app.get('/',(req,res) => {
//     res.send(`<h1>send help</h1>`)
// })

//create new certificate 
router.post('/api/certificate/createCertificate', (req,res) => {
    try {
        const isValidated = certificateValidator.createValidation(req.body)
        if (isValidated.error) {
           return res.status(400).send({ error: isValidated.error.details[0].message })
       }
       const  issusedForUser = req.body.issusedFor
       const certificate = await Certificates.findOne({issusedForUser})
       if(certificate){
           return res.status(400).json({error:'consultancy already exists'})
       }        
        const newCertificates = await Certificates.create(req.body)
        res.json({msg:'Consultancy was created successfully', data: newCertificates})
       }
       catch(error) {
           console.log(error)
       }  
})
//delete a cetificate
router.delete('/api/certificate/deletecertificate/:id', (req,res) => {
    const del = await Certificates.findOne(name).id
    const deletedCertificate = await Certificates.findByIdAndRemove({del})
    if(!deletedCertificate) return res.status(404).json({error:'certificate does not exist'})
    res.json({msg:'consultancy was deleted successfully', data: deletedConsultancy})
})

//search for a specific certificate
router.get('/api/certificate/findCertificate/:id', async (req,res) => {
    try{
        const certifcateId = req.params.id
        const certificate = await Certificates.findById({certifcateId})
        res.json({msg:' certficate was searched for successfully', data: certificate})
    }
    catch(error) {
        console.log(error)
    }  

})

//update certificate
router.put('/api/certificate/updateCertificate/:id', async (req,res) => {
    try {
    const certifcateId = req.params.id
    const certificate = await Certificates.findOne({certifcateId})
     if(!certificate) {
        return res.status(404).send({error: 'certificate does not exist'})
    }
    const isValidated = certificateValidator.updateValidation(req.body)
    if (isValidated.error){
        return res.status(400).send({ error: isValidated.error.details[0].message }) 
    }
     const updatedCertificate = await Certificates.update(req.body)
     res.json({msg: 'consultancy updated successfully',data:updatedCertificate})
    }
    catch(error) {
        console.log(error)
    }  
 })
//get all certifications
router.get('/api/certificate/', async (req,res) => {
    const certificate = await Certificates.find()
    res.send(certificate)
})

//router.get('/', (req, res) => res.json({ data:  Certificate}))

module.exports = router



const express = require('express')
const Joi = require('joi')
// const app = express()
// app.use(express.json())
const router = express.Router()
const Partners = require('../../models/partner')
const Partner = [
    new Partners('mohy el sharkawy','mohyelkhatir@gmail.com','0101111002',548531,'sherket sha7n', true)
];
// //main page
// router.get('/',(req,res) => {
//     res.send(`<h1>helloooo partnerrrrr *wink wink*</h1>`)
//     res.send(Partner)
//     return res.json({ data: Partner });
// })
//create new partner
router.post('/',(req,res) => {
    const name = req.body.name
    const email = req.body.email
    const contact_info = req.body.contact_info
    const com_reg_num = req.body.com_reg_num
    const signed = req.body.signed
	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (!email) return res.status(400).send({ err: 'Email field is required' });
    if (!contact_info) return res.status(400).send({ err: 'Name field is required' });
    if (!com_reg_num) return res.status(400).send({ err: 'Name field is required' });
    if (!signed) return res.status(400).send({ err: 'Name field is required' });
    const partner = {
    name,
    email,
    contact_info,
    com_reg_num,
    signed,
    id: uuid.v4()
    }
Partner.push(partner)
return res.json({ data: partner });})

//update partner 
router.put('api/partner/:id',(req,res) => {
    const partnerId = req.params.id
    const partnerRate = req.body.rating
    const partnerInfo = req.body.contact_inf
    const partnerName = req.body.name
    const partnerSigning = req.body.signed
    const partnerEvents = req.body.events
    const partnerFeedback = req.body.feedback
    const partnerAssociates = req.body.associates
    const partnerRegNum = req.body.com_reg_num
    const partnerEmail =req.body.email
    const partnerNotifications = req.body.notifications
    const partnerSubmissions = req.body.submitted_tasks
    const partner = Partner.find(partner => partnerId === partner.id)  

    if(partnerInfo !== undefined){
        partner.contact_info = partnerInfo
    }
    if(partnerName !== undefined){
        partner.name = partnerName
    }

    if(partnerSigning !== undefined){
        partner.signed = partnerSigning
    }
    if(partnerEmail !== undefined){
        partner.email = partnerEmail
    }
    if(partnerNotifications !== undefined){
        partner.notifications.push(partnerNotifications)
    }
    
    if(partnerNotifications !== undefined){    
        partner.submitted_tasks.push(partnerSubmissions)
    }
    if(partnerRate !== undefined){   
        partner.rating = partnerRate
    }
    if(partnerFeedback !== undefined){    
        partner.Feedback.push(partnerFeedback)
    }
    if(partnerEvents !==undefined){
        partner.com_reg_num = partnerRegNum
     }
    if(partnerEvents !== undefined)
    {
        partner.events.push(partnerEvents)
    }
    if(partnerAssociates !== undefined){
    partner.associates.push(partnerAssociates)
    }
    return res.json({ data: Partner })
})

//delete partner 
router.delete('api/partner/:id',(req,res) => {
    const partnerId = req.params.id
    const partner =  partner.find(partner => partnerId === Partner.id)
    Partner.splice(Partner.indexOf(partner),1)
    return res.json({ data: Partner });})

//show a specific partner 
router.get('api/partner/:id', (req,res) =>{
    const partnerId = req.params.id
    return res.json(partner.find(partner => partnerId === Partner.id)
    )
})

//show all partners 
router.get('/', (req,res) => {
    return res.json({ data: Partner });})

module.exports = router

// const port = process.env.PORT | 6969
// router.listen(port, () => console.log(`Server is up and running at port ${port}`))

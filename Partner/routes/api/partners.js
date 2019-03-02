const express = require('express')
const router = express.Router()
const joi = require('joi')

// api
const partner = require('../../api/partners');

// temporary data created as if it was pulled out of the database ...
const Partner = [
    {
        name: 'Ahmed el kholy',
        email: 'elkholyofficial@gmail.com',
        contactInfo: '01012336547',
        registeredOn: 'DD/MM/YYYY',
        signed: 'true',
        rating: '4',
        submitedTasks: ['drummer yazmeel, bashed del otat yazmeel, 5areeg fenoon gameela yazmeel'],
        notifications: ['haroo7 a3od 3ala ahwa'],
        Partners = ['temsa7a'],
        board = ['falawla'],
        events = ['paranoia'],
        filedWork = ['guitars at ble5'],
        pastProjects = ['drums at ouf'],
        form = ['lol'],
        
        id:'1'
    }
];

router.get('/', (req,res) => {
    res.send(`hello partner`)
    res.send(Partner)
    return res.json( {data: Partner});
})
// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200



// Create a new Partner
router.post('/', (req, res) => {

	const partner = {
        name: rew.body.name,
        email: req.body.email,
        contactInfo: req.body.contactInfo,
        rating: null,
        registeredOn: Date.now(),
        signed: rew.body.signed,
        submitedTasks: [],
        notifications: [],
        Partners: [],
        board: [],
        events: [],
        filedWork: [],
        pastProjects: [],
        form: [],
        id: Partner.length + 1

    }
    Partner.push(partner)
    return Response.json({ data: partner });
})

//update the partner rating
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerRate = req.body.rating
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.rating = partnerRate
    return res.json({ data: Partner });
})

//update partner Name
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerName = req.body.name
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.name = partnerName
    return res.json({ data: Partner });
})

//update partner email
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerEmail = req.body.email
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.email = partnerEmail
    return res.json({ data: Partner });
})

//update partner contact Info
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerContact = req.body.contactInfo
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.contactInfo = partnerContact
    return res.json({ data: Partner });
})

//update partner signed
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerSigned = req.body.signed
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.signed = partnerSigned
    return res.json({ data: Partner });
})

//update partner submitted tasks
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerST = req.body.submitedTasks
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.submitedTasks = partnerST
    return res.json({ data: Partner });
})

//update partner Notifications
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerN = req.body.notifications
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.notifications = partnerN
    return res.json({ data: Partner });
})

//update partner partners
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerP = req.body.Partners
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.Partners = partnerP
    return res.json({ data: Partner });
})

//update partner board memebers
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerBM = req.body.board
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.board = partnerBM
    return res.json({ data: Partner });
})

//update partner events
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerE = req.body.events
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.events = partnerE
    return res.json({ data: Partner });
})

//update partner filed work
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerFW = req.body.filedWork
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.filedWork = partnerFW
    return res.json({ data: Partner });
})

//update partner past projects
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerPP = req.body.pastProjects
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.pastProjects = partnerPP
    return res.json({ data: Partner });
})

//update partner form
router.put('/:id', (req,res) => {
    const partnerId = req.params.id
    const partnerForm = req.body.form
    const partner = Partner.find(partner => partnerId === Partner.id)
    partner.form = partnerForm
    return res.json({ data: Partner });
})

//show a specific partner
router.get('/', (req,res) =>{
    const partnerId = req.params.id
    return res.json(partner.find(partner => partnerId === partner.id))
})

//show a specific partners
router.get('/:id', (req,res) =>{
    return res.json({ data: Partner})
})
// Get all partners
router.get('/', (req, res) => res.json({ data: Partner }));


//delete
router.delete('/:id', (req,res) => {
    const partnerId = rew.params.id
    const partner = partner.find(partner => partnerId === Partner.id)
    Partner.splice(Partner.indexOf(partner), 1)
    return res.json({ data: Partner});
})

module.exports = router;
const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Users = require('../../models/user')
const User = [
    new Users('el lemby','nousa3310@gmail.com','github.com/raz3','beit abo salah','linkedin.com',false,) 
  
]
//create new user
app.post('/api/user',(req,res) => {
    const name = req.body.name
    const email = req.body.email
    const github_link = req.body.github_link
    const contact_info = req.body.contact_info
    const updated_CV = req.body.updated_CV
    const signed = req.body.signed
    if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (!email) return res.status(400).send({ err: 'Email field is required' });
    if (!contact_info) return res.status(400).send({ err: 'Name field is required' });
    if (!updated_CV) return res.status(400).send({ err: 'Name field is required' });
    if (!signed) return res.status(400).send({ err: 'Name field is required' });
    if (!github_link) return res.status(400).send({ err: 'Name field is required' });
const user = {
    approved_by,
    description,
    posted_by,
    Estimated_effort,
    Time_taken,
    Level_of_commitment,
    Experience_level ,
    Monetary_compensation,
    Owner ,
    Assigned_Consultancy,
    reviewed,        
    id: uuid.v4()
}
User.push(user)
res.send(User)
})
//update user certifications
router.put('api/user/:id',(req,res) => {
    const userId = req.params.id
    const userCertifications = req.body.certifications
    const userNotifications = req.body.notifications
    const userExp = req.body.exp
    const userGit = req.body.github_link
    const userContact = req.body.contact_info
    const userCV = req.body.updated_CV
    const userRating = req.body.rating
    const userSigning = req.body.signed
    const userName = req.body.name
    const userEmail = req.body.email
    const user = User.find(user => userId === user.id)
    if(userCertifications !== undefined){
    user.certifications.push(userCertifications)
    }
    if(userNotifications !== undefined){
    user.notifications.push(userNotifications)
    }
    if(exp !== undefined){
    user.exp.push(userExp)
    }
    if(github_link !== undefined){
    user.github_link = userGit
    }
    if(userContact !== undefined){
    user.contact_info = userContact
    }
    if(userCV !== undefined){
    user.updated_CV= userCV
    }
    if(userRating !== undefined){
    user.rating= userRating
    }
    if(userSigning !==undefined){
    user.signed = userSigning
    }
    if(userName !== undefined){
    user.name = userName
    }
    if(userEmail !== undefined){
    user.email = userEmail
    }
    return res.json({ data: User})
})
//delete user
router.delete('/api/user/:id',(req,res) => {
    const userId = req.params.id
    const user =  user.find(user => userId === user.id)
    User.splice(User.indexOf(user),1)
    return res.json({ data: User });
})
//show a specific user 
router.get('/api/user/:id', (req,res) =>{
    const userId = req.params.id
    return res.json(partner.find(user=> userId === user.id)
    )
})

router.get('/', (req, res) => res.json({ data:  User}))

module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
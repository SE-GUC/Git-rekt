const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Users = require('../models/user')
const task = require('../models/task')
const application = require('../models/application')
const applicationValidation = require('../models/ApplicationValidations')


// const User = [
//     new Users('el lemby','nousa3310@gmail.com','github.com/raz3','beit abo salah','linkedin.com',false,) 
  
// ]
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
//user applies for a task
router.post('/api/user/:email/applyForTask/:taskId', async (req,res) => {
    try{
        const isValidApp =  applicationValidation.createValidation({submittedBy:email,submittedFor:taskId})
        if(isValidApp.error) return res.status(400).send({error: isValidated.error.details[0].message})
        const newApplication =  await application.create({email,taskId})
        const newTask = await task.find({taskId})
        const newUser =  await Users.find({email}) //users dy ana shakek feeha 7awel tet2aked menha 3shan ma3eesh asamy el files
        newTask.applicant_list.push(newUser)
        
    }catch(error) {
        console.log(error)
    }  
})
router.get('/api/user/browseVacancies/:id', async (req,res) => {
    const avaliableTasks = [task]
    var flag = true
    var count = 0;
    const id = req.params.id
    const user = await Users.findById({id})
    const userCertifications = user.certifications
    const allTasks = await task.find()
    for(i=0;i<=allTasks.size();i++){//loops over all avaliable tasks
        const taskCertifications = allTasks[i].Required_set_of_skills
        for(j=0;j<taskCetifications.size();j++){//loops over all the required certifications
            const curr = taskCertifications[j]
            for(k=0;k<userCertifications.size();k++){//takes each certification individaually to make sure said user has that certification 
                if(curr === userCertifications[k]){
                    count++;
                }
            }
            if(count !== taskCertifications.size()){//if count is the same as the size of the taskCertification array then user has all certifications in said array
                flag = false;
            }
        }
        if(flag){
            avaliableTasks.push(allTasks[i])
        }
    }
    res.send ({msg:'all avaliable tasks',data: avaliableTasks})
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
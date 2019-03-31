const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Admins = require('../../models/admin')
const Admin = [
    new Admins('ahmed hossam','ahmedhossam@gmail.com','high')
  
];

//main page
// router.get('/',(req,res) => {
//     res.send(`<h1>Welcome</h1>`)
// })
//create new admin
router.post('/joi',(req,res) => {
    const name = req.body.name
    const email = req.body.email
    const access_level = req.body.access_level
	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (!email) return res.status(400).send({ err: 'Email field is required' });
	if (!access_level) return res.status(400).send({ err: 'Name field is required' });
    const admin = {
    name,
    email,
    access_level,
    id: uuid.v4()
    }
Admin.push(admin)
return res.json({ data: Admin })
})
//update admin email
router.put('api/admin/:id',(req,res) => {
    const adminId = req.params.id
    const adminEmail = req.body.email
    const adminTasks = req.body.uploaded_tasks
    const adminNotifications = req.body.notifications
    const admin = Admin.find(admin => adminId === admin.id)
    if(adminEmail !== undefined){
    admin.email = adminEmail
    }
    if(adminTasks !== undefined){
    admin.uploaded_tasks.push(adminTasks)
    }
    if(adminNotifications !== undefined){
    admin.notifications.push(adminNotifications)
    }

    return res.json({ data: Admin })
})
//delete admin 
router.delete('/api/admin/:id',(req,res) => {
    const adminId = req.params.id
    const admin =  Admin.find(admin => adminId === admin.id)
    Admin.splice(Admin.indexOf(admin),1)
    return res.json({ data: Admin })
})

//show a specific admin 
router.get('/api/admin/:id', (req,res) =>{
    const adminId = req.params.id
    res.json(admin.find(admin => adminId === admin.id)
    )
})
//show all admins 
router.get('/api/admin', (req,res) => {
    res.json({ data: Admin })
})

router.get('/', (req, res) => res.json({ data:  Admin}))
module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
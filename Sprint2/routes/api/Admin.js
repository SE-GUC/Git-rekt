const express = require('express')
const bcrypt = require('brcryptjs')
const router = express.Router()
const Admin = require('../../models/admin')
const adminValidator = require('../../Validations/AdminValidations')
const Task = require('../../models/task')
const User = require('../../models/user')
const Consultancy = require('../../models/consultancy')




// const Admin = [
//     new Admins('ahmed hossam','ahmedhossam@gmail.com','high')
// ];
//view task description 
router.get('/api/admin/:AdminEmail/viewTaskDesc/:TaskId', async (req,res) =>{
    const admins = await Admin.findById({AdminEmail})
    const adminTask = admins.uploaded_tasks
    const newTask = await Task.findById({TaskId})
    var flag= false
    for(i=0;i<=adminTask.size();i++){
        if(adminTask[i].id === newTask.id){
            newTask = adminTasks[i].id
            flag =true
        }
    }
    if(!flag) return res.status(404).send({error: 'task does not exist'})       
    return res.send({msg:'task description retrieved successfully',data: newTask.description})
}) 
//assign user to task
router.put('/api/admin/:userId/assignUser/:id',async(req,res) => {
    const user = await User.findById({userId})
    const task = await Task.findById({id})
    //task.applicant_list.pull(user)
    task.assigned_users.push(user)

})
//assign consultancy to task
routner.put('/api/admin/:consultancyId/assingConsultancy/:id',async(req,res) => {
    const consultancy = await Consultancy.findById({userId})
    const task = await Task.findById({id})
    //task.applicant_list.pull(user)
    task.Assigned_Consultancy = consultancy
})

router.get('/api/admin/:email', async (req,res) => { 
    const admin = await Admin.findOne({email})
    if(!admin)  return res.status(404).json({error:'admin does not exist'})
    res.json({data: admin}) 
    //res.json({data: 'Admins working'}
})

router.post('/api/admin/createAdmin',async (req,res) => {
    const {name, email, password} = req.body
    const admin = await Admin.findOne({email})    
    const isValid = adminValidator.createValidation(req.body)
    if(isValid.error){
        return res.status(400).send({error: isValid.error.details[0].message})
    }
    if(admin){
        return res.status(400).json({error:'email already exists'})
    }    
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    //Admins.create(req.body)
    const newAdmin = new Admins({
        name,
        password: hashedPassword,
        email,
        access_level
    })
    newAdmin.save().then(admin => res.json({data: admin})).catch(err => res.json({error: 'Can not create user'}))
})

//update admin 
router.put('/api/admin/updateAdmin/:email',async (req,res) => {
    const isValid = adminValidator.updateValidation(req.body)
    if(isValid.error){ 
        return res.status(400).send({error: isValid.error.details[0].message})
    }
    const adminEmail = req.params.email
    const admin = await Admin.findOne({adminEmail})
    if(!admin) {
        return res.status(404).send({error: 'Admin does not exist'})
    }
    const updateAdmin = await Admin.updateOne(req.body)
    return res.json({msg:'Admin updated successfully', data: updateAdmin})
   
})

//delete admin 
router.delete('/api/admin/deleteAdmin/:email',(req,res) => {
    try{
    const adminEmail = req.params.Email
    //const admin =  Admin.find(admin => adminId === admin.id)
    // const admin = await Admin.findOne({email})
    const deleteAdmin =  await Admin.findOneAndRemove({adminEmail})
    if(!deleteAdmin) return res.status(404).json({error:'admin does not exist'})
    res.json({msg:'Admin was deleted successfully', data: deleteAdmin })
}
catch(error) {
    console.log(error)
} 
})
    


// //show a specific admin 
// router.get('/api/admin/findAdmin/:name', (req,res) =>{
//     const AdminName = req.params.name
//     //const adminId = req.params.id
//     res.json(admin.find(admin => adminName === admin.name)
//     )
// })
// //show all admins 
// router.get('/api/admin', (req,res) => {
//     res.json({ data: Admin })
// })
//router.get('/', (req, res) => res.json({ data:  Admin}))

module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
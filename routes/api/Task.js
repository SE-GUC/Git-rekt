const express = require('express')
const app = express()
app.use(express.json())
const router = express.Router()
const Tasks = require('../../models/Task')
const Task = [
    new Tasks('el nazer', 'methal lel sheda wel hazm', 'set gawaher', 'inshallah msh ketir', 'yekhlas fi a3da', 'commitment issues', '25 gondy', 'saheb el mashrou3', 'manta habadology', 'ostaz ahmed el admin')

]
// {
//     approsved_by: 'el nazer',
//     posted_by: 'set gawaher',
//     posted_on: 'DD/MM/YYYY',
//     description: 'methal lel sheda wel hazm',
//     Estimated_effort: 'inshallah msh ketir',
//     Time_taken: 'yekhlas fi a3da',
//     Level_of_commitment: 'commitment issues',
//     Experience_level: 'wohoush',
//     Monetary_compensation: '25 gondy',
//     Owner: 'saheb el mashrou3',
//     Assigned_Consultancy: 'manta habadology',
//     Required_set_of_skills: ['kodret ehtemal 3alya', 'khalfeya was3a'],
//     task_list: ['milestone 1','UI','chatbot'],
//     applicant_list: ['jennifer aniston', 'mohsen el ranking'],
//     reviewed: 'ostaz ahmed el admin', 
//     assigned_users: ['wahsh el acpc','qonbelet el coding'],
//     id:'1'
// }
//main page 
// app.get('/',(req,res) => {
//     res.send(`<h1>eli mesaharny el layali</h1>`)
// })
//update description
router.put('/api/task/:id', (req, res) => {

    const taskId = req.params.id
    const taskDecsription = req.body.description
    const taskEffort = req.body.Estimated_effort
    const taskTime = req.body.Time_taken
    const taskCommit = req.body.Level_of_commitment
    const taskExp = req.body.Experience_level
    const taskMoney = req.body.Monetary_compensation
    const taskOwner = req.body.Owner
    const taskConsultancy = req.body.Assigned_Consultancy
    const taskCertifications = req.body.Required_set_of_skills
    const taskList = req.body.task_list
    const taskApplicant = req.body.applicant_list
    const taskAssigned = req.body.assigned_users
    const task = Task.find(task => taskId === task.id)

    if (taskDecsription !== undefined) {
        task.description = taskDecsription
    }
    if (taskEffort !== undefined) {
        task.Estimated_effort = taskEffort
    }
    if (taskTime !== undefined) {
        task.Time_taken = taskTime
    }
    if (taskCommit !== undefined) {
        task.Level_of_commitment = taskCommit
    }
    if (taskExp !== undefined) {
        task.Experience_level = taskExp
    }
    if (taskMoney !== undefined) {
        task.Monetary_compensation = taskMoney
    }
    if (taskOwner !== undefined) {
        task.Owner = taskOwner
    }
    if (taskConsultancy !== undefined) {
        task.Assigned_Consultancy = taskConsultancy
    }
    if (taskList !== undefined) {
        task.task_list.push(taskList)
    }
    if (taskApplicant !== undefined) {
        task.applicant_list.push(taskApplicant)
    }
    if (taskCertifications !== undefined) {
        task.Required_set_of_skills.push(taskCertifications)
    }
    if (taskAssigned !== undefined) {
        task.assigned_users.push(taskAssigned)
    }
    res.json({ data: Task })

})

// //update effort 
// app.put('/api/task/:id',(req,res) => {
//     console.log("2")
//     const taskId = req.params.id
//     const taskEffort = req.body.Estimated_effort
//     const task = Task.find(task => taskId === Task.id)
//     task.Estimated_effort.push(taskEffort)
//     res.send(Task)

// })
// //update time taken 
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskTime = req.body.Time_taken
//     const task = Task.find(task => taskId === Task.id)
//     task.Time_taken.push(taskTime)
//     res.send(Task)

// })
// //update commitment
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskCommit = req.body.Level_of_commitment
//     const task = Task.find(task => taskId === Task.id)
//     task.Level_of_commitment.push(taskCommit)
//     res.send(Task)

// })
// //update exp lvl
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskExp = req.body.Experience_level
//     const task = Task.find(task => taskId === Task.id)
//     task.Experience_level.push(taskExp)
//     res.send(Task)

// })
// //update monetary comp
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskMoney = req.body.Monetary_compensation
//     const task = Task.find(task => taskId === Task.id)
//     task.Monetary_compensation.push(taskMoney)
//     res.send(Task)

// })
// //update owner
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskOwner = req.body.Owner
//     const task = Task.find(task => taskId === Task.id)
//     task.Owner.push(taskOwner)
//     res.send(Task)

// })
// //update assigned consultancy
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskConsultancy = req.body.Assigned_Consultancy
//     const task = Task.find(task => taskId === Task.id)
//     task.Assigned_Consultancy.push(taskConsultancy)
//     res.send(Task)

// })
// //update required cerifications
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskCertifications = req.body.Required_set_of_skills
//     const task = Task.find(task => taskId === Task.id)
//     task.Required_set_of_skills.push(taskCertifications)
//     res.send(Task)

// })
// //update task list
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskList = req.body.task_list
//     const task = Task.find(task => taskId === Task.id)
//     task.task_list.push(taskList)
//     res.send(Task)

// })
// //update applicant list
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskApplicant = req.body.applicant_list
//     const task = Task.find(task => taskId === Task.id)
//     task.applicant_list.push(taskApplicant)
//     res.send(Task)

// })
// //update assigned users
// app.put('/api/task/:id',(req,res) => {
//     const taskId = req.params.id
//     const taskAssigned = req.body.assigned_users
//     const task = Task.find(task => taskId === Task.id)
//     task.assigned_users.push(taskAssigned)
//     res.send(Task)

// })
//create a task
router.post('/api/task', (req, res) => {
    const approved_by = req.body.approved_by
    const description = req.body.description
    const posted_by = req.body.posted_by
    const Estimated_effort = req.body.Estimated_effort
    const Time_taken = req.body.Time_taken
    const Level_of_commitment = req.body.Level_of_commitment
    const Experience_level = req.body.Experience_level
    const Monetary_compensation = req.body.Monetary_compensation
    const Owner = req.body.Owner
    const Assigned_Consultancy = req.body.Assigned_Consultancy
    const reviewed = req.body.reviewed
    if (!approved_by) return res.status(400).send({ err: 'verifier"s Name field is required' });
    if (!description) return res.status(400).send({ err: 'description field is required' });
    if (!posted_by) return res.status(400).send({ err: 'sender"s name field is required' });
    if (!Estimated_effort) return res.status(400).send({ err: 'effort field is required' });
    if (!Time_taken) return res.status(400).send({ err: 'time taken field is required' });
    if (!Level_of_commitment) return res.status(400).send({ err: 'commitment field is required' });
    if (!Experience_level) return res.status(400).send({ err: 'experience field is required' });
    if (!Monetary_compensation) return res.status(400).send({ err: 'wage field is required' });
    if (!Owner) return res.status(400).send({ err: 'owner field is required' });
    if (!Assigned_Consultancy) return res.status(400).send({ err: 'consultancy field is required' });
    if (!reviewed) return res.status(400).send({ err: 'reviewed field is required' });
    const task = {
        approved_by,
        description,
        posted_by,
        Estimated_effort,
        Time_taken,
        Level_of_commitment,
        Experience_level,
        Monetary_compensation,
        Owner,
        Assigned_Consultancy,
        reviewed,
        id: uuid.v4()
    }
    Task.push(task)
    res.send(Task)
})
//delete a specific task
router.get('/api/task/:id', (req, res) => {
    const taskId = req.params.id
    const task = Task.find(task => taskId === task.id)
    Task.splice(Task.indexOf(task), 1)
    res.send(Task)
})
//search for specific task
router.get('/api/task/:id', (req, res) => {
    const taskId = req.params.id
    res.json(Task.find(task => taskId === task.id))

})
//search for all tasks
router.get('/api/task', (req, res) => {
    res.json({ data: Task })
})

router.get('/', (req, res) => res.json({ data: Task }))
module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))
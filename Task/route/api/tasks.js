const express = require('express')
const router = express.Router()

const Tasks = [
    {
          id: 1
        , effort: 'Very Hard'
        , time: '1 Month'
        , commLvl: 'High'
        , expLvl: 'College graduate'
        , salary: 700
        , owner: 'Yahoo'
        , consultancy: 'Hamada'
        , skills: ['Java','JavaScript','Ruby','Python']
        , freelancer: 'Ahmed Mohamed'
    }
    ,{
          id: 2
        , effort: 'Intermerdiate'
        , time: '3 weeks'
        , commLvl: 'Low'
        , expLvl: 'Undergraduate'
        , salary: 500
        , owner: 'Swvl'
        , consultancy: 'Abdeen'
        , skills: ['Node', 'JavaScript', 'WebDev']
        , freelancer: 'Yasmeen Hamdy'
    }
    , {
          id: 3
        , effort: 'Easy'
        , time: '1 week'
        , commLvl: 'Low'
        , expLvl: 'Beginner'
        , salary: 350
        , owner: 'Sega'
        , consultancy: 'Belia'
        , skills: ['Java']
        , freelancer: 'Mohamed Lamei'
    }
]

router.get('/', (req, res) => res.json({ data: tasks }))

//get all tasks
app.get('/api/tasks', (req, res) => {
    res.send(Tasks)
})

//get a certain task
app.get('/api/tasks/:id',(req,res)=>{
const taskID = req.param.id
const t = Tasks.find(Tasks => Tasks.id == TaskID)
res.send(t)
})

// Create a task
app.post('/api/tasks/', (req, res) => {
    const effort = req.body.effort
    const time = req.body.time
    const commLvl = req.body.commLvl
    const expLvl = req.body.expLvl
    const salary = req.body.salary
    const owner = req.body.owner
    const consultancy = req.body.consultancy
    const skills = req.body.skills
    const freelancer = req.body.freelancer

    const Task = {
         id: Tasks.length + 1
        ,effort: effort
        ,time: time
        ,commLvl: commLvl
        ,expLvl: expLvl
        ,salary: salary
        ,owner: owner
        ,consultancy: consultancy
        ,skills: skills
        ,freelancer: freelancer
    }
    Tasks.push(Task)
    res.send(Tasks)
})


// Update a task's time
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedTime = req.body.time
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.time = updatedTime
    res.send(Tasks)
})

// Update a task's effort
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedEffort = req.body.effort
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.effort = updatedEffort
    res.send(Tasks)
})

// Update a task's commitment level
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedcommLvl = req.body.commLvl
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.effort = updatedcommLvl
    res.send(Tasks)
})

// Update a task's experiance level
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedexpLvl = req.body.expLvl
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.expLvl = updatedexpLvl
    res.send(Tasks)
})

// Update a task's salary
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedSalary = req.body.salary
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.salary = updatedSalary
    res.send(Tasks)
})


// Update a task's consultancy
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedConsultancy = req.body.consultancy
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.consultancy = updatedConsultancy
    res.send(Tasks)
})

// Update a task's skills
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedSkills = req.body.skills
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.skills = updatedSkills
    res.send(Tasks)
})

// Update a task's freelancer
app.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id
    const updatedFreelancer = req.body.freelancer
    const Task = Tasks.find(Task => Task.id === taskId)
    Task.freelancer = updatedFreelancer
    res.send(Tasks)
})

// Delete a task
app.delete('/api/books/:id', (req, res) => {
    const taskId = req.params.id
    const Task = Tasks.find(Tasks => Task.id === taskId)
    const index = Tasks.indexOf(Task)
    Tasks.splice(index, 1)
    res.send(Tasks)
})


module.exports = router
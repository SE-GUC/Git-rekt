const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Task = require("../../models/Task");
const validator = require("../../validations/taskValidations");

router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json({ data: tasks })
})

// Create a task
router.post('/api/task/', async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newTask = await Task.create(req.body);
    res.json({ msg: "Task was created successfully", data: newTask });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// Update a task
router.put("/api/task/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findOne({ id });
    if (!task) return res.status(404).send({ error: "Task does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const updatedTask = await Task.updateOne(req.body);
    res.json({ msg: "Task updated successfully" });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//delete a specific task
router.delete("/api/task/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndRemove(taskId);
    res.json({ msg: "Task was deleted successfully", data: deletedTask });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//search for specific task
router.get('/api/task/:id', (req,res) => {
    const taskId = req.params.id
    res.json(Task.find(task => taskId === task.id));
});

//search for all tasks
router.get('/api/task', (req, res) => {
    res.json({ data: Task })
})

//router.get('/', (req, res) => res.json({ data: Task }))
module.exports = router
// const port = process.env.PORT | 6969
// app.listen(port, () => console.log(`Server is up and running at port ${port}`))

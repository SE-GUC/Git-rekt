const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const Admin = require("../../models/Admin");
const adminValidator = require("../../validations/adminValidations");
const Task = require("../../models/Task");
const User = require("../../models/User");
const Consultancy = require("../../models/Consultancy");
const fetch = require("node-fetch");
const server = require("../../config/config");

//get all admins
router.get("/", async (req, res) => {
  const admins = await Admin.find();
  res.json({ data: admins });
});

//view task description
router.get("/:AdminEmail/viewTaskDesc/:TaskId", async (req, res) => {
  const admins = await Admin.findById({ AdminEmail });
  const adminTask = admins.uploaded_tasks;
  const newTask = await Task.findById({ TaskId });
  var flag = false;
  for (i = 0; i <= adminTask.size(); i++) {
    if (adminTask[i].id === newTask.id) {
      newTask = adminTasks[i].id;
      flag = true;
    }
  }
  if (!flag) return res.status(404).send({ error: "task does not exist" });
  return res.send({
    msg: "task description retrieved successfully",
    data: newTask.description
  });
});
//assign user to task
router.put("/:userId/assignUser/:id", async (req, res) => {
  const user = await User.findById({ userId });
  const task = await Task.findById({ id });
  //task.applicant_list.pull(user)
  task.assigned_users.push(user);
});
//assign consultancy to task
router.put("/:consultancyId/assingConsultancy/:id", async (req, res) => {
  const consultancy = await Consultancy.findById({ userId });
  const task = await Task.findById({ id });
  //task.applicant_list.pull(user)
  task.Assigned_Consultancy = consultancy;
});

router.get("/:email", async (req, res) => {
  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(404).json({ error: "admin does not exist" });
  res.json({ data: admin });
  //res.json({data: 'Admins working'}
});

router.post("/", async (req, res) => {
  try {
    const isValidated = adminValidator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const newAdmin = await Admin.create(req.body);
    res.json({ msg: "Admin was created successfully", data: newAdmin });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//update admin
router.put("/updateAdmin/:email", async (req, res) => {
  const isValid = adminValidator.updateValidation(req.body);
  if (isValid.error) {
    return res.status(400).send({ error: isValid.error.details[0].message });
  }
  const adminEmail = req.params.email;
  const admin = await Admin.findOne({ adminEmail });
  if (!admin) {
    return res.status(404).send({ error: "Admin does not exist" });
  }
  const updateAdmin = await Admin.updateOne(req.body);
  return res.json({ msg: "Admin updated successfully", data: updateAdmin });
});

//delete admin
router.delete("/deleteAdmin/:email", async (req, res) => {
  try {
    const adminEmail = req.params.Email;
    //const admin =  Admin.find(admin => adminId === admin.id)
    // const admin = await Admin.findOne({email})
    const deleteAdmin = await Admin.findOneAndRemove({ adminEmail });
    if (!deleteAdmin)
      return res.status(404).json({ error: "admin does not exist" });
    res.json({ msg: "Admin was deleted successfully", data: deleteAdmin });
  } catch (error) {
    console.log(error);
  }
});

//set task attributes
router.put("/setAttributes/:id", async (req, res) => {
    var j
    await fetch(`${server}/api/task/${req.params.id}`, {
    method: "put",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
});

//view consultant
router.get("/viewConsultant/:id", async(req,res)=>{
    var j
    await fetch(`${server}/api/consultancy/${req.params.id}`)
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
})

//upload tasks after negotiation step is over 
router.post("/uploadTask/", async (req, res) => {
    var j
    await fetch(`${server}/api/task/`, {
    method: "post",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
});


module.exports = router;

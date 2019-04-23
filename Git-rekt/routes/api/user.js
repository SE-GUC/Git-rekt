const express = require('express')
const router = express.Router()
const User = require('../../models/User')
const validator = require('../../validations/userValidations')
const fetch = require("node-fetch")
const server = require("../../config/config")
const Certificate = require("../../models/Certificate")

const jwt = require('jsonwebtoken')
const tokenKey = require('../../config/keys').secretOrKey

//Post in a user-method
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newUser = await User.create(req.body)
     res.json({msg:'User was created successfully', data: newUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//update a user
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const user = await User.findById(id)
     if(!user) return res.status(404).send({error: 'User does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedUser = await User.findByIdAndUpdate(id, req.body)
     res.json({msg: 'User updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 //delete a user
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedUser = await User.findByIdAndRemove(id)
     res.json({msg:'User was deleted successfully', data: deletedUser})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

//search for specific user
router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const foundUser = await User.findById(userId);
    res.json(foundUser);
});

//get all users
router.get('/', async (req,res) => {
    const users = await User.find()
    res.json({data: users})
})

//Search for Certificate
router.get("/searchCertificate/:id", async(req,res)=>{
    var j
    await fetch(`${server}/api/certificate/${req.params.id}`)
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
})

//apply for a certificate
router.post("/:userID/applyCertificate/:certificateID", async (req, res) => {
    const body = {"certificate": `${req.params.certificateID}`,
                  "applicant": `${req.params.userID}`,
                  "status": "awaiting admin approval"}
    var j
    await fetch(`${server}/api/certificateApplication/`, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
  const body1 = {"sent_to": "admin",
                   "notifies": `${req.params.userID}`+ " has applied for certificate of " + `${req.params.certificateID}`,
                   "sent_from": "Server",
                   "time":"421" };
    await fetch(`${server}/api/notification/`, {
        method: "post",
        body: JSON.stringify(body1),
        headers: { "Content-Type": "application/json" }
      })
    .then(res => res.json())
    .then(json => j = json)
    .catch(err => console.error(err))
    res.json(j)
});


//get certificate reccomendations
router.get('/getCertificateRecommendations', async (req,res) => {
    var i;
    var j;
    var k;
    var TaskArr;
    var reqSetOfSkills;
    var cerName;
    var Count;
    var cCountsArr = [{cerName:String,Count:Number}];
    var index;
    var tuple;
    var c;
    var reccomendations = [String];
 
     //const tasksapi = 'http://localhost:3000/api/task'
     //await fetch(tasksapi + '/', {
       //  method : 'get',
        // headers : {'Content-Type' : 'application/json'} 
    // })
     //.then(res => res.json)
     //.then(json => TaskArr = json)
     //.catch(err => console.error(err))
 
     //const tasks = await Task.find()
     //TaskArr = tasks;
 
 
     const Task = await
         fetch(`${server}/api/task/`)
             .then(res => res.json())
             .then(json => TaskArr = json)
             .catch(err => console.error(err))
 
     //Getting task array
     for (i = 0; i < TaskArr.length; i++) {
       //Getting the required set of skills for each task
         reqSetOfSkills = TaskArr[i].Required_set_of_skills
       for (j = 0; j < reqSetOfSkills.length; j++) {
         //Checking if that skill is already in the cCounts array
         if (cCountsArr.find(cerName == reqSetOfSkills[j]) !== null) {
           index = cCountsArr.findIndex(cerName == reqSetOfSkills[j]);
           tuple = cCountsArr[i];
           c = tuple.Count;
           c = c + 1;
           cCountsArr[i] = { cerName: tuple.cerName, Count: c };
         } else {
           cCountsArr.push({ cerName: reqSetOfSkills[j], Count: 1 });
         }
       }
     }
     //for (k = 0; k < cCountsArr.length; k++){
 
     //}
     cCountsArr.sort(function (first, second) {
 
         if (first.Count > second.Count) return -1;
         if (first.Count < second.Count) return 1;
 
     });
 
     reccomendations[0] = cCountsArr[0];
     reccomendations[1] = cCountsArr[1];
     reccomendations[2] = cCountsArr[2];
     res.json({ data: reccomendations });
 });

 //searching by email
 router.get('/searchMail/:email', async (req, res) => {
    const userEmail = req.params.id
    const foundUser = await User.findOne(userEmail);
    res.json(foundUser);
}); 

 //login user
 router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({email});
		if (!user) return res.status(404).json({ email: 'Email does not exist' });
		if (password === user.password) {
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email
            }
            const token = jwt.sign(payload, tokenKey, { expiresIn: '1h' })
            return res.json({token: `Bearer ${token}`})
        }
		else return res.status(400).send({ password: 'Wrong password' });
	} catch (e) {}
});

module.exports = router

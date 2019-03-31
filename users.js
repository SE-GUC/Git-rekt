// Import express
const express = require('express')
// Create the app
const app = express()
// Use it with post
app.use(express.json())

const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();


router.post('/joi', (req, res) => {
	const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    const github_portofolio = req.body.github_portofolio
    const contact_info = req.body.contact_info
    const updated_CV = req.body.updated_CV
    const registered_on = req.body.registered_on
    const signed = req.body.signed
    const rating = req.body.rating
    const notifications = req.body.notifications
    const certifications = req.body.certifications
    const id = req.body.id
      
	const schema = {
		name: Joi.string().min(3).required(),
        age: Joi.number().required(),
        email: Joi.string().email().required(),
        github_portofolio: Joi.string().min(3).required(),
        contact_info: Joi.number().required(),
        updated_CV: Joi.string().required(),
        registered_on: Joi.number().required(),
        signed: Joi.string().min(2).required(),
        rating:Joi.number().required(),
        notifications:Joi.string.required(),
        certifications:Joi.string.required(),
        id:Joi.number.required()
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newUser = {
		name,
        age,
        email,
        github_portofolio,
        contact_info,
        updated_CV,
        registered_on,
        signed,
        rating,
        notifications,
        certifications,
		id: uuid.v4(),
	};
	return res.json({ data: newUser });

})


router.get('/', (req, res) => res.json({ data: user }));


app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id 
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    const github_portofolio = req.body.github_portofolio
    const contact_info = req.body.contact_info
    const updated_CV = req.body.updated_CV
    const registered_on = req.body.registered_on
    const signed = req.body.signed
    const rating = req.body.rating
    const notifications = req.body.notifications
    const certifications = req.body.certifications
    const user = users.find(user => user.id === userId)
    res.send(users)
})


app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id 
    const name = req.body.name
    const age = req.body.age
    const email = req.body.email
    const github_portofolio = req.body.github_portofolio
    const contact_info = req.body.contact_info
    const updated_CV = req.body.updated_CV
    const registered_on = req.body.registered_on
    const signed = req.body.signed
    const rating = req.body.rating
    const notifications = req.body.notifications
    const certifications = req.body.certifications
    const user = users.find(user => user.id === userId)
    const index = users.indexOf(user)
    users.splice(index,1)
    res.send(users)
})






const port = process.env.PORT | 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
module.exports = router;

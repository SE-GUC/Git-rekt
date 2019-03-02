const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// We will be connecting using database 
const notification = require('../../models/notification')

// temporary data created as if it was pulled out of the database ...
let notifications = [
    new notification('Engy', 'nour' ,2, '11:59', 'Hey youuuu'),
    new notification('ali harb', 'joe momo', 5, '10:47','yallah SE'),
    new notification('yasmin hamdy', 'lamei baraka', 2, '3:55', 'shhhhh'),
    new notification('gogary', 'nour', 5, '4:00','entazroony, ana mesh gai'),
    new notification('nour', 'ali harb', 5,'10:00','i have a question!!'),
    new notification('ali harb', 'nour', 4, '10:05','ofc you do, etfdaly'),
    new notification('Engy', 'mekha', 2, '2:33','inta mostafez')
];

router.get('/', (req, res) => res.json({ data: notifications }))
// router.post('/', (req, res) => res.json({ data: notifications }))
// router.put('/', (req, res) => res.json({ data: notifications }))
router.delete('/', (req, res) => res.json({ data: notifications }))



router.post('/', (req, res) => {
	const sent_from = req.body.sent_from;
	const recieved_by  = req.body.recieved_by ;
    const importance_level  = req.body.importance_level;
    const sent_at = req.body.sent_at;
    const Message = req.body.Message;
    
	if (!sent_from) return res.status(400).send({ err: 'sent_from field is required' });
	if (typeof sent_from !== 'string') return res.status(400).send({ err: 'Invalid value for sent_from' });
	if (!recieved_by ) return res.status(400).send({ err: 'recieved_by  field is required' });
	if (typeof recieved_by  !== 'string') return res.status(400).send({ err: 'Invalid value for recieved_by ' });
    if (!importance_level ) return res.status(400).send({ err: 'recieved_by  field is required' });
	if (typeof importance_level  !== 'number') return res.status(400).send({ err: 'Invalid value for importance_level ' });
    if (!sent_at) return res.status(400).send({ err: 'sent_at field is required' });
	if (typeof sent_at !== 'string') return res.status(400).send({ err: 'Invalid value for sent_at' });
	if (!Message) return res.status(400).send({ err: 'Message field is required' });
	if (typeof Message !== 'string') return res.status(400).send({ err: 'Invalid value for Message' });
	const newnotification = {
		sent_from,
        recieved_by ,
        importance_level,
        sent_at,
		Message,
		id: uuid.v4(),
	};
	return res.json({ data: newnotification });
});

router.post('/joi', (req, res) => {
	const sent_from = req.body.sent_from
    const recieved_by  = req.body.recieved_by 
    const importance_level  = req.body.importance_level
    const sent_at = req.body.sent_at
	const Message = req.body.Message


	const schema = {
		sent_from: Joi.string().min(3).required(),
        recieved_by : Joi.string().min(3).required(),
        importance_level : Joi.number().required(),
        sent_at: Joi.string().min(3).required(),
		Message: Joi.string().min(3).required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });


    notifications.push(new notification(sent_from,
        recieved_by ,
        importance_level,
        sent_at,
		Message))
	return res.json({data: new notification});
});

router.put('/id', (req, res) => { 
    const id= req.params.id
   // const found=  notifications.findOne({id})
    //if(!found) return res.status(404).send({error: 'notification was not found in order to be updated'})
    const updated=  notification.updateOne(req.body)
    res.json({message: 'updated successfully'})
  
    })







module.exports = router

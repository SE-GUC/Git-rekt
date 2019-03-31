const funcs = require('./fn')
const Certificate = require("./models/Certificate")
const Consultancy = require("./models/Consultancy")
const axios = require('axios');


// Consultancies CRUD tests  
test(`get consultancy` , async () => {
    expect.assertions(1)
         const response =  await funcs.getConsultancy()
         expect(response.status).toEqual(200)
 });


 test(`post Consultancy` , async () => {
   const body = {
    "name": "ConsultH",
    "comRegNum": 17,
    "establishedSince": "2018-02-28T22:00:00.000Z",
    "field": "theFieldofMEr3nnnMES",
    "description": "mmmmInsettrnnntDescHereLOL",
    "email":"thismmmmmhemailnnhn@hotmail.com",
    "phoneNumber": "19532235235"
  }
   expect.assertions(2)
   const post = await funcs.createConsultancy(body)
   expect(post.status).toEqual(200)
   const cer = await axios.get(`http://localhost:3000/api/consultancy/${post.data.data._id}`) 
   expect(cer.data).toMatchObject(body)
   await axios.delete(`http://localhost:3000/api/consultancy/${post.data.data._id}`)
 });



 test(`put Consultancy` , async () => {
    const body = {
     "name": "ConsultH",
     "comRegNum": 17,
     "establishedSince": "2018-02-28T22:00:00.000Z",
     "field": "theFieldofMEr3nnnMES",
     "description": "mmmmInsettrnnntDescHereLOL",
     "email":"thismmmmmhemailnnhn@hotmail.com",
     "phoneNumber": "19234234234234234"
   }

   const body2 = {
    "phoneNumber": "202342342342234242"
   }
    
    const post = await funcs.createConsultancy(body)
    expect.assertions(2)
    expect(post.status).toEqual(200)
    const updated = await funcs.updateConsultancy(body2,post.data.data['_id'])
    expect(updated.status).toEqual(200)
    await axios.delete(`http://localhost:3000/api/consultancy/${post.data.data._id}`)
  });


test(`delete Consultancy` , async () => {
    const body = {
     "name": "ConsultH",
     "comRegNum": 17,
     "establishedSince": "2018-02-28T22:00:00.000Z",
     "field": "theFieldofMEr3nnnMES",
     "description": "mmmmInsettrnnntDescHereLOL",
     "email":"thismmmmmhemailnnhn@hotmail.com",
     "phoneNumber": "19432324324"
   }
    
    const post = await funcs.createConsultancy(body)
    expect.assertions(2)
    expect(post.status).toEqual(200)
    const deleted = await funcs.deleteConsultancy(post.data.data['_id']) 
    expect(deleted.status).toEqual(200)
    
  });


 


//     Admin Contacts Consultancy Test

test(`Admin Contacts Consultancy` , async () => {
    const body = {
     "name": "ConsultH",
     "comRegNum": 17,
     "establishedSince": "2018-02-28T22:00:00.000Z",
     "field": "theFieldofMEr3nnnMES",
     "description": "mmmmInsettrnnntDescHereLOL",
     "email":"thismmmmmhemailnnhn@hotmail.com",
     "phoneNumber": "19324234324"
   }
    expect.assertions(1)
    const consultancy = await axios.post(`http://localhost:3000/api/consultancy`,body)
    const created = await funcs.contactConsultancy(consultancy.data.data._id)
    expect(created.status).toEqual(200)
    await axios.delete(`http://localhost:3000/api/consultancy/${consultancy.data.data._id}`)
    
  });


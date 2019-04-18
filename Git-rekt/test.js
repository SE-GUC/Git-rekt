const funcs = require('./fn')
const axios = require('axios');

//CRUDS
//partner
//get all partner
test(`get partners` , async () => {
  expect.assertions(1)
       const response =  await funcs.getPartners()
       expect(response.status).toEqual(200)
});

//post a new partner
test(`post partner` , async () => {
 const body = {
  "name" : "alllie",
  "password" : "adsvaefeafdv",
  "email" : "sbeve@gmail.com" ,
  "contact_info" : "38446131643213548",
  "registered_on" : "2014-03-03",
  "com_reg_num" : 102,
  "info" : "studnet",
  "signed" : "false",
  "rating" : 4.2,
  "submitted_tasks" : ["gametask"],
  "notifications" : ["finsih sprint 3"],
  "associates" : ["lamei"],
  "board_members" : ["yasmeen"],
  "events" : ["jam session"],
  "feedback" : "satisfied"
}
 expect.assertions(2)
 const post = await funcs.createPartner(body)
 expect(post.status).toEqual(200)
 const cer = await axios.get(`http://localhost:3001/api/partner/${post.data.data['_id']}`) 
 expect(cer.data.data.submitted_tasks).toMatchObject(body.submitted_tasks)
 await axios.delete(`http://localhost:3001/api/partner/${post.data.data['_id']}`)
});

//update a partner by id
test(`put partner` , async () => {
  const body = {
    "name" : "alie",
    "password" : "adsvaefeafdv",
    "email" : "sbeve@gmail.com" ,
    "contact_info" : "384563546131643213548",
    "registered_on" : "2014-02-03T22:00:00.000Z",
    "com_reg_num" : 102,
    "info" : "studnet",
    "signed" : "false",
    "rating" : 4.2,
    "submitted_tasks" : ["gametask"],
    "notifications" : ["finsih sprint 3"],
    "associates" : ["lamei"],
    "board_members" : ["yasmeen"],
    "events" : ["jam session"],
    "feedback" : "satisfied"
}
  const body2 = {
      "com_reg_num" : 120
  } 
  const created = await funcs.createPartner(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const updated = await funcs.updatePartner(body2,created.data.data['_id'])
  const updatedPartner = await funcs.getPartner(created.data.data['_id'])
  expect(updatedPartner.data.data.com_reg_num).toEqual(body2.com_reg_num)
  await axios.delete(`http://localhost:3001/api/partner/${created.data.data['_id']}`)
});

//delete a partner by id
test(`delete partner` , async () => {
  const body = {
      "name" : "addlie",
      "password" : "adsvasdsaasevefeafdv",
      "email" : "sbeve@gmail.com" ,
      "contact_info" : "38446131643213548",
      "registered_on" : "2014-02-03T22:00:00.000Z",
      "com_reg_num" : 102,
      "info" : "studnet",
      "signed" : "false",
      "rating" : 4.2,
      "submitted_tasks" : ["gametask"],
      "notifications" : ["finsih sprint 3"],
      "associates" : ["lamei"],
      "board_members" : ["yasmeen"],
      "events" : ["jam session"],
      "feedback" : "satisfied"
  }
  const post = await funcs.createPartner(body)
  expect.assertions(2)
  expect(post.status).toEqual(200)
  const deleted = await funcs.deletePartner(post.data.data['_id']) 
  expect(deleted.status).toEqual(200)
  
});

//Certificate
test('Get certificate', async () => {
  expect.assertions(1)
  const response =  await funcs.getCertificates()
  expect(response.status).toEqual(200)
});

test('Post certificate', async () => {
  const body = {
    "title":  "Test Certificate (Ali)",
    "description": "Test.jpeg",
    "prerequisites":  ["testgl"],
    "issuedBy": "Ali44",
    "type": "Offline1"
  }
  expect.assertions(2)
  const created = await funcs.postCertificate(body)
  expect(created.status).toEqual(200)
  const cer = await axios.get(`http://localhost:3001/api/certificate/${created.data.data['_id']}`) 
  expect(cer.data).toMatchObject(body)
  await axios.delete(`http://localhost:3001/api/certificate/${created.data.data['_id']}`)
});

test('Put certificate', async () => {
  const body = {
    "title":  "Test Certificate Ali",
    "description": "zis tests",
    "prerequisites":  ["test.png"],
    "issuedBy": "Ali34",
    "type": "Offline2"
  }
  const body2 = {
    "type": "Online3"
  }
  const created = await funcs.postCertificate(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const updated = await funcs.putCertificate(body2,created.data.data['_id'])
  expect(updated.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/certificate/${created.data.data['_id']}`)
});

test('Delete certificate', async () => {
  const body = {
    "title":  "Test certificate 38",
    "description": "tests whatever",
    "prerequisites":  ["test78"],
    "issuedBy": "AliHarb",
    "type": "Offline6"
  }
  const created = await funcs.postCertificate(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const deleted = await funcs.deleteCertificate(created.data.data['_id'])
  expect(deleted.status).toEqual(200)
});

//Certificate application
test('Get certificate application', async () => {
  expect.assertions(1)
  const response =  await funcs.getCertificateApplication()
  expect(response.status).toEqual(200)
});

test('Post certificate application', async () => {
  const body = {
    "certificate": "Javalp",
    "applicant": "Abdelrahmanrf",
    "status": "mesh approved awi ya3ni"
  }
  expect.assertions(2)
  const created = await funcs.postCertificateApplication(body)
  expect(created.status).toEqual(200)
  const cer = await axios.get(`http://localhost:3001/api/certificateApplication/${created.data.data['_id']}`) 
  expect(cer.data).toMatchObject(body)
  await axios.delete(`http://localhost:3001/api/certificateApplication/${created.data.data['_id']}`)
  
});

test('Put certificate application', async () => {
  const body = {
    "certificate": "Java2387",
    "applicant": "Abdelrahman617",
    "status": "mesh approved 5ales ba2a"
  }
  const body2 = {
    "status": "approved55"
  }
  const created = await funcs.postCertificateApplication(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const updated = await funcs.putCertificateApplication(body2,created.data.data['_id'])
  expect(updated.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/certificateApplication/${created.data.data['_id']}`)
  
});

test('Delete certificate applications', async () => {
  const body = {
    "certificate": "Pythonefw",
    "applicant": "Mohamedein",
    "status": "mesh approved awi y3ni"
  }
  const created = await funcs.postCertificateApplication(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const deleted = await funcs.deleteCertificateApplication(created.data.data['_id'])
  expect(deleted.status).toEqual(200)
});

//Notiifcation
test('Get Notification', async () => {
  expect.assertions(1)
  const response =  await funcs.getNotification()
  expect(response.status).toEqual(200)
});

test('Post Notification', async () => {
  const body = {
    "sent_to": "yallatestkoko",
    "notifies": "kokoTestyalla",
    "sent_from": "yallakokoMaten7sh",
    "time": 300
  }
  expect.assertions(2)
  const created = await funcs.postNotification(body)
  expect(created.status).toEqual(200)
  const not = await axios.get(`http://localhost:3001/api/notification/${created.data.data['_id']}`) 
  expect(not.data).toMatchObject(body)
  await axios.delete(`http://localhost:3001/api/notification/${created.data.data['_id']}`)
});

test('Put Notification', async () => {
  const body = {
    "sent_to": "yallatestkoko",
    "notifies": "kokoTestyalla",
    "sent_from": "yallakokoMaten7sh",
    "time": 300
  }
  const body2 = {
    "time": 400
  }
  const created = await funcs.postNotification(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const updated = await funcs.putNotification(body2,created.data.data['_id'])
  expect(updated.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/notification/${created.data.data['_id']}`)
});

test('Delete notifcation', async () => {
  const body = {
    "sent_to": "yallatestkoko",
    "notifies": "kokoTestyalla",
    "sent_from": "yallakokoMaten7sh",
    "time": 300
  }
  const created = await funcs.postNotification(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const deleted = await funcs.deleteNotification(created.data.data['_id'])
  expect(deleted.status).toEqual(200)
});

//Application
test('Get Application', async () => {
  expect.assertions(1)
  const response =  await funcs.getApplication()
  expect(response.status).toEqual(200)
});

test('Post Application', async () => {
  const body = {
    "user": "Someone",
    "task": "Balabizo",
    "description": "firmware",
    "date": "2018-02-28T22:00:00.000Z"
  }
  expect.assertions(2)
  const created = await funcs.postApplication(body)
  expect(created.status).toEqual(200)
  const not = await axios.get(`http://localhost:3001/api/application/${created.data.data['_id']}`) 
  expect(not.data.user).toEqual(body.user)
  await axios.delete(`http://localhost:3001/api/application/${created.data.data['_id']}`)
});

test('Put Application', async () => {
  const body = {
    "user": "Someone",
    "task": "Balabizo",
    "description": "firmware",
    "date": "2018-02-28T22:00:00.000Z"
  }
  const body2 = {
    "user": "Someone else"
  }
  const created = await funcs.postApplication(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const updated = await funcs.putApplication(body2,created.data.data['_id'])
  expect(updated.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/application/${created.data.data['_id']}`)
});

test('Delete Application', async () => {
  const body = {
    "user": "Someone",
    "task": "Balabizo",
    "description": "firmware",
    "date": "2018-02-28T22:00:00.000Z"
  }
  const created = await funcs.postApplication(body)
  expect.assertions(2)
  expect(created.status).toEqual(200)
  const deleted = await funcs.deleteApplication(created.data.data['_id'])
  expect(deleted.status).toEqual(200)
});

//task
test('create a task', async () => {
  body ={
    "approved_by": "approvingPerson1",
    "description": "description1",
    "posted_on": "2014-02-03T22:00:00.000Z",
    "posted_by": "postingPerson1",
    "status": "pending_completion",
    "Estimated_effort": "Hard1",
    "Time_taken": "Hours1",
    "Level_of_commitment": "very1",
    "Experience_level": "intermediate1",
    "Monetary_compensation": 1337,
    "Owner": "owner1",
    "Assigned_Consultancy": "consultant1",
    "reviewed": true
  }
  expect.assertions(1)
  //const task = await axios.post("http://localhost:3001/api/task",body)
  const response =  await funcs.createTask(body)
  expect(response.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/task/${response.data.data['_id']}`)
});

test('delete a task', async () => {
  body ={
    "approved_by": "approvingPerson1",
    "description": "description1",
    "posted_on": "2014-02-03T22:00:00.000Z",
    "posted_by": "postingPerson1",
    "status": "pending_completion",
    "Estimated_effort": "Hard1",
    "Time_taken": "Hours1",
    "Level_of_commitment": "very1",
    "Experience_level": "intermediate1",
    "Monetary_compensation": 1337,
    "Owner": "owner1",
    "Assigned_Consultancy": "consultant1",
    "reviewed": true
  }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3001/api/task",body)
  const deletedTask = await funcs.deleteTask(task.data.data['_id'])
  expect(deletedTask.status).toEqual(200)
});

test('update a task', async () => {
  body ={
    "approved_by": "approvingPerson1",
    "description": "description1",
    "posted_on": "2014-02-03T22:00:00.000Z",
    "posted_by": "postingPerson1",
    "status": "pending_completion",
    "Estimated_effort": "Hard1",
    "Time_taken": "Hours1",
    "Level_of_commitment": "very1",
    "Experience_level": "intermediate1",
    "Monetary_compensation": 1337,
    "Owner": "owner1",
    "Assigned_Consultancy": "consultant1",
    "reviewed": true
  }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3001/api/task",body)
  // const updatedTask = await axios.put(`http://localhost:3001/api/task/${task.data.data._id}`,{"reviewed": false})
  const updatedTask = await funcs.updateTask({"reviewed": false}, task.data.data['_id'])
  expect(updatedTask.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/task/${task.data.data['_id']}`)
});

test('get a task', async () => {
  body ={
    "approved_by": "approvingPerson1",
    "description": "description1",
    "posted_on": "2014-02-03T22:00:00.000Z",
    "posted_by": "postingPerson1",
    "status": "pending_completion",
    "Estimated_effort": "Hard1",
    "Time_taken": "Hours1",
    "Level_of_commitment": "very1",
    "Experience_level": "intermediate1",
    "Monetary_compensation": 1337,
    "Owner": "owner1",
    "Assigned_Consultancy": "consultant1",
    "reviewed": true
  }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3001/api/task",body)
  //const getTask = await axios.put(`http://localhost:3001/api/task/${task.data.data._id}`)
  const getTask = await funcs.getTask(task.data.data['_id'])
  expect(getTask.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/task/${task.data.data['_id']}`)
});

//consultancy
test(`get consultancy` , async () => {
  const body = {
    "name": "ConsultH",
    "comRegNum": 17,
    "establishedSince": "2018-02-28T22:00:00.000Z",
    "field": "theFieldofMEr3nnnMES",
    "description": "mmmmInsettrnnntDescHereLOL",
    "email":"thismmmmmhemailnnhn@hotmail.com",
    "phoneNumber": "19532235235"
  }
  expect.assertions(1)
  const consultancy = await axios.post("http://localhost:3001/api/consultancy", body)
  const getConsultancy = await funcs.getConsultancy(consultancy.data.data['_id'])
  expect(getConsultancy.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/consultancy/${consultancy.data.data['_id']}`)
});

test(`post Consultancy` , async () => {
  const body = {
    "name": "ConsultH1",
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
  const cer = await axios.get(`http://localhost:3001/api/consultancy/${post.data.data['_id']}`) 
  expect(cer.data.data.name).toEqual(body.name)
  await axios.delete(`http://localhost:3001/api/consultancy/${post.data.data['_id']}`)
});

test(`put Consultancy` , async () => {
  const body = {
    "name": "ConsultH2",
    "comRegNum": 17,
    "establishedSince": "2018-02-28T22:00:00.000Z",
    "field": "theFieldofMEr3nnnMES",
    "description": "mmmmInsettrnnntDescHereLOL",
    "email":"thismmmmmhemailnnhn@hotmail.com",
    "phoneNumber": "19532235235"
  }
  
  const body2 = {
    "phoneNumber": "19532235635"
  }
  
  const post = await funcs.createConsultancy(body)
  expect.assertions(2)
  expect(post.status).toEqual(200)
  const updated = await funcs.updateConsultancy(body2, post.data.data['_id'])
  const updatedConsultancy = await funcs.getConsultancy(post.data.data['_id'])
  expect(updatedConsultancy.data.data.phoneNumber).toEqual(body2.phoneNumber)
  await axios.delete(`http://localhost:3001/api/consultancy/${post.data.data['_id']}`)
});

test(`delete Consultancy` , async () => {
  const body = {
    "name": "ConsultH3",
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

//User stories

//admin
//setTaskAttributes
test('Set Task Attributes', async () => {
  body ={
    "approved_by": "approvingPerson1",
    "description": "description1",
    "posted_on": "2014-02-03T22:00:00.000Z",
    "posted_by": "postingPerson1",
    "status": "pending_completion",
    "Estimated_effort": "Hard1",
    "Time_taken": "Hours1",
    "Level_of_commitment": "very1",
    "Experience_level": "intermediate1",
    "Monetary_compensation": 1337,
    "Owner": "owner1",
    "Assigned_Consultancy": "consultant1",
    "reviewed": true
  }
  expect.assertions(1)
  const task = await axios.post("http://localhost:3001/api/task",body)
  const response =  await funcs.setTaskAttributes({"reviewed":"false"},task.data.data['_id'])
  expect(response.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/task/${task.data.data['_id']}`)
});

//viewConsultancy
test('viewConsultant', async () => {
  body = {
    "name": "consultancy1",
    "comRegNum": 1234,
    "establishedSince": "1037-12-31T22:01:00.000Z",
    "field": "engineering",
    "description": "description",
    "email": "jestmail@email.com",
    "phoneNumber": "12345"
  }
  expect.assertions(1)
  const consultancy = await axios.post("http://localhost:3001/api/consultancy", body)
  const response =  await funcs.viewConsultant(consultancy.data.data['_id'])
  expect(response.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/consultancy/${consultancy.data.data['_id']}`)
});

//get user's contact info
test('get a user contact info', async () => {
  body ={
    "name": "personsname",
    "age": 19,
    "email": "test@test.com",
    "password": "testpassword",
    "githubPortofolio": ["test1","test2"],
    "contactInfo" : 1234,
    "updatedCV": ["test1","test2"],
    "registeredOn": 1234,
    "signed": false,
    "rating": 5,
    "notifications": ["test1","test2"],
    "certifications": ["test1","test2"]
  }
  expect.assertions(1)
  const user = await axios.post("http://localhost:3001/api/user", body)
  const getUser = await funcs.viewUserContactInfo(user.data.data['_id'])
  expect(getUser.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/user/${user.data.data['_id']}`)
});

// //get user's profile
test('get a user profile', async () => {
  body = {
    "name": "personsname",
    "age": 19,
    "email": "test@test.com",
    "password": "testpassword",
    "githubPortofolio": ["test1","test2"],
    "contactInfo" : 1234,
    "updatedCV": ["test1","test2"],
    "registeredOn": 1234,
    "signed": false,
    "rating": 5,
    "notifications": ["test1","test2"],
    "certifications": ["test1","test2"]
  }
  expect.assertions(1)
  const user = await axios.post("http://localhost:3001/api/user", body)
  const getUser = await funcs.viewUser(user.data.data['_id'])
  expect(getUser.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/user/${user.data.data['_id']}`)
});

// //Admin Contacts Consultancy Test
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
  const consultancy = await axios.post(`http://localhost:3001/api/consultancy`, body)
  const created = await funcs.contactConsultancy(consultancy.data.data['_id'])
  expect(created.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/consultancy/${consultancy.data.data['_id']}`)
});

//contact a partner
test(`contact a partner`, async () => {
  const adminContact = {
    "name" : "sbeveeeee",
    "email" : "testadmin@test.com",
    "password" : "testPssowrd",
    "uploaded_tasks" : ["gameTask"],
    "notifications" : ["review task"]
  }
  const createdAdmin = await axios.post(`http://localhost:3001/api/admin`, adminContact)
  const partnerContact = {
    "name" : "leonard",
    "password" : "adsvaefeafdv",
    "email" : "sheldon@gmail.com" ,
    "contact_info" : "384563546131643213548",
    "registered_on" : "2014-02-03T22:00:00.000Z",
    "com_reg_num" : 102,
    "info" : "studnet",
    "signed" : "false",
    "rating" : 4.2,
    "submitted_tasks" : ["gametask"],
    "notifications" : ["finsih sprint 3"],
    "associates" : ["lamei"],
    "board_members" : ["yasmeen"],
    "events" : ["jam session"],
    "feedback" : "satisfied"
  }
  const createdPartner = await funcs.createPartner(partnerContact)
  const task = {
    "approved_by": "simpleton",
    "description": "particle accelerator",
    "posted_on": "2014-02-03T22:00:00.000Z",
    "posted_by": `${createdPartner.data.data['_id']}`,
    "status": "pending_completion",
    "Estimated_effort": "Hard1",
    "Time_taken": "Hours1",
    "Level_of_commitment": "very1",
    "Experience_level": "intermediate1",
    "Monetary_compensation": 1337,
    "Owner": `${createdPartner.data.data['_id']}`,
    "Assigned_Consultancy": "consultant1",
    "reviewed": true
  }
  const createdTask = await funcs.createTask(task)
  expect.assertions(2)
  const contactInfo = await funcs.contactPartner(createdTask.data.data['_id'], createdAdmin.data.data['_id'])
  const compareInfo = {
    "email" : createdPartner.data.data.email,
    "contact_info" : createdPartner.data.data.contact_info 
  }
  expect(contactInfo.status).toEqual(200)
  expect(contactInfo.data.data).toMatchObject(compareInfo)
  await axios.delete(`http://localhost:3001/api/task/${createdTask.data.data['_id']}`)
  await axios.delete(`http://localhost:3001/api/admin/${createdAdmin.data.data['_id']}`)
  await axios.delete(`http://localhost:3001/api/partner/${createdPartner.data.data['_id']}`)
})

// //User 
// //evaluated by an admin
test('Undergo Evaluation Process', async () => {
  const body = {
    "name": "Betengana",
    "age": 22,
    "email": "test@test.com.comtani",
    "password": "betengana bardo",
    "githubPortofolio": ["Array of stringz"],
    "contactInfo": 7775002,
    "updatedCV": ["Whateverr"],
    "registeredOn": 71,
    "signed": false,
    "rating": 22,
    "notifications": ["w maloh"],
    "certifications": ["gagwag"]
  }
  const body2 = {
    "title":  "certificatesz",
    "description": "s...it",
    "prerequisites":  ["testlk"],
    "issuedBy": "Alivfds",
    "type": "Online7"
  }
  expect.assertions(1)
  const user = await axios.post(`http://localhost:3001/api/user`,body)
  const certificate = await axios.post(`http://localhost:3001/api/certificate`,body2)  
  const created = await funcs.applyForCertificate(user.data.data['_id'],certificate.data.data['_id'])
  expect(created.status).toEqual(200)
  await axios.delete(`http://localhost:3001/api/user/${user.data.data['_id']}`)
  await axios.delete(`http://localhost:3001/api/certificate/${certificate.data.data['_id']}`)
  //await axios.delete(`http://localhost:3001/api/certificate/${created.data.data._id}`)
});

//partner
//submit a task



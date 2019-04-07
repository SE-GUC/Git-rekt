const funcs = require('./fn')
const Certificate = require("./models/Certificate")
const axios = require('axios');
//Abuelleils Tests 
test(`Admin name should be youssef123`, async () => {
    const newAdmin = {
        name:'youssef123',
        email:'habdology@gmail.com',
        password:'leihyadonyamshsaybanaabreya2'
    }
    expect.assertions(2)
    const createdAdmin = await axios.post(`http://localhost:3000/api/admin/createAdmin`,newAdmin)
    console.log(`----------------------------`+admin)
    expect(createdAdmin.status).toEqual(200)
    expect(createdAdmin.data.data.name).toEqual('youssef123')
    await funcs.deleteAdmin(createdAdmin.data.data._id)
});
test(`Admin name should be youssef321`, async () => {
    const newAdmin = {
        name:'youssef123',
        email:'habdology@gmail.com',
        password:'leihyadonyamshsaybanaabreya2'
    }
    const updatedAdmin = {
        name:'youssef321',
        email:'habdology@gmail.com'
    }
    expect.assertions(2)
    const createdAdmin = await funcs.createAdmin(newAdmin)
    const update =  await funcs.updateAdmin(createdAdmin.data.data._id,updatedAdmin)
    expect(update.status).toEqual(200)
    expect(update.data.data.name).toEqual('youssef321')
    await funcs.deleteAdmin(update.data.data._id)
});
test(`Admin Name should be youssef456`, async () => {
    const getAdmin = {
        name:'youssef',
        email:'habdology@gmail.com',
        password:'leihyadonyamshsaybanaabreya2'
    }
    expect.assertions(2)
    const admin = await funcs.createAdmin(getAdmin)
    const user =  await funcs.getAdmin(admin.data.data._id)
    expect(user.status).toEqual(200)
    expect(user.data.data.name).toEqual('youssef')
    await funcs.deleteAdmin(user.data.data._id)
});
test(`Admin should be deleted`, async () => {
    const data = {
        name: 'ahmed',
        email: 'ahmed@hotmail.com',
        password: '123456'
    }
    expect.assertions(2)
    const created = await funcs.createAdmin(data)
    const deleted = await funcs.deleteAdmin(created.data.data._id)
    const deletedData = deleted.data.deleteAdmin
    expect(created.data.data).toMatchObject(deleted.data.data)
    //expect(createdData).toEqual(deletedData)
});
test(`Admin should be deleted`, async () => { //two seperate methods of testing for a delete were used 
    const data = {
        name: 'ahmed',
        email: 'ahmed@hotmail.com',
        password: '123456'
    }
    const created = await funcs.createAdmin(data)
    const createdData = created.data.data
    const id = createdData['_id']
    const deleted = await funcs.deleteAdmin(id)
    const deletedData = deleted.data.deleteAdmin
    expect.hasAssertions()
    expect(createdData).toEqual(deletedData)
});
// test(`Consultancy applies for task`, async () => { 
//     const  Consultancy = {
//         name:'hamdyCo',
//         comRegNum:'1651515',
//         establishedSince:'1919/3/1',
//         field:'habd',
//         description:'habida kobar awi',
//         email:'lokshethabida@gmail.com',
//         phoneNumber:'0101111002',
//     }
//     const Task = {
//         approved_by:'youssef',
//         description:'3ashwa2a',
//         posted_on:'1/1/2012',
//         posted_by:'malnash da3wa',
//         Estimated_effort:'3olo2eya level',
//         Time_taken:'youmein kda',
//         Level_of_commitment:'commitment issues',
//         Experience_level:'tal3b 3el2',
//         Monetary_compensation:555555,
//         Owner:'mohsen el sabak',
//         Assigned_Consultancy: '',
//         reviewed:true,
//         Required_set_of_skills:['java','C'],
//         task_list:['sprint 1','sprint 2'],
//         applicant_list:[],
//         assigned_users:[],
//     }
    
//     const task = await funcs.createTask(Task)
//     const consultancy = await funcs.createConsultancy(Consultancy)
//     const app = await funcs.consultancyApply(consultancy.data.data.email,task.data.data._id)
//     expect.assertions(3)
//     expect(app.status).toEqual(200)
//     expect(app.data.data.user).toEqual(consulatncy.data.data.email)
//     expect(app.data.data.task).toEqual(task.data.data._id)
//     // const created = await funcs.createAdmin(data)
//     // const createdData = created.data.data
//     // const id = createdData['_id']
//     // const deleted = await funcs.deleteAdmin(id)
//     // const deletedData = deleted.data.deleteAdmin
//     await funcs.deleteAdmin(admin.data.data._id)
//     await funcs.deleteTask(task.data.data._id)
//     await funcs.deleteConsultancy(consultancy.data.data._id)
//     await funcs.deleteApplication(app.data.data._id)
// });
// test(`assignUser to task`, async () => { //two seperate methods of testing for a delete were used 
//     const User = {
//         name:'ahmed',
//         age: 25,
//         email:'ahmed@gmail.com',
//         password:'magdyshata',
//         githubPortofolio:['habdahabda'],
//         contactInfo:4544454121,
//         updatedCV:['habid ad el denya'],
//         registeredOn:556552,
//         signed:true,
//         rating:4.5,
//         notifications:[],
//         certifications:[]
//     }
//     const Task = {
//         approved_by:'youssef',
//         description:'3ashwa2a',
//         posted_on:'1/1/2012',
//         posted_by:'malnash da3wa',
//         Estimated_effort:'3olo2eya level',
//         Time_taken:'youmein kda',
//         Level_of_commitment:'commitment issues',
//         Experience_level:'tal3b 3el2',
//         Monetary_compensation:555555,
//         Owner:'mohsen el sabak',
//         Assigned_Consultancy: '',
//         reviewed:true,
//         Required_set_of_skills:['java','C'],
//         task_list:['sprint 1','sprint 2'],
//         applicant_list:[],
//         assigned_users:[],
//     } 
//     const user = await funcs.createUser(User)
//     const task = await funcs.createTask(Task)
//     const taskUpdated = await funcs.assignUser(user.data.data._id,task.data.data._id)
//     expect.assertions(3)
//     expect(taskUpdated.status).toEqual(200)
//     expect(taskUploaded.data.data.applicant_list).toContain(user.data.data._id)
//     await funcs.deleteUser(user.data.data._id)
//     await funcs.deleteTask(task.data.data._id)
// });
// test(`reject user`, async () => { //two seperate methods of testing for a delete were used 
//     const usert = {
//         name:'ahmed',
//         age: 25,
//         email:'ahmed@gmail.com',
//         password:'magdyshata',
//         githubPortofolio:['habdahabda'],
//         contactInfo:4544454121,
//         updatedCV:['habid ad el denya'],
//         registeredOn:556552,
//         signed:true,
//         rating:4.5,
//         notifications:[],
//         certifications:[]
//     }
//     const Task = {
//         approved_by:'youssef',
//         description:'3ashwa2a',
//         posted_on:'1/1/2012',
//         posted_by:'malnash da3wa',
//         Estimated_effort:'3olo2eya level',
//         Time_taken:'youmein kda',
//         Level_of_commitment:'commitment issues',
//         Experience_level:'tal3b 3el2',
//         Monetary_compensation:555555,
//         Owner:'mohsen el sabak',
//         Assigned_Consultancy: '',
//         reviewed:true,
//         Required_set_of_skills:['java','C'],
//         task_list:['sprint 1','sprint 2'],
//         applicant_list:[],
//         assigned_users:[],
//     }
//     const user = await funcs.createUser(usert)
//     const task = await funcs.createTask(Task)
//     const taskUpdated = await funcs.rejectUser(user.data.data._id,task.data.data._id)
//     expect.assertions(3)
//     expect(taskUpdated.status).toEqual(200)
//     expect(taskUploaded.assigned_users).not.toContain(user.data.data._id)
//     expect(taskUploaded.data.data.app).not.toContain(user.data.data._id)
//     await funcs.deleteUser(user.data.data._id)
//     await funcs.deleteTask(task.data.data._id)
// });
// test(`assignConsultancy to task`, async () => { //two seperate methods of testing for a delete were used 
//     const  Consultancy = {
//         name:'hamdyCo',
//         comRegNum:'1651515',
//         establishedSince:'1919/3/1',
//         field:'habd',
//         description:'habida kobar awi',
//         email:'lokshethabida@gmail.com',
//         phoneNumber:'0101111002',
//     }
//     const Task = {
//         approved_by:'youssef',
//         description:'3ashwa2a',
//         posted_on:'1/1/2012',
//         posted_by:'malnash da3wa',
//         Estimated_effort:'3olo2eya level',
//         Time_taken:'youmein kda',
//         Level_of_commitment:'commitment issues',
//         Experience_level:'tal3b 3el2',
//         Monetary_compensation:555555,
//         Owner:'mohsen el sabak',
//         Assigned_Consultancy: '',
//         reviewed:true,
//         Required_set_of_skills:['java','C'],
//         task_list:['sprint 1','sprint 2'],
//         applicant_list:[],
//         assigned_users:[],
//     }
//     const consultancy = await funcs.createConsultancy(Consultancy)
//     const task = await funcs.createTask(Task)
//     const taskUpdated = await funcs.assignConsultancy(user.data.data._id,task.data.data._id)
//     expect.assertions(2)
//     expect(taskUpdated.status).toEqual(200)
//     expect(taskUploaded.data.data.Assigned_Consultancy.name).toEqual(consultancy.data.data.name)
//     await funcs.deleteConsultancy(consultancy.data.data._id)
//     await funcs.deleteTask(task.data.data._id)
// });
// test(`assignUser to task`, async () => { //two seperate methods of testing for a delete were used 
//     const User = {
//         name:'ahmed',
//         age: 25,
//         email:'ahmed@gmail.com',
//         password:'magdyshata',
//         githubPortofolio:['habdahabda'],
//         contactInfo:4544454121,
//         updatedCV:['habid ad el denya'],
//         registeredOn:556552,
//         signed:true,
//         rating:4.5,
//         notifications:[],
//         certifications:[]
//     }
//     const Task = {
//         approved_by:'youssef',
//         description:'3ashwa2a',
//         posted_on:'1/1/2012',
//         posted_by:'malnash da3wa',
//         Estimated_effort:'3olo2eya level',
//         Time_taken:'youmein kda',
//         Level_of_commitment:'commitment issues',
//         Experience_level:'tal3b 3el2',
//         Monetary_compensation:555555,
//         Owner:'mohsen el sabak',
//         Assigned_Consultancy: '',
//         reviewed:true,
//         Required_set_of_skills:['java','C'],
//         task_list:['sprint 1','sprint 2'],
//         applicant_list:[],
//         assigned_users:[],
//     } 
//     const user = await funcs.createUser(User)
//     const task = await funcs.createTask(Task)
//     const taskUpdated = await funcs.assignUser(user.data.data._id,task.data.data._id)
//     expect.assertions(3)
//     expect(taskUpdated.status).toEqual(200)
//     expect(taskUploaded.data.data.applicant_list).toContain(user.data.data._id)
//     await funcs.deleteUser(user.data.data._id)
//     await funcs.deleteTask(task.data.data._id)
// });
// test(`user browse vacancies`, async () => { //two seperate methods of testing for a delete were used 
//     const usert = {
//         name:'ahmed',
//         age: 25,
//         email:'ahmed@gmail.com',
//         password:'magdyshata',
//         githubPortofolio:['habdahabda'],
//         contactInfo:4544454121,
//         updatedCV:['habid ad el denya'],
//         registeredOn:556552,
//         signed:true,
//         rating:4.5,
//         notifications:[],
//         certifications:['java','C']
//     }
//     const Task1 = {
//         approved_by:'youssef',
//         description:'3ashwa2a',
//         posted_on:'1/1/2012',
//         posted_by:'malnash da3wa',
//         Estimated_effort:'3olo2eya level',
//         Time_taken:'youmein kda',
//         Level_of_commitment:'commitment issues',
//         Experience_level:'tal3b 3el2',
//         Monetary_compensation:555555,
//         Owner:'mohsen el sabak',
//         Assigned_Consultancy: '',
//         reviewed:true,
//         Required_set_of_skills:['java','C'],
//         task_list:['sprint 1','sprint 2'],
//         applicant_list:[],
//         assigned_users:[],
//     }
//     const Task2 = {
//         approved_by:'youssef',
//         description:'3ashwa2a',
//         posted_on:'1/1/2012',
//         posted_by:'malnash da3wa',
//         Estimated_effort:'3olo2eya level',
//         Time_taken:'youmein kda',
//         Level_of_commitment:'commitment issues',
//         Experience_level:'tal3b 3el2',
//         Monetary_compensation:555555,
//         Owner:'mohsen el sabak',
//         Assigned_Consultancy: '',
//         reviewed:true,
//         Required_set_of_skills:['java','C','Bootstrap'],
//         task_list:['sprint 1','sprint 2'],
//         applicant_list:[],
//         assigned_users:[],
//     }
//     const user = await funcs.createUser(usert)
//     const task1 = await funcs.createTask(Task1)
//     const task2 = await funcs.createTask(Task2)
//     const taskAvaliable = await funcs.userBrowseVacancy(user.data.data._id)
//     expect.assertions(3)
//     expect(taskAvaliable.status).toEqual(200)
//     expect(taskAvaliable.data.data.avaliableTasks).toContain(task1.data.data._id)
//     expect(taskAvaliable.data.data.avaliableTasks).not.toContain(task2.data.data._id)
//     await funcs.deleteUser(user.data.data._id)
//     await funcs.deleteTask(task1.data.data._id)
//     await funcs.deleteTask(task2.data.data._id)

// });

//Harbs Tests
test('Get certificate', async () => {
    expect.assertions(1)
    const response =  await funcs.getCertificates()
    expect(response.status).toEqual(200)
  });

  test('Post certificate', async () => {
    const body = {
        "title":  "Test Certificate23",
        "description": "sed for testin",
        "prerequisites":  ["test"],
        "issuedBy": "Ali",
        "type": "Offline"
    }
    expect.assertions(2)
    const created = await funcs.postCertificate(body)
    expect(created.status).toEqual(200)
    const cer = await axios.get(`http://localhost:3000/api/certificate/${created.data.data._id}`) 
    expect(cer.data).toMatchObject(body)
    await axios.delete(`http://localhost:3000/api/certificate/${created.data.data._id}`)
  });

  test('Put certificate', async () => {
    const body = {
        "title":  "Test Certificate23",
        "description": "sed for testin",
        "prerequisites":  ["test"],
        "issuedBy": "Ali",
        "type": "Offline"
    }
    const body2 = {
        "type": "Online"
    }
    const created = await funcs.postCertificate(body)
    expect.assertions(2)
    expect(created.status).toEqual(200)
    const updated = await funcs.putCertificate(body2,created.data.data['_id'])
    expect(updated.status).toEqual(200)
    await axios.delete(`http://localhost:3000/api/certificate/${created.data.data._id}`)
  });

  test('Delete certificate', async () => {
    const body = {
        "title":  "Test Certificate23",
        "description": "sed for testin",
        "prerequisites":  ["test"],
        "issuedBy": "Ali",
        "type": "Offline"
    }
    const created = await funcs.postCertificate(body)
    expect.assertions(2)
    expect(created.status).toEqual(200)
    const deleted = await funcs.deleteCertificate(created.data.data['_id'])
    expect(deleted.status).toEqual(200)
  });

  test('Get certificate application', async () => {
    expect.assertions(1)
    const response =  await funcs.getCertificateApplication()
    expect(response.status).toEqual(200)
  });

  test('Post certificate application', async () => {
    const body = {
        "certificate": "Java",
        "applicant": "Abdelrahman",
        "status": "mesh approved"
    }
    expect.assertions(2)
    const created = await funcs.postCertificateApplication(body)
    expect(created.status).toEqual(200)
    const cer = await axios.get(`http://localhost:3000/api/certificateApplication/${created.data.data._id}`) 
    expect(cer.data).toMatchObject(body)
    await axios.delete(`http://localhost:3000/api/certificateApplication/${created.data.data._id}`)

  });

  test('Put certificate application', async () => {
    const body = {
        "certificate": "Java",
        "applicant": "Abdelrahman",
        "status": "mesh approved"
    }
    const body2 = {
        "status": "approved"
    }
    const created = await funcs.postCertificateApplication(body)
    expect.assertions(2)
    expect(created.status).toEqual(200)
    const updated = await funcs.putCertificateApplication(body2,created.data.data['_id'])
    expect(updated.status).toEqual(200)
    await axios.delete(`http://localhost:3000/api/certificateApplication/${created.data.data._id}`)

  });

  test('Delete certificate applications', async () => {
    const body = {
        "certificate": "Python",
        "applicant": "Mohamed",
        "status": "mesh approved awi ya3ni"
    }
    const created = await funcs.postCertificateApplication(body)
    expect.assertions(2)
    expect(created.status).toEqual(200)
    const deleted = await funcs.deleteCertificateApplication(created.data.data['_id'])
    expect(deleted.status).toEqual(200)
  });

  test('Undergo Evaluation Process', async () => {
    const body = {
        "name": "Betengan",
        "age": 21,
        "email": "test@test.com",
        "password": "betengan bardo",
        "githubPortofolio": ["Array of strings"],
        "contactInfo": 7775000,
        "updatedCV": ["Whatever"],
        "registeredOn": 70,
        "signed": false,
        "rating": 20,
        "notifications": ["w malo"],
        "certifications": ["gagwa"]
    }
    const body2 = {
        "title":  "certificate",
        "description": "s...",
        "prerequisites":  ["test"],
        "issuedBy": "Ali",
        "type": "Online"
    }
    expect.assertions(1)
    const user = await axios.post(`http://localhost:3000/api/user`,body)
    const certificate = await axios.post(`http://localhost:3000/api/certificate`,body2)  
    const created = await funcs.undergoEvaluationProcess(user.data.data._id,certificate.data.data._id)
    expect(created.status).toEqual(200)
    await axios.delete(`http://localhost:3000/api/user/${user.data.data._id}`)
    await axios.delete(`http://localhost:3000/api/certificate/${certificate.data.data._id}`)
    //await axios.delete(`http://localhost:3000/api/certificate/${created.data.data._id}`)

  });

  test('Consultancy negotiate with admin', async () => {
    const body = {
            "name": "Yeffsffwefewefdsa23",
            "email": "few.cqwrfewfewfgsesgfofewfwm",
            "password": "haryfwffawsfewasfdsmofsaf4ter",
            "uploaded_tasks": ["sfessafqfwsfaa42n2"],
            "notifications": ["wfsfwfsqaaefwqver"]
    }
    expect.assertions(1)
    const admin = await axios.post(`http://localhost:3000/api/admin`,body)
    const created = await funcs.consultancyNegotiateWithAdmin(admin.data.data._id)
    expect(created.status).toEqual(200)
    await axios.delete(`http://localhost:3000/api/admin/${admin.data.data._id}`)
  });
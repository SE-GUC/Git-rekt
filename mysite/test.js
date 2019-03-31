const funcs = require('./fn')
const Certificate = require("./models/Certificate")
const axios = require('axios');

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
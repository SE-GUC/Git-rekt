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
        "title":  "Test Certificate (Ali)",
        "description": "Test.jpeg",
        "prerequisites":  ["testgl"],
        "issuedBy": "Ali44",
        "type": "Offline1"
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
    await axios.delete(`http://localhost:3000/api/certificate/${created.data.data._id}`)
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
    const cer = await axios.get(`http://localhost:3000/api/certificateApplication/${created.data.data._id}`) 
    expect(cer.data).toMatchObject(body)
    await axios.delete(`http://localhost:3000/api/certificateApplication/${created.data.data._id}`)

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
    await axios.delete(`http://localhost:3000/api/certificateApplication/${created.data.data._id}`)

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
            "name": "Yeffsffwefewefdsa23sd",
            "email": "few.cqwrfewfewfgsesgfofffewfwm",
            "password": "haryfwffawsfewasffdsmofsaff4ter",
            "uploaded_tasks": ["sfessafqffwsfaa42n2"],
            "notifications": ["wfsfwfsqfaaefwqver"]
    }
    expect.assertions(1)
    const admin = await axios.post(`http://localhost:3000/api/admin`,body)
    const created = await funcs.consultancyNegotiateWithAdmin(admin.data.data._id)
    expect(created.status).toEqual(200)
    await axios.delete(`http://localhost:3000/api/admin/${admin.data.data._id}`)

  },15000);
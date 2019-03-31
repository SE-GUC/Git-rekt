const axios = require('axios');
const functions = {
getCertificates: async () => {
    const certificates = await axios.get('http://localhost:3000/api/certificate')
    return certificates
},

postCertificate: async (body) => {
    
    const cer = await axios.post('http://localhost:3000/api/certificate',body)
    return cer
    
},

putCertificate: async (body,id) => {
    
    const cer = await axios.put(`http://localhost:3000/api/certificate/${id}`,body)
    return cer
    
},

deleteCertificate: async (id) => {
    
    const cer = await axios.delete(`http://localhost:3000/api/certificate/${id}`)
    return cer
    
},
getCertificateApplication: async () => {
    const cerApp = await axios.get('http://localhost:3000/api/certificateApplication')
    return cerApp
},

postCertificateApplication: async (body) => {
    
    const cerApp = await axios.post('http://localhost:3000/api/certificateApplication',body)
    return cerApp
    
},

putCertificateApplication: async (body,id) => {
    
    const cerApp = await axios.put(`http://localhost:3000/api/certificateApplication/${id}`,body)
    return cerApp
    
},

deleteCertificateApplication: async (id) => {
    
    const cerApp = await axios.delete(`http://localhost:3000/api/certificateApplication/${id}`)
    return cerApp
    
},

undergoEvaluationProcess: async (userId,certificateId) =>{
    const cer = await axios.post(`http://localhost:3000/api/user/${userId}/applyCertificate/${certificateId}`)
    return cer
}, 

consultancyNegotiateWithAdmin: async (id) =>{
    const negotiate = await axios.get(`http://localhost:3000/api/consultancy/contactAdmin/${id}`)
    return negotiate
}, 
 
setTaskAttributes: async (body,id) => {
    const task = await axios.put(`http://localhost:3000/api/admin/setAttributes/${id}`,body)
    return task
},


uploadTask: async (body) => {
    const task = await axios.post(`http://localhost:3000/api/admin/uploadTask/`,body)
    return task
},

viewConsultancy: async (id) => {
    const task = await axios.get(`http://localhost:3000/api/admin/viewConsultant/${id}`)
    return task
},

updateTask: async (id,body) => {
    const updatedTask = await axios.put(`http://localhost:3000/api/task/${id}`, body)
    return updatedTask
},

getTask: async (id) => {
const task = await axios.get(`http://localhost:3000/api/task/${id}`)
return task
},

deleteTask: async (id) => {
    const deletedTask = await axios.delete(`http://localhost:3000/api/task/${id}`)
    return deletedTask
},

createTask: async (body) => {
    const createTask = await axios.post(`http://localhost:3000/api/task/`, body)
    return createTask
},

viewUserContactInfo: async (id) => {
    const user = await axios.get(`http://localhost:3000/api/admin/viewUserContactInfo/${id}`)
    return user
}, 

};
module.exports = functions;

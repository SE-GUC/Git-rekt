const axios = require('axios');
const functions = {
//Abuelleils functions
getAdmin: async (id) => {
    const admin = await axios.get(`http://localhost:3000/api/admin/${id}`)
    return admin
    },
createAdmin: async (body) => {
    const admin = await axios.post(`http://localhost:3000/api/admin/createAdmin`, body)
    return admin
},
updateAdmin: async (id,body) =>{
    const admin = await axios.put(`http://localhost:3000/api/admin/updateAdmin/${id}}`,body)
    return admin
},
deleteAdmin: async (id) =>{
    const admin = await axios.delete(`http://localhost:3000/api/admin/deleteAdmin/${id}`)
    return admin
},
consultancyApply: async (consultancyEmail,taskId) =>{//written
    const task = await axios.post(`http://localhost:3000/api/consultancy/${consultancyEmail}/applyForTask/${taskId}`)
    return task
},
userBrowseVacancy: async (id) =>{//
    const task = await axios.get(`http://localhost:3000/api/user/browseVacancies/${id}`)
    return task
},
assignUser: async (userId,id) =>{//done
    const task = await axios.put(`http://localhost:3000/api/admin/${userId}/assignUser/${id}`)
    return task
},
rejectUser: async (userId,id) =>{//done
    const task = await axios.put(`http://localhost:3000/api/admin/${userId}/rejectUser/${id}`)
    return task
},
assignConsultancy: async (consultancyId,id) =>{//done
    const task = await axios.put(`http://localhost:3000/api/admin/${consultancyId}/assignConsultancy/${id}`)
    return task
},
//Harbs functions
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

};
module.exports = functions;
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
getApplication: async () => {
    const certificates = await axios.get('http://localhost:3000/api/application')
    return certificates
},

postApplication: async (body) => {
    
    const cer = await axios.post('http://localhost:3000/api/application',body)
    return cer
    
},

putApplication: async (body,id) => {
    
    const cer = await axios.put(`http://localhost:3000/api/application/${id}`,body)
    return cer
    
},

deleteApplication: async (id) => {
    
    const cer = await axios.delete(`http://localhost:3000/api/application/${id}`)
    return cer
    
},
getNotification: async () => {
    const certificates = await axios.get('http://localhost:3000/api/Notification')
    return certificates
},

postNotification: async (body) => {
    
    const cer = await axios.post('http://localhost:3000/api/notification',body)
    return cer
    
},

putNotification: async (body,id) => {
    
    const cer = await axios.put(`http://localhost:3000/api/notification/${id}`,body)
    return cer
    
},

deleteNotification: async (id) => {
    
    const cer = await axios.delete(`http://localhost:3000/api/notification/${id}`)
    return cer
    
},
    
 getConsultancy: async () => {
   const consultancy = await axios.get(`http://localhost:3000/api/consultancy`)
   return consultancy
 },
    
updateConsultancy: async (body,id) => {
const updatedConsultancy = await axios.put(`http://localhost:3000/api/consultancy/${id}`, body)
return updatedConsultancy
},
    
deleteConsultancy: async (id) => {
   const deletedConsultancy = await axios.delete(`http://localhost:3000/api/consultancy/${id}`)
    return deletedConsultancy
},
    
createConsultancy: async (body) => {
   const postedConsultancy = await axios.post(`http://localhost:3000/api/consultancy`, body)
    return postedConsultancy
},
    
contactConsultancy: async (id) => {
       const contactConsultancy = await axios.get(`http://localhost:3000/api/admin/contactConsultancy/${id}`)
       return contactConsultancy
},
    
};
module.exports = functions;

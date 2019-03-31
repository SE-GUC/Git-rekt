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
    const app = await axios.get('http://localhost:3000/api/application')
    return app
},

postApplication: async (body) => {
    
    const app = await axios.post('http://localhost:3000/api/application',body)
    return app
    
},

putApplication: async (body,id) => {
    
    const app = await axios.put(`http://localhost:3000/api/application/${id}`,body)
    return app
    
},

deleteApplication: async (id) => {
    
    const app = await axios.delete(`http://localhost:3000/api/application/${id}`)
    return app
    
},
getNotification: async () => {
    const not = await axios.get('http://localhost:3000/api/notification')
    return not
},

postNotification: async (body) => {
    
    const not = await axios.post('http://localhost:3000/api/notification',body)
    return not
    
},

putNotification: async (body,id) => {
    
    const not = await axios.put(`http://localhost:3000/api/notification/${id}`,body)
    return not
    
},

deleteNotification: async (id) => {
    
    const not = await axios.delete(`http://localhost:3000/api/notification/${id}`)
    return not
    
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
    viewUserContactInfo: async (id) => {
    const user = await axios.get(`http://localhost:3000/api/admin/viewUserContactInfo/${id}`)
    return user
},

viewUser: async (id) => {
    const user = await axios.get(`http://localhost:3000/api/admin/viewUser/${id}`)
    return user
}
    
};
module.exports = functions;

const axios = require('axios');
const functions = {
    
    //CRUDS
    //Certificates
    getCertificates: async () => {
        const certificates = await axios.get('http://localhost:3001/api/certificate')
        return certificates
    },
    
    postCertificate: async (body) => {
        const cer = await axios.post('http://localhost:3001/api/certificate',body)
        return cer
    },
    
    putCertificate: async (body,id) => {
        const cer = await axios.put(`http://localhost:3001/api/certificate/${id}`,body)
        return cer
    },
    
    deleteCertificate: async (id) => {
        const cer = await axios.delete(`http://localhost:3001/api/certificate/${id}`)
        return cer
    },
    
    //Certificate applictaions
    getCertificateApplication: async () => {
        const cerApp = await axios.get('http://localhost:3001/api/certificateApplication')
        return cerApp
    },
    
    postCertificateApplication: async (body) => {
        const cerApp = await axios.post('http://localhost:3001/api/certificateApplication',body)
        return cerApp
    },
    
    putCertificateApplication: async (body,id) => {
        const cerApp = await axios.put(`http://localhost:3001/api/certificateApplication/${id}`,body)
        return cerApp
    },
    
    deleteCertificateApplication: async (id) => {  
        const cerApp = await axios.delete(`http://localhost:3001/api/certificateApplication/${id}`)
        return cerApp
    },
    
    //application
    getApplication: async () => {
        const app = await axios.get('http://localhost:3001/api/application')
        return app
    },
    
    postApplication: async (body) => {
        const app = await axios.post('http://localhost:3001/api/application',body)
        return app
    },
    
    putApplication: async (body,id) => {
        const app = await axios.put(`http://localhost:3001/api/application/${id}`,body)
        return app
    },
    
    deleteApplication: async (id) => {
        const app = await axios.delete(`http://localhost:3001/api/application/${id}`)
        return app
    },
    
    //Notifications
    getNotification: async () => {
        const not = await axios.get('http://localhost:3001/api/notification')
        return not
    },
    
    postNotification: async (body) => {
        const not = await axios.post('http://localhost:3001/api/notification',body)
        return not
    },
    
    putNotification: async (body,id) => {
        const not = await axios.put(`http://localhost:3001/api/notification/${id}`,body)
        return not
    },
    
    deleteNotification: async (id) => {
        const not = await axios.delete(`http://localhost:3001/api/notification/${id}`)
        return not
    },
    
    //consultancy
    getConsultancy: async (id) => {
        const consultancy = await axios.get(`http://localhost:3001/api/consultancy/${id}`)
        return consultancy
    },
    
    updateConsultancy: async (body,id) => {
        const updatedConsultancy = await axios.put(`http://localhost:3001/api/consultancy/${id}`, body)
        return updatedConsultancy
    },
    
    deleteConsultancy: async (id) => {
        const deletedConsultancy = await axios.delete(`http://localhost:3001/api/consultancy/${id}`)
        return deletedConsultancy
    },
    
    createConsultancy: async (body) => {
        const postedConsultancy = await axios.post(`http://localhost:3001/api/consultancy`, body)
        return postedConsultancy
    },
    
    //tasks
    getTasks: async () => {
        const tasks = await axios.get(`http://localhost:3001/api/task`)
        return tasks
    },
    
    getTask: async (id) => {
        const task = await axios.get(`http://localhost:3001/api/task/${id}`)
        return task
    },
    
    createTask: async (body) => {
        const createdtask = await axios.post(`http://localhost:3001/api/task`, body)
        return createdtask
    },
    
    updateTask: async (body,id) => {
        const updatedTask = await axios.put(`http://localhost:3001/api/task/${id}`, body)
        return updatedTask
    },
    
    deleteTask: async (id) => {
        const deletedTask = await axios.delete(`http://localhost:3001/api/Task/${id}`)
        return deletedTask
    },

    //partner
    getPartners: async () => {
        const allPartners = await axios.get('http://localhost:3001/api/partner')
        return allPartners
    },
    
    getPartner: async (id) => {
        const partner = await axios.get(`http://localhost:3001/api/partner/${id}`)
        return partner
    },
    
    createPartner: async (body) => {
        const createdPartner = await axios.post('http://localhost:3001/api/partner', body)
        return createdPartner
    },
    
    updatePartner: async (body,id) => {
        const updatedPartner = await axios.put(`http://localhost:3001/api/partner/${id}`, body)
        return updatedPartner
    },

    deletePartner: async (id) => {
        const deletedPartner = await axios.delete(`http://localhost:3001/api/partner/${id}`)
        return deletedPartner
    },

    //user

    //admin

    //USER STORIES

    //admin user stories
    //contact a consultant
    contactConsultancy: async (id) => {
        const contactConsultancy = await axios.get(`http://localhost:3001/api/admin/contactConsultancy/${id}`)
        return contactConsultancy
    },

    //view a consultant
    viewConsultant: async (id) => {
        const user = await axios.get(`http://localhost:3001/api/admin/viewConsultant/${id}`)
        return user
    },
    
    //get contact info of a user  
    viewUserContactInfo: async (id) => {
        const user = await axios.get(`http://localhost:3001/api/admin/viewUserContactInfo/${id}`)
        return user
    },
    
    //view a user
    viewUser: async (id) => {
        const user = await axios.get(`http://localhost:3001/api/admin/viewUser/${id}`)
        return user
    },

    //set a task's attributes
    setTaskAttributes: async (body, id) => {
        const user = await axios.put(`http://localhost:3001/api/admin/setAttributes/${id}`, body)
        return user
    },

    //admin contacts a partner
    contactPartner: async (taskId, id) => {
        const partnerContactInfo = await axios.get(`http://localhost:3001/api/admin/${taskId}/contactPartner/${id}`)
        return partnerContactInfo
    },

    //user user stories
    //undergo an evaluation
    applyForCertificate: async (userId,certificateId) =>{
        const cer = await axios.post(`http://localhost:3001/api/user/${userId}/applyCertificate/${certificateId}`)
        return cer
    }, 
    
    //partner user stories
    //submit a task
    submiTask: async (id, body) => {
        const uploadTask = await axios.post(`http://localhost:3001/api/partner/submitTask/${id}`, body)
        return uploadTask
    },
    
};
module.exports = functions;

const axios = require('axios');
const functions = {
    getApplications: async () => {
        const application = await axios.get(`http://localhost:3000/api/application/`)
        return application
        },
    getApplication: async (id) => {
        const application = await axios.get(`http://localhost:3000/api/application/${id}`)
        return application
        },
    createApplication: async (body) => {
        const application = await axios.post('http://localhost:3000/api/application',body)
        return application
        },
    updateApplication: async (id) => {
        const application = await axios.put(`http://localhost:3000/api/application/${id}`)
        return application
        },
    deleteApplication: async (id) => {
        const application = await axios.delete(`http://localhost:3000/api/application/${id}`)
        return application
        },
    userCanApplyForTask: async (AdminEmail, TaskId) => {
        const user = await axios.get(`/api/admin/${AdminEmail}/viewTaskDesc/${TaskId}`)
        return user
        },

    
    
        
        
};
module.exports = functions;
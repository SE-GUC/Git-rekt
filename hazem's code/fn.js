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
    createUser: async (body) => {
         const user = await axios.post('http://localhost:3000/api/user',body)
        return user
            },
    createTask: async (body) => {
        const task = await axios.post('http://localhost:3000/api/task',body)
        return task
                },
    getCertainTask: async (id) => {
        const task = await axios.get(`http://localhost:3000/api/task/${id}`)
        return task
    }

    
    
        
        
};
module.exports = functions;
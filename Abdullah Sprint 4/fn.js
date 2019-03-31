const axios = require('axios');
const functions = {

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
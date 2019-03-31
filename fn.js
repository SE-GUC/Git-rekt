const axios = require('axios');

const notifFunctions = {
        getNotifications: async () => {//get all notifications
                const notifs = await axios.get('http://localhost:3000/api/notification/')
                return notifs
        },
        getNotification: async(id) => { // get notification with certain "index" not ID
                                        //if index "0", will get the ID of first notification in the DB
                const notifs = getNotifications(); //get all notifs.
                const notif_id = notifs.data.data[id]._id;
                const result = await axios.get(`http://localhost:3000/api/notification/${notif_id}`);
                return result;
        },
        createNotification: async(body) => {    //creates notification
                                                // takes body as parameter (asif params.body)
                const result = await axios.post(`http://localhost:3000/api/notification/`, body);
                return result;
        },
        updateNotification: async(body) => {    //updates notification
                                                // takes body as parameter (asif params.body)
                const result = await axios.put(`http://localhost:3000/api/notification/`, body);
                return result;
        },
        deleteNotification: async(index) => {   //mabyna enha delete y3ny
                const notifs = getNotifications();
                const notif_id = notifs.data.data[id]._id;
                const result = await axios.delete(`http://localhost:3000/api/notification/${notif_id}`)
                return result;
        },
        getLastIndex: async() =>{
                const allNotifs = await axios.get('http://localhost:3000/api/notification/')
                return allNotifs.data.data.length-1;
        }
}

module.exports = notifFunctions;

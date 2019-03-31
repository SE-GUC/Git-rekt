const funcs = require('./fn');

//create Koko's notification for the tests, then removed.

var body = "{sent_to:yallatestKoko ,notifies:kokoTestyalla ,sent_from:yallakokoMaten7sh ,time: " + 
            new Date() + '}';

test(`Create Notification`, async () => {
    expect.assertions(3)
    await funcs.createNotification(body);
    const l_index = await funcs.getLastIndex();
    const notif = await funcs.getNotification( l_index );
    expect(notif.data.data[l_index].notifies).toEqual('kokoTestyalla');    
    
});

test(`Get Notifications`, async () => {
    expect.assertions(1)
    const notif = await funcs.getNotifications();
    expect(notif.data).toContain('kokoTestyalla');    
});

test(`Update Notifications`, async () => {
    body = "{notifies:kokoWa7edBas}";
    expect.assertions(2)
    const l_index = await funcs.getLastIndex();
    const notif = await funcs.updateNotification(body);
    expect(notif.data.data[l_index].notifies).toEqual('kokoWa7edBas');    
});

test('Delete Notifications', async () => {
    expect.assertions(2)
    const l_index = await funcs.getLastIndex();
    const notif = await funcs.deleteNotification(l_index);
    expect(notif.data).not.toContain('kokoTestyalla');    
});


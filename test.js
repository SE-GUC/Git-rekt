const funcs = require('./fn');
const Application = require("./models/application")
const axios = require('axios');

//Testing get all applications
test('Get application', async () => {
  expect.assertions(1)
  const response =  await funcs.getApplications()
  expect(response.status).toEqual(200)
});
//Testing get application
  test('An application that is submitted by User djadnmewfn', async () => {
   const application = {
        'user': 'djadnmewfn',
        'task': 'dwajijgtrgn'
    }
    
    const created = await funcs.createApplication(application)
    expect(created.status).toEqual(200)
    const data = created.data.data
    const id = data['_id']
    const response =  await funcs.getApplication(id)
    expect.hasAssertions()  
    expect(response.data.data[0]).toEqual(application.data)
  });

//Testing create application
test('Creating a new application', async () => {  
  const application = {
      'user': 'Abdulrahman',
      'task': 'Washing Dishes'
    }
    const response =  await funcs.createApplication(application)
    expect.hasAssertions()
    expect(response.status).toEqual(200)
  });
//Testing update application
test('updating a certain application', async () => { 
    const application = {
      "user": "djadnmewfn",
      "task": "dwajijgtrgn"
    }
    const created =  await funcs.createApplication(application)
    expect(created.status).toEqual(200)
    const data = created.data.data
    const id = data['_id']
    const response = await funcs.updateApplication(id)
    expect.hasAssertions()
    expect(response.status).toEqual(200)
  });

//Testing delete application
test('deleting a certain application', async () => { 
    const application = {
      "user": "djadnmewfn",
      "task": "dwajijgtrgn"
    }
    const created =  await funcs.createApplication(application)
    const data = created.data.data
    const id = data['_id']
    const response = await funcs.deleteApplication(id)
    expect.hasAssertions()
    expect(response.data.data).toEqual(data)
  });
//Testing user applying for a task
test('A user with email ahmed88@gmail.com has applied for a task', async () => { 
    const user = {
        'name': 'Hazem Belal',
        'age': null,
        'email': 'ahmed88@gmail.com',
        'password': null,
        'githubportofolio': null,
        'contactInfo': null,
        'updatedCV': null,
        'registeredOn': null,
        'signed': null,
        'rating': null,
        'notifications': null,
        'certifications': null,
        'appliedApplications': null
    }
    const created =  await funcs.createUser()
    const data = created.data.data
    const id = data['_id']
    const Task = {
        'approved_by': null,
        'description': null,
        'posted_on': null,
        'posted_by': null,
        'Estimated_effort': null,
        'Time_taken': null,
        'Level_of_commitment': null,
        'Experience_level': null,
        'Monetary_compensation': null,
        'Owner': null,
        'Assigned_Consultancy': null,
        'reviewed': null,
        'Required_set_of_skills': null,
        'task_list': null,
        'applicant_list': [],
        'assigned_users': null
    }
    const newTask = await funcs.createTask()
    const taskData = newTask.data.data
    const Taskid = taskData['_id']
    const response = await funcs.userCanApplyForTask(user.email,Taskid)
    expect.hasAssertions()
    expect(response.data.data.applicant_list[0]).toEqual('Hazem Belal')
    
  });
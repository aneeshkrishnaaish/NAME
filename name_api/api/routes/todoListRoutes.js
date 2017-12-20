'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  
  // todoList Routes for Header

  app.route('/header')
  .get(todoList.list_all_header)
    .post(todoList.create_a_header);

  app.route('/header/:headerId')
    .get(todoList.read_a_header)
    .put(todoList.update_a_header)
    .delete(todoList.delete_a_header);

    
  
  // todoList Routes for Tasks
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
  
  // todoList Routes for Contacts
  app.route('/contacts')
    .get(todoList.list_all_contacts)
    .post(todoList.create_a_contact);


  app.route('/contacts/:contactId')
    .get(todoList.read_a_contact)
    .put(todoList.update_a_contact)
    .delete(todoList.delete_a_contact);

  // todoList Routes for Services
  app.route('/services')
    .get(todoList.list_all_services)
    .post(todoList.create_a_service);


  app.route('/services/:serviceId')
    .get(todoList.read_a_service)
    .put(todoList.update_a_service)
    .delete(todoList.delete_a_service);
};
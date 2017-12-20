'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks'),
  Header = mongoose.model('Header'),
  Contact = mongoose.model('Contact'),
  Service = mongoose.model('Service');



// Operations in Header
exports.list_all_header = function(req, res) {
  Header.find({}, function(err, header) {
    if (err)
      res.send(err);
    res.json(header);
  });
};

exports.create_a_header = function(req, res) {
  var new_task = new Header(req.body);
  new_task.save(function(err, header) {
    if (err)
      res.send(err);
    res.json(header);
  });
};

exports.read_a_header = function(req, res) {
  Header.findById(req.params.headerId, function(err, header) {
    if (err)
      res.send(err);
    res.json(header);
  });
};


exports.update_a_header = function(req, res) {
  Header.findOneAndUpdate({_id: req.params.headerId}, req.body, {new: true}, function(err, header) {
    if (err)
      res.send(err);
    res.json(header);
  });
};

exports.delete_a_header = function(req, res) {
  Header.remove({
    _id: req.params.headerId
  }, function(err, header) {
    if (err)
      res.send(err);
    res.json({ message: 'Header successfully deleted' });
  });
};

// Operations in Header ends 

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

// Operations in Contacts 

exports.list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

exports.create_a_contact = function(req, res) {
  var new_task = new Contact(req.body);
  new_task.save(function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};


exports.read_a_contact = function(req, res) {
  Contact.findById(req.params.contactId, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};


exports.update_a_contact = function(req, res) {
  Contact.findOneAndUpdate({_id: req.params.contactId}, req.body, {new: true}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};


exports.delete_a_contact = function(req, res) {
  Contact.remove({
    _id: req.params.contactId
  }, function(err, contact) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

// Operations in Services 

exports.list_all_services = function(req, res) {
  Service.find({}, function(err, service) {
    if (err)
      res.send(err);
    res.json(service);
  });
};


exports.create_a_service = function(req, res) {
  var new_task = new Service(req.body);
  new_task.save(function(err, service) {
    if (err)
      res.send(err);
    res.json(service);
  });
};


exports.read_a_service = function(req, res) {
  Service.findById(req.params.serviceId, function(err, service) {
    if (err)
      res.send(err);
    res.json(service);
  });
};


exports.update_a_service = function(req, res) {
  Service.findOneAndUpdate({_id: req.params.serviceId}, req.body, {new: true}, function(err, service) {
    if (err)
      res.send(err);
    res.json(service);
  });
};


exports.delete_a_service = function(req, res) {
  Service.remove({
    _id: req.params.serviceId
  }, function(err, service) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
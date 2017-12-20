'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  testrimonial_name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  testrimonial_description: {
    type: String,
    required: 'Kindly enter the description of the Header'
  },
  testrimonial_Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var HeaderSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the Header'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the Header'
  },
  aboutus: {
    type: String,
    required: 'Kindly enter the description of the aboutus'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['ongoing']
  }
});

var ContactSchema = new Schema({
  addrline1: {
    type: String,
    required: 'Kindly enter the addrline1 of the Contact'
  },
  addrline2: {
    type: String,
    required: 'Kindly enter the addrline2 of the Contact'
  },
  wrokhrs: {
    type: String,
    required: 'Kindly enter the wrokhrs of the Contact'
  },
  holiwork: {
    type: String,
    required: 'Kindly enter the holiwork of the Contact'
  },
  phone: {
    type: String,
    required: 'Kindly enter the phone of the Contact'
  },
  email: {
    type: String,
    required: 'Kindly enter the email of the Contact'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['ongoing']
  }
});

var ServiceSchema = new Schema({
  service: {
    type: String,
    required: 'Kindly enter the name of the Service'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the Service'
  },
  img_url: {
    type: String,
    required: 'Kindly enter the img_url of the Service'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['ongoing']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Header', HeaderSchema);
module.exports = mongoose.model('Contact', ContactSchema);
module.exports = mongoose.model('Service', ServiceSchema);
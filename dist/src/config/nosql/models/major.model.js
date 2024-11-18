"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MajorModel = Schema({
  name: String,
  desc: String,
  status: {
    type: String,
    required: true,
    "enum": ['ACTIVE', 'INACTIVE']
  }
}, {
  timestamps: true
});
var Major = mongoose.model('Major', MajorModel);
module.exports = Major;
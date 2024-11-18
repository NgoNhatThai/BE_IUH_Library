"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AuthorModel = Schema({
  name: {
    type: String,
    required: true
  },
  birthDate: Date,
  desc: String,
  status: {
    type: String,
    required: true,
    "enum": ['ACTIVE', 'INACTIVE']
  }
}, {
  timestamps: true
});
var Author = mongoose.model('Author', AuthorModel);
module.exports = Author;
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategoryModel = Schema({
  name: String,
  desc: String,
  image: String,
  status: {
    type: String,
    required: true,
    "enum": ['ACTIVE', 'INACTIVE']
  }
}, {
  timestamps: true
});
var Category = mongoose.model('Category', CategoryModel);
module.exports = Category;
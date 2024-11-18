"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ConfigLibraryModel = Schema({
  name: String,
  desc: String,
  address: String,
  phone: String,
  email: String,
  banners: [String],
  logo: String,
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }]
}, {
  timestamps: true
});
var Config = mongoose.model('Config', ConfigLibraryModel);
module.exports = Config;
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var HotSearchModel = Schema({
  keyword: {
    type: String,
    required: true,
    unique: true
  },
  searchCount: {
    type: Number,
    "default": 0
  },
  isTrending: {
    type: Boolean,
    "default": false
  },
  category: {
    type: String
  },
  relatedBookIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, {
  timestamps: true
});
var HotSearch = mongoose.model('HotSearch', HotSearchModel);
module.exports = HotSearch;
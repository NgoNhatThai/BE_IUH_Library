"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Chapter = require('./chapter.model');
var ContentModel = Schema({
  bookId: Schema.Types.ObjectId,
  numberOfChapter: Number,
  chapters: [{
    type: Schema.Types.ObjectId,
    ref: 'Chapter'
  }]
}, {
  timestamps: true
});
var Content = mongoose.model('Content', ContentModel);
module.exports = Content;
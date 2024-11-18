"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChapterModel = Schema({
  bookId: Schema.Types.ObjectId,
  contentId: Schema.Types.ObjectId,
  title: String,
  text: [String],
  images: [String],
  mp3s: [String],
  numberOfPage: Number,
  postDate: Date,
  updateDate: Date,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'ChapterComment'
  }],
  status: {
    type: String,
    required: true,
    "enum": ['ACTIVE', 'INACTIVE']
  }
}, {
  timestamps: true
});
var Chapter = mongoose.model('Chapter', ChapterModel);
module.exports = Chapter;
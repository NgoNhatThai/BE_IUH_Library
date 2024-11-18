"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ChapterCommentModel = Schema({
  chapterId: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  postDate: Date
}, {
  timestamps: true
});
var ChapterComment = mongoose.model('ChapterComment', ChapterCommentModel);
module.exports = ChapterComment;
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentModel = Schema({
  reviewId: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: String,
  postDate: Date
}, {
  timestamps: true
});
var Comment = mongoose.model('Comment', CommentModel);
module.exports = Comment;
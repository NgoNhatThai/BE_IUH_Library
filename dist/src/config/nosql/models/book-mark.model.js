"use strict";

var _require = require('lodash'),
  last = _require.last;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookMarkModel = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    index: true
  },
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    index: true
  },
  lastReadChapterId: Schema.Types.ObjectId,
  lastReadChapterIndex: Number,
  readChapterIds: [Schema.Types.ObjectId],
  like: Boolean,
  follow: Boolean,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  notes: [{
    chapterId: Schema.Types.ObjectId,
    index: Number,
    content: String
  }],
  highLights: [{
    chapterId: Schema.Types.ObjectId,
    index: Number,
    content: String
  }],
  isBuy: Boolean
}, {
  timestamps: true
});
var Bookmark = mongoose.model('Bookmark', BookMarkModel);
module.exports = Bookmark;
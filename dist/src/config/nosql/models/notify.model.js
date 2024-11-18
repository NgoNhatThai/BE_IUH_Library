"use strict";

var mongoose = require('mongoose');
var Book = require('./book.model');
var request = require('request');
var Schema = mongoose.Schema;
var NotifyModel = Schema({
  userId: Schema.Types.ObjectId,
  bookId: {
    type: Schema.Types.ObjectId,
    ref: Book
  },
  chapterId: Schema.Types.ObjectId,
  requestId: Schema.Types.ObjectId,
  message: String,
  status: {
    type: String,
    "default": 'UNREAD',
    "enum": ['READ', 'UNREAD']
  }
}, {
  timestamps: true
});
var Notify = mongoose.model('Notify', NotifyModel);
module.exports = Notify;
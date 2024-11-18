"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReadTimeSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true,
    "default": function _default() {
      return new Date().setHours(0, 0, 0, 0);
    }
  },
  totalReadTime: Number,
  detail: [{
    bookId: {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    },
    readTime: Number
  }]
}, {
  timestamps: true
});
ReadTimeSchema.index({
  bookId: 1,
  date: 1
});
var ReadTime = mongoose.model('ReadTime', ReadTimeSchema);
module.exports = ReadTime;
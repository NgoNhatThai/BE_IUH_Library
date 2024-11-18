"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ViewHistorySchema = Schema({
  bookId: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  date: {
    type: Date,
    required: true,
    "default": function _default() {
      return new Date().setHours(0, 0, 0, 0);
    }
  },
  views: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true
});
ViewHistorySchema.index({
  bookId: 1,
  date: 1
});
var ViewHistory = mongoose.model('ViewHistory', ViewHistorySchema);
module.exports = ViewHistory;
"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AmountModel = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  total: Number,
  history: [{
    amount: Number,
    description: String,
    remain: Number,
    detail: {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    },
    date: Date
  }]
}, {
  timestamps: true
});
var Amount = mongoose.model('Amount', AmountModel);
module.exports = Amount;
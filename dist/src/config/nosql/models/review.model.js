"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ReviewModel = Schema({
  bookId: Schema.Types.ObjectId,
  totalLike: Number,
  totalView: Number,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  rate: Number,
  rating: [{
    type: Number,
    min: 0,
    max: 5
  }]
}, {
  timestamps: true
});
var Review = mongoose.model('Review', ReviewModel);
module.exports = Review;
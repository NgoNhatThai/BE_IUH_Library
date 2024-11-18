"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FollowListModel = Schema({
  userId: Schema.Types.ObjectId,
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
}, {
  timestamps: true
});
var FollowList = mongoose.model('FollowList', FollowListModel);
module.exports = FollowList;
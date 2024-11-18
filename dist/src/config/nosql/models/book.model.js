"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BookModel = Schema({
  title: String,
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  majorId: {
    type: Schema.Types.ObjectId,
    ref: 'Major'
  },
  content: {
    type: Schema.Types.ObjectId,
    ref: 'Content'
  },
  review: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  },
  limit: String,
  image: String,
  desc: String,
  createDate: Date,
  postDate: Date,
  updateDate: Date,
  price: Number,
  type: {
    type: String,
    "default": 'NORMAL',
    "enum": ['NORMAL', 'VOICE', 'IMAGE']
  },
  status: {
    type: String,
    "default": 'ISWRITE',
    "enum": ['ISWRITE', 'FINISH', 'SHORT']
  },
  active: {
    "default": true,
    type: Boolean
  }
}, {
  timestamps: true
});
var Book = mongoose.model('Book', BookModel);
module.exports = Book;
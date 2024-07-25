const mongoose = require('mongoose')
const { Schema } = mongoose
const Chapter = require('./chapter.model')

const ContentModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    bookId: Schema.Types.ObjectId,
    numberOfChapter: Number,
    chapters: [String],
  },
  {
    timestamps: true,
  }
)

const Content = mongoose.model('Content', ContentModel)

module.exports = Content

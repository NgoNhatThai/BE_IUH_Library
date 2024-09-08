const { last } = require('lodash')
const mongoose = require('mongoose')
const { Schema } = mongoose

const BookMarkModel = Schema(
  {
    userId: Schema.Types.ObjectId,
    bookId: Schema.Types.ObjectId,
    lastReadChapterId: Schema.Types.ObjectId,
    lastReadChapterIndex: Number,
    readChapterIds: [Schema.Types.ObjectId],
    like: Boolean,
    follow: Boolean,
    rating: Number,
    notes: [
      {
        chapterId: Schema.Types.ObjectId,
        index: Number,
        content: String,
      },
    ],
    highLights: [
      {
        chapterId: Schema.Types.ObjectId,
        index: Number,
        content: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Bookmark = mongoose.model('Bookmark', BookMarkModel)

module.exports = Bookmark

const mongoose = require('mongoose')
const { Schema } = mongoose

const BookMarkModel = Schema(
  {
    userId: Schema.Types.ObjectId,
    bookId: Schema.Types.ObjectId,
    lastReadedChapterId: Schema.Types.ObjectId,
    readedChapterIds: [Schema.Types.ObjectId],
    like: Boolean,
    note: String,
  },
  {
    timestamps: true,
  }
)

const Bookmark = mongoose.model('Bookmark', BookMarkModel)

module.exports = Bookmark

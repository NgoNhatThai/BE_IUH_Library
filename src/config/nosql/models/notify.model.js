const mongoose = require('mongoose')
const Book = require('./book.model')
const { Schema } = mongoose

const NotifyModel = Schema(
  {
    userId: Schema.Types.ObjectId,
    bookId: Schema.Types.ObjectId,
    chapterId: Schema.Types.ObjectId,
    message: String,
    status: {
      type: String,
      default: 'UNREAD',
      enum: ['READ', 'UNREAD'],
    },
  },
  {
    timestamps: true,
  }
)

const Notify = mongoose.model('Notify', NotifyModel)

module.exports = Notify
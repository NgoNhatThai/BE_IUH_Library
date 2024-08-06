const mongoose = require('mongoose')
const { Schema } = mongoose

const BookModel = Schema(
  {
    title: String,
    categoryId: Schema.Types.ObjectId,
    authorId: Schema.Types.ObjectId,
    majorId: Schema.Types.ObjectId,
    content: {
      type: Schema.Types.ObjectId,
      ref: 'Content',
    },
    limit: String,
    image: String,
    desc: String,
    createDate: Date,
    postDate: Date,
    updateDate: Date,
    price: Number,
    status: {
      type: String,
      default: 'PUBLISH',
      enum: ['PUBLISH', 'UNPUBLISH'],
    },
  },
  {
    timestamps: true,
  }
)

const Book = mongoose.model('Book', BookModel)

module.exports = Book

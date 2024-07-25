const mongoose = require('mongoose')
const { Schema } = mongoose

const BookModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    title: String,
    categoryId: Schema.Types.ObjectId,
    authorId: Schema.Types.ObjectId,
    majorId: Schema.Types.ObjectId,
    content: {
      type: Schema.Types.ObjectId,
      ref: 'Content',
      require: false,
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
      required: true,
      enum: ['PUBLISH', 'UNPUBLISH'],
    },
  },
  {
    timestamps: true,
  }
)

const Book = mongoose.model('Book', BookModel)

module.exports = Book

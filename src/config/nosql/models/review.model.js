const mongoose = require('mongoose')
const { Schema } = mongoose

const ReviewModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    bookId: Schema.Types.ObjectId,
    totalLike: Number,
    totalView: Number,
    comments: [Schema.Types.ObjectId],
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
)

const Review = mongoose.model('Review', ReviewModel)

module.exports = Review

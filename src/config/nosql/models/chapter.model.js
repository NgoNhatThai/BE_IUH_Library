const mongoose = require('mongoose')
const { Schema } = mongoose

const ChapterModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    contentId: Schema.Types.ObjectId,
    text: [String],
    images: [String],
    postDate: Date,
    updateDate: Date,
    status: {
      type: String,
      required: true,
      enum: ['ACTIVE', 'INACTIVE'],
    },
  },
  {
    timestamps: true,
  }
)

const Chapter = mongoose.model('Chapter', ChapterModel)

module.exports = Chapter

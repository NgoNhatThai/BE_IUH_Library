const mongoose = require('mongoose')
const { Schema } = mongoose

const AuthorModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    name: String,
    birthDate: Date,
    desc: String,
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

const Author = mongoose.model('Author', AuthorModel)

module.exports = Author

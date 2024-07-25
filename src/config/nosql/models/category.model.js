const mongoose = require('mongoose')
const { Schema } = mongoose

const CategoryModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    name: String,
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

const Category = mongoose.model('Category', CategoryModel)

module.exports = Category

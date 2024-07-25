const mongoose = require('mongoose')
const { Schema } = mongoose

const MajorModel = Schema(
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

const Major = mongoose.model('Major', MajorModel)

module.exports = Major

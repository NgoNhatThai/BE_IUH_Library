const mongoose = require('mongoose')
const { Schema } = mongoose

const AmountModel = Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    total: Number,
    history: [
      {
        amount: Number,
        description: String,
        remain: Number,
        date: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Amount = mongoose.model('Amount', AmountModel)

module.exports = Amount
const mongoose = require('mongoose')
const { Schema } = mongoose

const HistoryModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    history: [String], //Book ids
    totalSpendTime: Number,
  },
  {
    timestamps: true,
  }
)

const History = mongoose.model('History', HistoryModel)

module.exports = History

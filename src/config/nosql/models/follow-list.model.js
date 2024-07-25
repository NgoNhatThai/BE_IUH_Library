const mongoose = require('mongoose')
const { Schema } = mongoose

const FollowListModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    books: [Schema.Types.ObjectId],
  },
  {
    timestamps: true,
  }
)

const FollowList = mongoose.model('FollowList', FollowListModel)

module.exports = FollowList

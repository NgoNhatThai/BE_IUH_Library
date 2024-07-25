const mongoose = require('mongoose')
const { Schema } = mongoose

const UserModel = Schema(
  {
    _id: Schema.Types.ObjectId,
    userName: {
      type: String,
      required: true,
    },
    birthDate: Date,
    email: {
      type: String,
      required: true,
    },
    phone: String,
    majorId: Schema.Types.ObjectId,
    memberShip: {
      type: String,
      required: true,
      enum: ['NORMAL', 'VIP'],
    },
    totalSpend: Number,
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

const User = mongoose.model('User', UserModel)

module.exports = User

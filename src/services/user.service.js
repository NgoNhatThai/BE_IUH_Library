import Review from '../config/nosql/models/review.model'
import Comment from '../config/nosql/models/comment.model'
import BookMark from '../config/nosql/models/book-mark.model'
import FollowList from '../config/nosql/models/follow-list.model'
import Notify from '../config/nosql/models/notify.model'

const like = async (userId, bookId) => {
  try {
    if (!userId || !bookId) {
      return {
        errCode: 409,
        message: 'Missing required fields',
      }
    }
    const review = await Review.find({
      bookId: bookId,
    })
    review.totalLike += 1
    const result = await review.save()
    if (!result) {
      return {
        errCode: 500,
        message: 'Error updating review',
      }
    } else {
      return {
        errCode: 200,
        message: 'Update review success (like)',
        data: review,
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}
const read = async (bookId) => {
  try {
    const review = await Review.findOne({
      bookId: bookId,
    })

    if (!review) {
      return {
        errCode: 404,
        message: 'Review not found',
      }
    }

    review.totalView += 1
    const result = await review.save()

    return {
      status: 200,
      message: 'Update review success (view)',
      data: review,
    }
  } catch (error) {
    throw new Error(error)
  }
}
const rate = async (userId, bookId, rating) => {
  try {
    if (!userId || !bookId || !rating) {
      return {
        errCode: 409,
        message: 'Missing required fields',
      }
    }
    const review = await Review.findOne({
      bookId: bookId,
    })
    if (review.userId === userId) {
      return {
        errCode: 409,
        message: 'User can not rate twice',
        data: review,
      }
    }
    review.rating.push(rating)
    review.rate = review.rating.reduce((a, b) => a + b) / review.rating.length

    const result = await review.save()
    if (!result) {
      return {
        errCode: 500,
        message: 'Error updating review',
      }
    } else {
      return {
        errCode: 200,
        message: 'Update review success (rate)',
        data: review,
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}
const comment = async (userId, bookId, comment) => {
  try {
    if (!userId || !bookId || !comment) {
      return {
        errCode: 409,
        message: 'Missing required fields',
      }
    }
    const review = await Review.findOne({
      bookId: bookId,
    })

    const newComment = await Comment.create({
      reviewId: review._id,
      user: userId,
      content: comment,
      postDate: new Date(),
    })

    review.comments.push(newComment._id)
    const result = await review.save()

    if (!result) {
      return {
        errCode: 500,
        message: 'Error updating review',
      }
    } else {
      return {
        errCode: 200,
        message: 'Update review success (comment)',
        data: review,
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}
const createUserBookMark = async (userId, bookId) => {
  try {
    const bookMark = await BookMark.create({
      userId: userId,
      bookId: bookId,
    })
    return {
      status: 200,
      message: 'Create user book mark success',
      data: bookMark,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const updateUserBookMark = async (userId, bookId) => {
  try {
    const bookMark = await BookMark.find({
      userId: userId,
      bookId: bookId,
    })
    if (bookMark) {
      const result = await BookMark.deleteOne({
        userId: userId,
        bookId: bookId,
      })
      if (!result) {
        return {
          status: 500,
          message: 'Error updating user book mark',
        }
      } else {
        return {
          status: 200,
          message: 'Update user book mark success',
        }
      }
    } else {
      return {
        status: 400,
        message: 'User book mark not found',
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getUserBookMark = async (userId) => {
  try {
    const bookMark = await BookMark.find({
      userId: userId,
    })
    if (bookMark) {
      return {
        status: 200,
        message: 'Get user book mark success',
        data: bookMark,
      }
    } else {
      return {
        status: 400,
        message: 'User book mark not found',
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const follow = async (userId, bookId) => {
  try {
    if (!userId || !bookId) {
      return {
        status: 400,
        message: 'Missing required fields',
      }
    }
    const followList = await FollowList.findOne({
      userId: userId,
    })
    if (!followList) {
      const newFollowList = await FollowList.create({
        userId: userId,
        books: [bookId],
      })
      if (newFollowList) {
        return {
          status: 200,
          message: 'Follow book success',
        }
      }
    } else {
      followList.books.push(bookId)
      return {
        status: 200,
        message: 'Follow book success',
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getFollowList = async (userId) => {
  try {
    const followList = await FollowList.findOne({
      userId: userId,
    })
    if (followList) {
      return {
        status: 200,
        message: 'Get follow list success',
        data: followList,
      }
    } else {
      return {
        status: 400,
        message: 'Follow list not found',
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getNotification = async (userId) => {
  try {
    const notification = await Notify.find({
      userId: userId,
    })
    if (notification) {
      return {
        status: 200,
        message: 'Get notification success',
        data: notification,
      }
    } else {
      return {
        status: 400,
        message: 'Notification not found',
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const updateNotificationStatus = async (userId, notifyId) => {
  try {
    const notification = Notify.findOne({
      userId: userId,
      _id: notifyId,
    })
    if (notification) {
      notification.status = 'READ'
      const result = await notification.save()
      if (result) {
        return {
          status: 200,
          message: 'Update notification status success',
        }
      }
    } else {
      return {
        status: 400,
        message: 'Notification not found',
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
module.exports = {
  like,
  read,
  rate,
  comment,
  createUserBookMark,
  updateUserBookMark,
  getUserBookMark,
  follow,
  getFollowList,
  getNotification,
  updateNotificationStatus,
}

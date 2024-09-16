import Review from '../config/nosql/models/review.model'
import Comment from '../config/nosql/models/comment.model'
import BookMark from '../config/nosql/models/book-mark.model'
import FollowList from '../config/nosql/models/follow-list.model'
import Notify from '../config/nosql/models/notify.model'
import HotSearch from '../config/nosql/models/hot-search.model'
import ChapterComment from '../config/nosql/models/chapter-comment'
import Chapter from '../config/nosql/models/chapter.model'
import History from '../config/nosql/models/history.model'

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

    const bookMark = await BookMark.findOne({
      userId: userId,
      bookId: bookId,
    })
    bookMark.like = true
    await bookMark.save()

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
const read = async (userId, bookId, chapterId) => {
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
    await review.save()

    let history = await History.findOne({
      userId: userId,
    })
    if (!history) {
      history = await History.create({
        userId: userId,
        books: [
          {
            bookId: bookId,
            lastReadChapterId: chapterId,
            lastReadAt: new Date(),
          },
        ],
        lastReadBook: bookId,
      })
      return {
        status: 200,
        message: 'Create history success',
        data: history,
      }
    }
    if (history.books.length > 0) {
      history.books.push({
        bookId: bookId,
        lastReadChapterId: chapterId,
        lastReadAt: new Date(),
      })
    } else {
      history.books = [
        {
          bookId: bookId,
          lastReadChapterId: chapterId,
          lastReadAt: new Date(),
        },
      ]
    }
    history.lastReadBook = bookId
    await history.save()

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

    const bookMark = await BookMark.findOne({
      userId: userId,
      bookId: bookId,
    })
    if (!bookMark) {
      await BookMark.create({
        userId: userId,
        bookId: bookId,
        rating: rating,
      })
    }
    bookMark.rating = rating
    await bookMark.save()

    let history = await History.findOne({
      userId: userId,
    })
    history.rating.push({
      bookId: bookId,
      rating: rating,
      ratedAt: new Date(),
    })
    await history.save()

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

    let history = await History.findOne({
      userId: userId,
    })
    history.comment.push({
      bookId: bookId,
      content: comment,
      createdAt: new Date(),
    })
    await history.save()

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
const updateUserBookMark = async (updateData) => {
  try {
    const {
      userId,
      bookId,
      lastReadChapterId,
      lastReadChapterIndex,
      readChapterIds,
      like,
      follow,
      rating,
      notes,
      highLights,
    } = updateData

    let bookMark = await BookMark.findOne({
      userId: userId,
      bookId: bookId,
    })

    if (!bookMark) {
      const newBookMark = await BookMark.create({
        userId: userId,
        bookId: bookId,
        lastReadChapterId: lastReadChapterId || undefined,
        lastReadChapterIndex: lastReadChapterIndex || undefined,
        readChapterIds: readChapterIds || undefined,
        like: like || undefined,
        follow: follow || undefined,
        rating: rating || undefined,
        notes: notes || undefined,
        highLights: highLights || undefined,
      })
      return {
        status: 200,
        message: 'Create BookMark successfully',
        data: newBookMark,
      }
    } else {
      if (lastReadChapterId !== undefined)
        bookMark.lastReadChapterId = lastReadChapterId
      if (lastReadChapterIndex !== undefined)
        bookMark.lastReadChapterIndex = lastReadChapterIndex
      if (readChapterIds !== undefined) bookMark.readChapterIds = readChapterIds
      if (like !== undefined) bookMark.like = like
      if (follow !== undefined) bookMark.follow = follow
      if (rating !== undefined) bookMark.rating = rating
      if (notes !== undefined) bookMark.notes = notes
      if (highLights !== undefined) bookMark.highLights = highLights

      await bookMark.save()

      return {
        status: 200,
        message: 'Update BookMark successfully',
        data: bookMark,
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

    let history = await History.findOne({
      userId: userId,
    })
    if (!history) {
      history = await History.create({
        userId: userId,
        books: [],
        lastReadBook: null,
        like: [],
        follow: [bookId],
        rating: [],
        comment: [],
      })
    }
    history.follow.push(bookId)
    await history.save()

    let followList = await FollowList.findOne({ userId: userId })

    if (!followList) {
      const newFollowList = await FollowList.create({
        userId: userId,
        books: [bookId],
      })
      if (newFollowList)
        return {
          status: 200,
          message: 'Follow book success',
        }
    } else {
      if (!followList.books.includes(bookId)) {
        followList.books.push(bookId)
        await followList.save()
      } else {
        return {
          status: 400,
          message: 'Book already followed',
        }
      }

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
const getFollowList = async (userId, pageIndex, pageSize) => {
  try {
    const followList = await FollowList.findOne({
      userId: userId,
    }).populate({
      path: 'books',
      populate: {
        path: 'authorId',
      },
      populate: {
        path: 'categoryId',
      },
      populate: {
        path: 'review',
      },
    })

    const data = followList.books.slice(
      pageIndex * pageSize,
      (pageIndex + 1) * pageSize
    )

    if (followList) {
      return {
        status: 200,
        message: 'Get follow list success',
        data: data,
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
      .populate({
        path: 'bookId',
        populate: {
          path: 'authorId',
        },
      })
      .sort({ createdAt: -1 })
      .limit(10)

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
    let notification = await Notify.findOne({
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
const getHotSearch = async () => {
  try {
    const trendingKeywords = await HotSearch.find()
      .sort({ searchCount: -1 })
      .limit(25)
    return {
      status: 200,
      message: 'Get trending keywords success',
      data: trendingKeywords,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const checkFollowBook = async (userId, bookId) => {
  try {
    const followList = await FollowList.findOne({
      userId: userId,
    })
    if (followList && followList.books.includes(bookId)) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}
const unFollow = async (userId, bookId) => {
  try {
    let followList = await FollowList.findOne({ userId: userId })
    if (!followList) {
      return {
        status: 400,
        message: 'User has not followed any book yet',
      }
    }
    if (!followList.books.includes(bookId)) {
      return {
        status: 404,
        message: 'Book not found in follow list',
      }
    }

    followList.books = followList.books.filter(
      (book) => book.toString() !== bookId
    )
    const result = await followList.save()
    if (result) {
      return {
        status: 200,
        message: 'Unfollow book success',
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const commentInChapter = async (userId, chapterId, comment) => {
  try {
    if (!userId || !chapterId || !comment) {
      return {
        errCode: 409,
        message: 'Missing required fields',
      }
    }
    const newComment = await ChapterComment.create({
      chapterId: chapterId,
      user: userId,
      content: comment,
      postDate: new Date(),
    })

    const chapter = await Chapter.findOne({
      _id: chapterId,
    })
    chapter.comments.push(newComment._id)
    await chapter.save()

    return {
      errCode: 200,
      message: 'Create comment in chapter success',
      data: newComment,
    }
  } catch (error) {
    throw new Error(error)
  }
}
const updateHistory = async (userId, bookId, chapterId) => {
  try {
    const history = await History.findOne({
      userId: userId,
    })
    if (!history) {
      const newHistory = await History.create({
        userId: userId,
        books: [
          {
            bookId: bookId,
            lastReadChapterId: chapterId,
            lastReadAt: new Date(),
          },
        ],
        lastReadBook: bookId,
      })
      return {
        status: 200,
        message: 'Create history success',
        data: newHistory,
      }
    } else {
      const book = history.books.find((book) => book.bookId === bookId)
      if (!book) {
        history.books.push({
          bookId: bookId,
          lastReadChapterId: chapterId,
          lastReadAt: new Date(),
        })
      } else {
        book.lastReadChapterId = chapterId
        book.lastReadAt = new Date()
      }
      history.lastReadBook = bookId
      await history.save()
      return {
        status: 200,
        message: 'Update history success',
        data: history,
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
  getHotSearch,
  checkFollowBook,
  unFollow,
  commentInChapter,
  updateHistory,
}

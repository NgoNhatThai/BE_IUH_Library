import { get } from 'lodash'
import userService from '../services/user.service'

const like = async (req, res) => {
  try {
    const { userId, bookId } = req.body
    const data = await userService.like(userId, bookId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const read = async (req, res) => {
  try {
    const { bookId } = req.body
    if (!bookId) {
      res.status(400).send('Book id is required')
    }
    const data = await userService.read(bookId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const rate = async (req, res) => {
  try {
    const { userId, bookId, rating } = req.body
    const data = await userService.rate(userId, bookId, rating)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const comment = async (req, res) => {
  try {
    const { userId, bookId, comment } = req.body
    const data = await userService.comment(userId, bookId, comment)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const createUserBookMark = async (req, res) => {
  try {
    const { userId, bookId } = req.body
    const data = await userService.createUserBookMark(userId, bookId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const updateUserBookMark = async (req, res) => {
  try {
    const { userId, bookId } = req.body
    const data = await userService.updateUserBookMark(userId, bookId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getUserBookMark = async (req, res) => {
  try {
    const { userId } = req.query
    if (!userId) {
      return res.status(400).send('Bad request: Missing userId')
    }
    const data = await userService.getUserBookMark(userId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const follow = async (req, res) => {
  try {
    const { userId, bookId } = req.body
    const data = await userService.follow(userId, bookId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getFollowList = async (req, res) => {
  try {
    const { userId } = req.query
    if (!userId) {
      return res.status(400).send('User id is required')
    }
    const data = await userService.getFollowList(userId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const getNotification = async (req, res) => {
  try {
    const { userId } = req.query
    if (!userId) {
      return res.status(400).send('User id is required')
    }
    const data = await userService.getNotification(userId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const updateNotificationStatus = async (req, res) => {
  try {
    const { userId, notifyId } = req.body
    if (!userId || !notifyId) {
      res.status(400).send('User id and notify id are required')
    }
    const data = await userService.updateNotificationStatus(userId, notifyId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
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

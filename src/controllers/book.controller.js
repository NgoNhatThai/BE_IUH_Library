import mongoose from 'mongoose'
import bookService from '../services/book.service.js'
// warning using
const create = async (req, res) => {
  try {
    const book = req.body
    const data = await bookService.create(book)
    console.log(data)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  create,
}

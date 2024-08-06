import mongoose from 'mongoose'
import bookService from '../services/book.service.js'
const create = async (req, res) => {
  try {
    const book = {
      ...req.body,
      image: req.file.path, // Đường dẫn đến file hình ảnh tạm thời
    }
    const data = await bookService.create(book)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const update = async (req, res) => {
  try {
    const book = req.body
    const data = await bookService.update(book)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const remove = async (req, res) => {
  try {
    const id = req.params.id
    const book = await bookService.findOne(id)
    if (!book) {
      res.status(404).send('Book not found')
      return
    }
    book.status = 'INACTIVE'
    const data = await bookService.update(book)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const addChapter = async (req, res) => {
  try {
    const { id } = req.params
    const { chapter } = req.body
    const book = await bookService.findOne(id)
    if (!book) {
      res.status(404).send('Book not found')
      return
    }
    book.chapters.push(chapter)
    const data = await bookService.update(book)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getBookById = async (req, res) => {
  try {
    const id = req.params.id
    const data = await bookService.findOne(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const searchBook = async (req, res) => {
  try {
    const { params } = req.query
    const data = await bookService.search(...params)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  create,
  update,
  remove,
  addChapter,
  getBookById,
  searchBook,
}

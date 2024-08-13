import mongoose from 'mongoose'
import bookService from '../services/book.service.js'
const create = async (req, res) => {
  try {
    const book = {
      ...req.body,
      image: req.file.path,
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
    const book = await bookService.getBookById(id)
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
    if (!req.file) {
      res.status(400).send('Bad request')
      return {
        status: 400,
        message: 'Missing PDF file',
      }
    }
    const chapter = {
      ...req.body,
      file: req.file,
    }
    const data = await bookService.addChapter(chapter)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getBookById = async (req, res) => {
  try {
    const id = req.params.id
    const data = await bookService.getBookById(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const search = async (req, res) => {
  try {
    const params = req.body
    if (!params) {
      res.status(400).send('Bad request')
      return {
        status: 400,
        message: 'Missing params',
      }
    }
    const data = await bookService.search(params)
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
  search,
}

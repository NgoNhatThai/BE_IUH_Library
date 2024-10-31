import bookService from '../services/book.service.js'
const create = async (req, res) => {
  try {
    const book = {
      ...req.body,
      image: req.file.path,
    }
    if (!book.title || !book.image || !book.type) {
      return res.status(400).send('Bad request: Missing fields')
    }
    if (!req.file) {
      return res.status(400).json({ message: 'File is required' })
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
    if (!req.file || !req.body.contentId) {
      res.status(400).send('Bad request: missing file or contentID')
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
    const params = req.query
    if (!Object.keys(params).length) {
      return res.status(400).send('Bad request: Missing params')
    }
    const data = await bookService.search(params)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getDetailBookById = async (req, res) => {
  try {
    const id = req.params.id
    const data = await bookService.getDetailBookById(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getBookType = async (req, res) => {
  try {
    const { contentId } = req.query
    if (!contentId) {
      return res.status(400).send('Bad request: Missing contentId')
    }
    const data = await bookService.getBookType(contentId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getBookReview = async (req, res) => {
  try {
    const { bookId } = req.query
    if (!bookId) {
      return res.status(400).send('Bad request: Missing bookId')
    }
    const data = await bookService.getBookReview(bookId)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getTopViewedBooks = async (req, res) => {
  try {
    const data = await bookService.getTopViewedBooks()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getDetailChapterById = async (req, res) => {
  try {
    const id = req.params.id
    const data = await bookService.getDetailChapterById(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getRelatedBooks = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) {
      res.status(400).send('Bad request')
      return {
        status: 400,
        message: 'Missing book id',
      }
    }
    const data = await bookService.getRelatedBooks(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const findBooksByTextInput = async (req, res) => {
  try {
    const { text } = req.query
    if (!text) {
      res.status(400).send('Bad request')
      return {
        status: 400,
        message: 'Missing text',
      }
    }
    const data = await bookService.findBooksByTextInput(text) // Sử dụng text trực tiếp
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getBookByCategory = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      res.status(400).send('Bad request')
      return {
        status: 400,
        message: 'Missing category id',
      }
    }
    const data = await bookService.getBookByCategory(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const getNewBooks = async (req, res) => {
  try {
    const data = await bookService.getNewBooks()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const addMultipleChapters = async (req, res) => {
  try {
    const { contentId } = req.body
    const chapterTitles = req.body.chapterTitles.map(JSON.parse)
    const chapterPaginations = req.body.chapterPaginations.map(JSON.parse)
    const file = req.file
    if (!contentId || !file || !chapterTitles || !chapterPaginations) {
      return res
        .status(400)
        .send(
          'Bad request: missing params contentId, file chapterTitles or chapterPaginations'
        )
    }
    const data = await bookService.addMultipleChapters(
      contentId,
      file,
      chapterTitles,
      chapterPaginations
    )
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  create,
  update,
  remove,
  addChapter,
  getBookById,
  search,
  getDetailBookById,
  getBookType,
  getBookReview,
  getTopViewedBooks,
  getDetailChapterById,
  getRelatedBooks,
  findBooksByTextInput,
  getBookByCategory,
  getNewBooks,
  addMultipleChapters,
}

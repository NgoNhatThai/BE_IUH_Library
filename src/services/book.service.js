import Book from '../config/nosql/models/book.model'

const create = async (book) => {
  try {
    const data = await Book.create(book)
    console.log(data)
    return {
      status: 200,
      message: 'Create book success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
// const create = async (req, res) => {
//   try {
//     const book = req.body
//     const data = await bookService.create(book)
//     console.log(data)
//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }
// const update = async (req, res) => {
//   try {
//     const book = req.body
//     const data = await bookService.update(book)
//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }
// const remove = async (req, res) => {
//   try {
//     const id = req.params.id
//     const book = await bookService.findOne(id)
//     if (!book) {
//       res.status(404).send('Book not found')
//       return
//     }
//     book.status = 'INACTIVE'
//     const data = await bookService.update(book)
//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }
// const addChapter = async (req, res) => {
//   try {
//     const { id } = req.params
//     const { chapter } = req.body
//     const book = await bookService.findOne(id)
//     if (!book) {
//       res.status(404).send('Book not found')
//       return
//     }
//     book.chapters.push(chapter)
//     const data = await bookService.update(book)
//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }
// const getBookById = async (req, res) => {
//   try {
//     const id = req.params.id
//     const data = await bookService.findOne(id)
//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }
// const searchBook = async (req, res) => {
//   try {
//     const { params } = req.query
//     const data = await bookService.search(...params)
//     res.status(200).json(data)
//   } catch (error) {
//     res.status(500).send(error.message)
//   }
// }
const update = async (book) => {
  try {
    const data = await Book.update(book)
    return {
      status: 200,
      message: 'Update book success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const remove = async (id) => {
  try {
    const book = await Book.findOne(id)
    if (!book) {
      return {
        status: 404,
        message: 'Book not found',
      }
    }
    book.status = 'INACTIVE'
    const data = await Book.update(book)
    return {
      status: 200,
      message: 'Delete book success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const addChapter = async (id, chapter) => {
  try {
    const book = await Book.findOne(id)
    if (!book) {
      return {
        status: 404,
        message: 'Book not found',
      }
    }
    book.chapters.push(chapter)
    const data = await Book.update(book)
    return {
      status: 200,
      message: 'Add chapter success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getBookById = async (id) => {
  try {
    const data = await Book.findOne(id)
    return {
      status: 200,
      message: 'Get book by id success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const searchBook = async (params) => {
  try {
    const data = await Book.search(params)
    return {
      status: 200,
      message: 'Search book success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
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

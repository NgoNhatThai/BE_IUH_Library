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

module.exports = {
  create,
}

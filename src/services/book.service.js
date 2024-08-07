import cloudinary from '../config/cloudinary'
import Book from '../config/nosql/models/book.model'
import Content from '../config/nosql/models/content.model'
import Chapter from '../config/nosql/models/chapter.model'

const create = async (book) => {
  try {
    if (!book.title || !book.image) {
      return {
        status: 400,
        message: 'Missing required fields',
      }
    }
    const imagePath = await cloudinary.uploader.upload(book.image, {
      public_id: book.title,
    })
    const content = new Content({
      bookId: book._id,
      numberOfChapter: 0,
      chapters: [],
    })
    const contentData = await Content.create(content)
    const bookData = new Book({
      ...book,
      content: contentData._id,
      image: imagePath.secure_url,
      createDate: new Date(),
    })
    const data = await Book.create(bookData)
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
    const chap = new Chapter({
      ...chapter,
      bookId: id,
    })
    const chapterData = await Chapter.create(chap)
    book.chapters.push(chapterData._id)
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
    const data = await Book.findById(id).populate('content')
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
const search = async (params) => {
  console.log(params)
  try {
    const query = {}

    if (params.title) {
      query.title = { $regex: params.title, $options: 'i' }
    }

    if (params.categoryId) {
      query.categoryId = params.categoryId
    }

    if (params.authorId) {
      query.authorId = params.authorId
    }

    const books = await Book.find(query)
      .skip(params.pageIndex * params.pageSize)
      .limit(params.pageSize)

    const totalBooks = await Book.countDocuments(query)

    return {
      status: 200,
      message: 'Search book success',
      data: {
        total: totalBooks,
        pageIndex: params.pageIndex,
        pageSize: params.pageSize,
        data: books,
      },
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
  search,
}

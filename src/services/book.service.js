import cloudinary from '../config/cloudinary'
import Book from '../config/nosql/models/book.model'
import Content from '../config/nosql/models/content.model'
import Chapter from '../config/nosql/models/chapter.model'
import Author from '../config/nosql/models/author.model'
import Category from '../config/nosql/models/category.model'
import Major from '../config/nosql/models/major.model'
import fs from 'fs'
import path from 'path'
import { PDFDocument } from 'pdf-lib'
import pdfParse from 'pdf-parse'
import pdfPoppler from 'pdf-poppler'
import { exec } from 'child_process'
import { title } from 'process'

const create = async (book) => {
  try {
    if (!book.title || !book.image) {
      return {
        status: 400,
        message: 'Missing required fields',
      }
    }
    if (book.authorId) {
      const author = await Author.findById(book.authorId)
      if (!author) {
        return {
          status: 404,
          message: 'Author not found',
        }
      }
    }
    if (book.categoryId) {
      const category = await Category.findById(book.categoryId)
      if (!category) {
        return {
          status: 404,
          message: 'Category not found',
        }
      }
    }
    if (book.majorId) {
      const major = await Major.findById(book.majorId)
      if (!major) {
        return {
          status: 404,
          message: 'Major not found',
        }
      }
    }
    const localImagePath = path.join('uploads/', path.basename(book.image))
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
    data.authorId = authorId

    fs.unlinkSync(localImagePath)

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
const uploadToCloudinary = async (filePath, resourceType = 'image') => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      filePath,
      { resource_type: resourceType },
      (error, result) => {
        if (error) {
          reject(error)
        } else {
          resolve(result.secure_url)
        }
      }
    )
  })
}

const addChapter = async (chapter) => {
  try {
    const content = await Content.findById(chapter.contentId)
    if (!chapter.title) {
      chapter.title = `Chapter ${
        (content.numberOfChapter ? content.numberOfChapter : 0) + 1
      }`
    }

    const pdfFilePath = path.join('uploads', path.basename(chapter.file.path))

    const pdfData = fs.readFileSync(pdfFilePath)

    const pdfDoc = await PDFDocument.load(pdfData)
    const numPages = pdfDoc.getPages().length

    let imagePaths = []
    let textPaths = []

    const options = {
      format: 'png',
      out_dir: path.dirname(pdfFilePath),
      out_prefix: path.basename(pdfFilePath, path.extname(pdfFilePath)),
    }

    await pdfPoppler.convert(pdfFilePath, options)

    const imageFiles = fs
      .readdirSync(path.dirname(pdfFilePath))
      .filter(
        (file) => file.startsWith(options.out_prefix) && file.endsWith('.png')
      )

    for (const imageFile of imageFiles) {
      const imageFilePath = path.join(path.dirname(pdfFilePath), imageFile)
      const imageUrl = await uploadToCloudinary(imageFilePath)
      imagePaths.push(imageUrl)

      fs.unlinkSync(imageFilePath)
    }

    fs.unlinkSync(pdfFilePath)

    const newChapter = new Chapter({
      contentId: chapter.contentId,
      title: chapter.title,
      text: textPaths,
      images: imagePaths,
      numberOfPage: numPages,
      status: 'ACTIVE',
    })

    const chapterData = await Chapter.create(newChapter)
    content.numberOfChapter += 1
    const result = await content.save()
    if (!result) {
      return {
        status: 500,
        message: 'Error updating content',
      }
    }
    return {
      status: 200,
      message: 'Add chapter success',
      data: chapterData,
    }
  } catch (error) {
    console.error('Error processing chapter:', error.message)
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getBookById = async (id) => {
  try {
    const data = await Book.findById(id)
      .populate('content')
      .populate('authorId')
      .populate('categoryId')
      .populate('majorId')
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
const getDetailBookById = async (id) => {
  try {
    const data = await Book.findById(id)
      .populate({
        path: 'content',
      })
      .populate('authorId')
      .populate('categoryId')
      .populate('majorId')
    const chapters = await Chapter.find({ contentId: data.content._id })
    data.content.chapters = chapters

    return {
      status: 200,
      message: 'Get detail book by id success',
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
  search,
  getDetailBookById,
}

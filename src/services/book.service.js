import cloudinary from '../config/cloudinary'
import Book from '../config/nosql/models/book.model'
import Content from '../config/nosql/models/content.model'
import Chapter from '../config/nosql/models/chapter.model'
import Author from '../config/nosql/models/author.model'
import Category from '../config/nosql/models/category.model'
import Major from '../config/nosql/models/major.model'
import BookMark from '../config/nosql/models/book-mark.model'
import Review from '../config/nosql/models/review.model'
import Notify from '../config/nosql/models/notify.model'
import FollowList from '../config/nosql/models/follow-list.model'
import HotSearch from '../config/nosql/models/hot-search.model'
import fs from 'fs'
import path from 'path'
import { PDFDocument } from 'pdf-lib'
import pdfParse from 'pdf-parse'
import pdfPoppler from 'pdf-poppler'
import gTTS from 'gtts'

const create = async (book) => {
  try {
    if (!book.title || !book.image || !book.type) {
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
    const bookData = new Book({
      ...book,
      image: imagePath.secure_url,
      price: book.price ? book.price : 0,
      status: Number(book.price) > 0 ? 'UNPUBLISH' : 'PUBLISH',
      createDate: new Date(),
    })

    const data = await Book.create(bookData)

    const content = new Content({
      bookId: data._id,
      numberOfChapter: 0,
      chapters: [],
    })

    const contentData = await Content.create(content)

    const bookUpdate = await Book.findById(data._id)
    bookUpdate.content = contentData._id
    await bookUpdate.save()

    const review = new Review({
      bookId: data._id,
      totalLike: 0,
      totalView: 0,
      comments: [],
      rate: 0,
      rating: [],
    })
    const reviewResponse = await Review.create(review)
    data.review = reviewResponse._id
    await data.save()

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
const uploadMp3ToCloudinary = async (filePath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      filePath,
      { resource_type: 'video' },
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
    // Check if chapter title is empty
    const content = await Content.findById(chapter.contentId)
    if (!chapter.title) {
      chapter.title = `Chapter ${
        (content.numberOfChapter ? content.numberOfChapter : 0) + 1
      }`
    }

    // Read PDF file
    const pdfFilePath = path.join('uploads', path.basename(chapter.file.path))
    const pdfData = fs.readFileSync(pdfFilePath)

    // Parse PDF text
    const pdfText = await pdfParse(pdfData)
    const textPages = pdfText.text.split('\n\n')

    const mp3Paths = []
    let imagePaths = []

    // Process each page, get json text and convert to mp3, upload to cloudinary, get link
    const bookType = await getBookType(chapter.contentId)
    if (bookType === 'VOICE') {
      for (const [index, text] of textPages.entries()) {
        const cleanText = text.trim()
        if (cleanText.length === 0) {
          console.warn(`Page ${index + 1} is empty or contains invalid text.`)
          continue
        }

        const mp3FilePath = path.join('uploads', `page-${index + 1}.mp3`)
        const gtts = new gTTS(cleanText, 'vi')

        await new Promise((resolve, reject) => {
          gtts.save(mp3FilePath, (err) => {
            if (err) reject(err)
            else resolve()
          })
        })
        const result = await uploadMp3ToCloudinary(mp3FilePath)
        mp3Paths.push(result)
        fs.unlinkSync(mp3FilePath)
      }
    }
    const pdfDoc = await PDFDocument.load(pdfData)
    const numPages = pdfDoc.getPages().length

    // Convert PDF to images, upload to cloudinary, get link
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

    // Delete PDF file after processing
    fs.unlinkSync(pdfFilePath)

    const newChapter = new Chapter({
      bookId: content.bookId,
      contentId: chapter.contentId,
      title: chapter.title,
      text: textPages,
      images: imagePaths,
      mp3s: mp3Paths,
      numberOfPage: numPages,
      status: 'ACTIVE',
    })

    const chapterData = await Chapter.create(newChapter)
    content.numberOfChapter += 1
    const result = await content.save()

    await sendAddedChapterNotification(chapterData, content.bookId)

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
      .populate({
        path: 'review',
        populate: {
          path: 'comments',
          populate: {
            path: 'user',
          },
        },
      })

    const chapters = await Chapter.find({
      contentId: data.content._id,
    })
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
const getBookType = async (contentId) => {
  try {
    const content = await Content.findById(contentId)
    const book = await Book.findById(content.bookId)
    if (!book) {
      return null
    }
    return book.type
  } catch (error) {
    return null
  }
}
const createUserBookMark = async (userId, bookId) => {
  try {
    const bookMark = await BookMark.findOne({
      userId: userId,
    })
    if (bookMark) {
      if (bookMark.books.includes(bookId)) {
        return {
          status: 400,
          message: 'Book already bookmarked',
        }
      }
      bookMark.books.push(bookId)
      const data = await bookMark.save()
      return {
        status: 200,
        message: 'Create user book mark success',
        data: data,
      }
    } else {
      const newBookMark = new BookMark({
        userId: userId,
        books: [bookId],
      })
      const data = await BookMark.create(newBookMark)
      return {
        status: 200,
        message: 'Create user book mark success',
        data: data,
      }
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const updateUserBookMark = async (userId, bookId) => {
  try {
    const bookMark = await BookMark.findOne({
      userId: userId,
    })
    if (bookMark) {
      if (bookMark.books.includes(bookId)) {
        bookMark.books = bookMark.books.filter((id) => id !== bookId)
        const data = await bookMark.save()
        return {
          status: 200,
          message: 'Update user book mark success',
          data: data,
        }
      } else {
        return {
          status: 400,
          message: 'Book not bookmarked',
        }
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
const getUserBookMark = async (userId) => {
  try {
    const bookMark = await BookMark.findOne({
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
const getTopViewedBooks = async () => {
  try {
    const books = await Book.find()
      .populate('content')
      .populate('authorId')
      .populate('categoryId')
      .populate('majorId')
      .populate('review')
      .sort({ 'content.totalView': -1 })
      .limit(10)
    return {
      status: 200,
      message: 'Get top viewed books success',
      data: books,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getDetailChapterById = async (id) => {
  try {
    const data = await Chapter.findById(id)
      .populate({
        path: 'comments',
        populate: 'user',
      })
      .lean()
    const allChapters = await Chapter.find({
      contentId: data.contentId,
    })
    data.allChapters = allChapters
    return {
      status: 200,
      message: 'Get detail chapter by id success',
      data: data,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getRelatedBooks = async (id) => {
  try {
    const book = await Book.findById(id)
    if (!book) {
      return {
        status: 404,
        message: 'Book not found',
      }
    }

    const books = await Book.find({
      $or: [{ categoryId: book.categoryId }, { authorId: book.authorId }],
      _id: { $ne: book._id },
    })
      .populate([
        { path: 'authorId' },
        { path: 'categoryId' },
        { path: 'majorId' },
        { path: 'review' },
      ])
      .limit(10)
      .lean()

    return {
      status: 200,
      message: 'Get related books success',
      data: books,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const findBooksByTextInput = async (text) => {
  try {
    const books = await Book.aggregate([
      {
        $lookup: {
          from: 'authors',
          localField: 'authorId',
          foreignField: '_id',
          as: 'authorId',
        },
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'categoryId',
          foreignField: '_id',
          as: 'categoryId',
        },
      },
      {
        $lookup: {
          from: 'majors',
          localField: 'majorId',
          foreignField: '_id',
          as: 'majorId',
        },
      },
      {
        $lookup: {
          from: 'reviews',
          localField: '_id',
          foreignField: 'bookId',
          as: 'review',
        },
      },
      {
        $match: {
          $or: [
            { title: { $regex: text, $options: 'i' } },
            { 'author.name': { $regex: text, $options: 'i' } },
            { 'category.name': { $regex: text, $options: 'i' } },
          ],
        },
      },
      {
        $project: {
          title: 1,
          // author: { $arrayElemAt: ['$author.name', 0] },
          // category: { $arrayElemAt: ['$category.name', 0] },
          // major: { $arrayElemAt: ['$major.name', 0] },
          authorId: 1,
          categoryId: 1,
          majorId: 1,
          review: 1,
          image: 1,
          type: 1,
          createDate: 1,
          price: 1,
        },
      },
    ])
      .limit(10)
      .exec()

    const hotSearch = await HotSearch.findOne({ keyword: text })
    if (hotSearch) {
      hotSearch.searchCount += 1
      const trendingKeywords = await HotSearch.find()
        .sort({ searchCount: -1 })
        .limit(10)
      if (trendingKeywords.includes(hotSearch)) {
        hotSearch.isTrending = true
      }
      await hotSearch.save()
    } else {
      const newHotSearch = new HotSearch({
        keyword: text,
        searchCount: 1,
      })
      await HotSearch.create(newHotSearch)
    }

    return {
      status: 200,
      message: 'Find books by text input success',
      data: books,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const sendAddedChapterNotification = async (chapter, bookId) => {
  console.log('sendAddedChapterNotification', chapter, bookId)
  try {
    const listFollowers = await FollowList.find({
      books: { $in: [bookId] },
    }).select('userId')

    const book = await Book.findById(bookId)
    if (!book) {
      return {
        status: 404,
        message: 'Book not found',
      }
    }
    console.log('listFollowers', listFollowers)

    if (listFollowers) {
      listFollowers.forEach(async (follower) => {
        const notify = new Notify({
          userId: follower.userId,
          bookId: bookId,
          chapterId: chapter._id,
          message: `${book.title} đã có chương mới: ${chapter.title}`,
          status: 'UNREAD',
          createDate: new Date(),
        })
        console.log('notify', notify)
        await Notify.create(notify)
      })
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getBookByCategory = async (categoryId) => {
  try {
    const books = await Book.find({ categoryId: categoryId })
      .populate('content')
      .populate('authorId')
      .populate('categoryId')
      .populate('majorId')
      .populate('review')
    return {
      status: 200,
      message: 'Get book by category success',
      data: books,
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}
const getNewBooks = async () => {
  try {
    const books = await Book.find()
      .populate('content')
      .populate('authorId')
      .populate('categoryId')
      .populate('majorId')
      .populate('review')
      .sort({ 'content.updateAt': -1 })
      .limit(10)
    return {
      status: 200,
      message: 'Get new books success',
      data: books,
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
  getBookType,
  createUserBookMark,
  updateUserBookMark,
  getUserBookMark,
  getTopViewedBooks,
  getDetailChapterById,
  getRelatedBooks,
  findBooksByTextInput,
  getBookByCategory,
  getNewBooks,
}

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

const create = async (book) => {
  try {
    // Kiểm tra authorId, categoryId, và majorId
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

    // Upload ảnh lên Cloudinary và xử lý đường dẫn ảnh
    const localImagePath = path.join('uploads/', path.basename(book.image))
    const imagePath = await cloudinary.uploader.upload(book.image, {
      public_id: book.title,
    })

    // Tạo đối tượng sách (không lưu vào DB ngay)
    const bookData = new Book({
      ...book,
      image: imagePath.secure_url,
      price: book.price ? book.price : 0,
      status: book.status ? book.status : 'ISWRITE',
      createDate: new Date(),
    })

    // Tạo đối tượng content và lưu content trước
    const content = new Content({
      bookId: bookData._id,
      numberOfChapter: 0,
      chapters: [],
    })
    const contentData = await Content.create(content)

    // Gán contentId vào sách trước khi lưu
    bookData.content = contentData._id
    const data = await bookData.save()

    // Tạo review và lưu
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

    // Xóa ảnh tạm
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
    book.active = false
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

    // Check img to set type for the book
    const check = await checkPdfContent(pdfFilePath, chapter.contentId)
    if (!check) {
      return {
        status: 400,
        message: 'Error: conflic type of pdf file',
      }
    }

    // Parse PDF text
    const pdfText = await pdfParse(pdfData)
    const textPages = pdfText.text.split('\n\n')

    const mp3Paths = []
    let imagePaths = []

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
const addMultipleChapters = async (
  contentId,
  file,
  chapterTitles,
  chapterPaginations
) => {
  try {
    // Đọc file PDF lớn
    const pdfFilePath = path.join('uploads', path.basename(file.path))
    const pdfData = fs.readFileSync(pdfFilePath)

    //Kiểm tra file có lưu ảnh ko để đổi type
    const result = await checkPdfContent(pdfFilePath, contentId)
    if (!result) {
      return {
        status: 400,
        message: 'Conflic book type by this chapter',
      }
    }

    // Tải tài liệu PDF
    const pdfDoc = await PDFDocument.load(pdfData)

    for (let i = 0; i < chapterPaginations.length; i++) {
      const pages = chapterPaginations[i] // Mảng chứa các trang của chương
      const chapterTitle = chapterTitles[i] || `Chapter ${i + 1}`

      // Tạo một tài liệu PDF mới cho từng chương
      const chapterDoc = await PDFDocument.create()

      // Sao chép các trang từ pdfDoc sang chapterDoc
      const copiedPages = await chapterDoc.copyPages(
        pdfDoc,
        pages.map((p) => p - 1)
      )

      // Thêm từng trang đã sao chép vào chapterDoc
      copiedPages.forEach((page) => {
        chapterDoc.addPage(page)
      })

      // Lưu file PDF cho từng chương tạm thời
      const chapterPdfPath = path.join('uploads', `chapter_${i + 1}.pdf`)
      const chapterPdfBytes = await chapterDoc.save()
      fs.writeFileSync(chapterPdfPath, chapterPdfBytes)

      // Gọi lại API addChapter cho chương đã tách ra
      await addChapter({
        contentId,
        title: chapterTitle,
        file: { path: chapterPdfPath },
      })
    }

    // Xóa file PDF gốc
    fs.unlinkSync(pdfFilePath)

    return {
      status: 200,
      message: 'All chapters added successfully',
    }
  } catch (error) {
    console.error('Error splitting PDF and adding chapters:', error.message)
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
    query.active = true

    const books = await Book.find(query)
      .populate([{ path: 'authorId' }, { path: 'categoryId' }])
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
    const topReviews = await Review.find()
      .sort({ totalView: -1 })
      .limit(10)
      .select('_id bookId')

    const bookIds = topReviews.map((review) => review.bookId)

    const books = await Book.find({ _id: { $in: bookIds } })
      .populate('content')
      .populate('authorId')
      .populate('categoryId')
      .populate('majorId')
      .populate('review')

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
      active: true,
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
          active: true, // Thêm điều kiện active: true
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
    const books = await Book.find({ categoryId: categoryId, active: true })
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
    const books = await Book.find({ active: true })
      .populate('content')
      .populate('authorId')
      .populate('categoryId')
      .populate('majorId')
      .populate('review')
      .sort({ createdAt: -1 })
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
const checkPdfContent = async (filePath, contentId) => {
  try {
    // Đọc tệp PDF
    const pdfData = fs.readFileSync(filePath)
    const pdfDoc = await PDFDocument.load(pdfData)

    let hasImages = false

    // Lặp qua tất cả các trang trong PDF
    const pages = pdfDoc.getPages()
    for (const page of pages) {
      // Kiểm tra các đối tượng trên trang
      const { xObject } = page.node

      // Nếu không có xObject, bỏ qua trang này
      if (!xObject) continue

      // Duyệt qua các đối tượng trong xObject
      for (const obj of Object.values(xObject)) {
        if (obj instanceof PDFImage) {
          hasImages = true
          break // Nếu tìm thấy hình ảnh, không cần kiểm tra nữa
        }
      }

      if (hasImages) break // Dừng lại nếu tìm thấy hình ảnh
    }

    // Tìm kiếm Content theo contentId
    const content = await Content.findOne({ _id: contentId })
    if (!content) {
      throw new Error('Content ID not found!')
    }

    // Tìm sách theo content.bookId và cập nhật loại sách
    const book = await Book.findOne({ _id: content.bookId })
    if (!book) {
      throw new Error('Book ID not found!')
    }

    // Cập nhật type của sách dựa vào nội dung PDF
    if (book.type === 'NORMAL') {
      book.type = hasImages ? 'IMAGE' : 'VOICE' // Cập nhật loại sách
    } else {
      if (book.type !== 'IMAGE' && hasImages) {
        return false
      }
    }

    // Lưu cập nhật của sách
    await book.save()
    return true
  } catch (error) {
    console.error('Check file PDF failed:', error.message)
    throw new Error(`Check file PDF failed: ${error.message}`)
  }
}
const deleteChapter = async (chapterId) => {
  try {
    const result = await Chapter.findByIdAndDelete(chapterId)
    if (result) {
      await Content.findOneAndUpdate(
        { chapters: chapterId },
        {
          $pull: { chapters: chapterId },
          $inc: { numberOfChapter: -1 },
        }
      )
    }

    return {
      status: 200,
      message: 'Delete chapter successfully!',
    }
  } catch (error) {
    console.error('Delete chapter fail:', error.message)
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
  addMultipleChapters,
  deleteChapter,
}

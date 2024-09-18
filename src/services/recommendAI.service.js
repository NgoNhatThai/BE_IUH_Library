import fs from 'fs'
import * as tf from '@tensorflow/tfjs-node'
import History from '../config/nosql/models/history.model'
import Book from '../config/nosql/models/book.model'
const natural = require('natural')

const loadModel = async () => {
  try {
    const model = await tf.loadLayersModel('file://model.json')

    return model
  } catch (error) {
    console.error('Error loading model:', error.message)
    return {
      status: 500,
      message: error.message,
    }
  }
}

// Hàm để xử lý mô tả sách thành vector
function processTextToVector(text) {
  const tokenizer = new natural.TfIdf()
  tokenizer.addDocument(text)
  let vector = []
  tokenizer.tfidfs(text, (i, measure) => {
    vector.push(measure)
  })
  return vector
}

const preprocessHistory = async (history) => {
  try {
    let trainingData = []
    const userBookFeatures = []
    const tokenizer = new natural.WordTokenizer()

    // Duyệt qua từng sách trong lịch sử người dùng
    for (let book of history.books) {
      const bookData = await Book.findById(book.bookId) // Lấy thông tin chi tiết về sách

      // // Token hóa mô tả sách và giới hạn số lượng từ
      // const descriptionTokens = tokenizer
      //   .tokenize(bookData.desc ?? 'None')
      //   .slice(0, 50) // Giới hạn mô tả tối đa 50 từ

      // // Lấy danh mục và tác giả của sách
      // const category = bookData.categoryId
      // const author = bookData.authorId

      // // Đưa các đặc trưng vào mảng kết quả
      // userBookFeatures.push({
      //   description: descriptionTokens.join(' '),
      //   category,
      //   author,
      // })
      const descriptionVector = processTextToVector(bookData.desc)
      const categoryVector = processTextToVector(bookData.categoryId)
      const authorVector = processTextToVector(bookData.authorId)

      const combinedFeatures = [
        ...descriptionVector,
        ...categoryVector,
        ...authorVector,
      ]

      userBookFeatures.push(combinedFeatures)
    }

    // Có thể bổ sung thêm các đặc trưng khác từ lịch sử nếu cần
    return userBookFeatures
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}

const filterUnreadBooks = (books, userHistory) => {
  try {
    const readBookIds = userHistory.books.map((book) => book.bookId)
    return books.filter((book) => !readBookIds.includes(book._id))
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    }
  }
}

const suggestBooks = async (userId) => {
  try {
    const model = await loadModel() // Hàm này tải mô hình từ file hệ thống

    const userHistory = await History.findOne({ userId }) // Lấy lịch sử của người dùng

    // Tiền xử lý lịch sử thành dạng đầu vào cho mô hình
    const inputFeatures = await preprocessHistory(userHistory)

    console.log('Preprocessed features:', inputFeatures)

    // Biến đổi các đặc trưng thành tensors
    const inputTensor = tf.tensor2d(inputFeatures, [
      inputFeatures.length,
      inputFeatures[0].length,
    ])
    // const labelTensor = tf.tensor2d(labels, [labels.length, 1])

    console.log('inputTensor shape:', inputTensor.shape)

    // Dự đoán sách từ mô hình
    const predictions = model.predict(inputTensor)

    // Chuyển đổi tensor dự đoán thành mảng
    const predictionsArray = await predictions.array()
    console.log('Predictions:', predictionsArray)

    // Giải mã các dự đoán thành danh sách ID sách được đề xuất
    // const recommendedBooks = decodePredictions(predictionsArray)
    const recommendedBooks = await suggestBooksBasedOnPredictions(
      predictionsArray
    )

    return filterUnreadBooks(recommendedBooks, userHistory)
  } catch (error) {
    console.error('Error suggesting books:', error.message)
    return {
      status: 500,
      message: error.message,
    }
  }
}

// Sau khi có kết quả, chúng ta cần giải mã dự đoán để lấy ID sách
const preprocessBookForComparison = async (bookId) => {
  const bookData = await Book.findById(bookId)
  const tokenizer = new natural.WordTokenizer()

  const descriptionTokens = tokenizer
    .tokenize(bookData.desc ?? 'None')
    .slice(0, 50)

  const categoryVector = processTextToVector(bookData.categoryId)
  const authorVector = processTextToVector(bookData.authorId)

  return [
    ...processTextToVector(descriptionTokens.join(' ')),
    ...categoryVector,
    ...authorVector,
  ]
}

const prepareAllBookVectors = async () => {
  const books = await Book.find() // Lấy tất cả sách từ cơ sở dữ liệu
  const bookVectors = {}

  for (const book of books) {
    const vector = await preprocessBookForComparison(book._id)
    bookVectors[book._id] = vector
  }

  return bookVectors
}

const cosineSimilarity = (vecA, vecB) => {
  const dotProduct = vecA.reduce(
    (sum, value, index) => sum + value * vecB[index],
    0
  )
  const magnitudeA = Math.sqrt(vecA.reduce((sum, value) => sum + value ** 2, 0))
  const magnitudeB = Math.sqrt(vecB.reduce((sum, value) => sum + value ** 2, 0))
  return dotProduct / (magnitudeA * magnitudeB)
}

const getSimilarBooks = (bookVectors, predictionVector) => {
  const similarities = Object.entries(bookVectors).map(([bookId, vector]) => ({
    bookId,
    similarity: cosineSimilarity(vector, predictionVector),
  }))

  similarities.sort((a, b) => b.similarity - a.similarity) // Sắp xếp theo độ tương đồng giảm dần

  return similarities
}

const suggestBooksBasedOnPredictions = async (predictions) => {
  const bookVectors = await prepareAllBookVectors() // Lấy vector của tất cả sách trong hệ thống

  // Giả sử bạn có một predictionVector cho sách gợi ý
  const predictionVector = predictions[0] // Chọn vector phù hợp từ dự đoán

  const similarBooks = getSimilarBooks(bookVectors, predictionVector)

  // Lọc các sách đã đọc (nếu cần) và trả về sách gợi ý
  return similarBooks.map(({ bookId }) => bookId)
}

module.exports = {
  suggestBooks,
}

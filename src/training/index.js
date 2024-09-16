const tf = require('@tensorflow/tfjs')
const mongoose = require('mongoose')
const History = require('../config/nosql/models/history.model')
const Book = require('../config/nosql/models/book.model')
const _ = require('lodash')
const natural = require('natural')
const fs = require('fs')

require('dotenv').config()

const username = encodeURIComponent(process.env.MONGOOSE_HOST)
const password = encodeURIComponent(process.env.MONGOOSE_PASSWORD)

const uri = `mongodb+srv://${username}:${password}@cluster0.prbola2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
}

// Kết nối MongoDB
async function connectMongoDB() {
  await mongoose
    .connect(uri, clientOptions)
    .then(() => {
      console.log('Kết nối MongoDB Cloud thành công')

      // Thực hiện lệnh ping để kiểm tra kết nối
      return mongoose.connection.db.admin().command({ ping: 1 })
    })
    .then(() => {
      console.log('Ping MongoDB thành công')
    })
    .catch((error) => {
      console.error('Kết nối MongoDB Cloud thất bại:', error)
    })
}

const tokenizer = new natural.WordTokenizer()

// Hàm để lấy dữ liệu từ MongoDB
async function fetchTrainingData() {
  await connectMongoDB()

  const histories = await History.find().populate(
    'books lastReadBook like follow rating.bookId comment'
  )
  let trainingData = []
  console.log('Lấy dữ liệu lịch sử từ MongoDB thành công')

  for (let history of histories) {
    const userBooks = history.books
    let userBookFeatures = []

    for (let book of userBooks) {
      const bookData = await Book.findById(book.bookId) // Lấy thông tin chi tiết về sách

      // Tạo đặc trưng từ mô tả, danh mục và tác giả
      const descriptionTokens = tokenizer
        .tokenize(bookData.desc ?? 'None')
        .slice(0, 50) // Giới hạn mô tả
      const category = bookData.categoryId
      const author = bookData.authorId

      userBookFeatures.push({
        description: descriptionTokens.join(' '),
        category,
        author,
      })
    }

    trainingData.push({
      userId: history.userId,
      books: userBookFeatures,
      like: history.like,
      follow: history.follow,
      rating: history.rating,
    })
  }

  return trainingData
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

async function loadModel() {
  try {
    const model = await tf.loadLayersModel(
      'file://./models/recommendation-model/model.json'
    )
    console.log('Mô hình đã được tải thành công.')
    return model
  } catch (error) {
    console.error('Lỗi khi tải mô hình')
    return null
  }
}

// Hàm để tạo model
function createModel(inputShape) {
  const model = tf.sequential()

  model.add(
    tf.layers.dense({
      inputShape: [inputShape],
      units: 128,
      activation: 'relu',
    })
  )
  model.add(tf.layers.dense({ units: 64, activation: 'relu' }))
  model.add(tf.layers.dense({ units: 32, activation: 'relu' }))
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }))

  model.compile({
    optimizer: tf.train.adam(),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
  })

  return model
}

// Hàm để huấn luyện model
async function trainModel() {
  const data = await fetchTrainingData()

  // Chuyển đổi dữ liệu thành vector
  let inputFeatures = []
  let labels = []

  for (let user of data) {
    user.books.forEach((book) => {
      const descriptionVector = processTextToVector(book.description)
      const categoryVector = processTextToVector(book.category)
      const authorVector = processTextToVector(book.author)

      const combinedFeatures = [
        ...descriptionVector,
        ...categoryVector,
        ...authorVector,
      ]

      inputFeatures.push(combinedFeatures)
      labels.push(user.rating ? (user.rating.length > 0 ? 1 : 0) : 0)
    })
  }

  // Kiểm tra dữ liệu inputFeatures và labels
  console.log('inputFeatures:', inputFeatures)
  console.log('inputFeatures length:', inputFeatures.length)
  console.log('inputFeatures[0] length:', inputFeatures[0]?.length)
  console.log('labels:', labels)
  console.log('labels length:', labels.length)

  if (inputFeatures.length === 0 || labels.length === 0) {
    console.error('Không có dữ liệu để huấn luyện mô hình.')
    return
  }

  // Kiểm tra kích thước trước khi tạo tensor
  if (inputFeatures[0]?.length > 0) {
    const inputTensor = tf.tensor2d(inputFeatures, [
      inputFeatures.length,
      inputFeatures[0].length,
    ])
    const labelTensor = tf.tensor2d(labels, [labels.length, 1])

    // Load mô hình đã huấn luyện nếu có
    let model = await loadModel()
    if (!model) {
      // Nếu mô hình không tồn tại, tạo mô hình mới và huấn luyện
      model = createModel(inputTensor.shape[1])

      await model.fit(inputTensor, labelTensor, {
        epochs: 10,
        batchSize: 32,
        validationSplit: 0.2,
      })

      console.log('Huấn luyện mô hình thành công.')

      // Lưu mô hình
      //await model.save(`file://./models/recommendation-model`)

      const modelJson = model.toJSON()
      fs.writeFileSync(
        '../BE_library_IUH/src/training/models/recommendation-model/model.json',
        JSON.stringify(modelJson)
      )

      console.log('Model đã được huấn luyện và lưu lại.')
    } else {
      console.log('Sử dụng mô hình đã được tải.')
      // Tiếp tục sử dụng mô hình đã tải cho dự đoán hoặc huấn luyện tiếp theo
    }
  } else {
    console.error('Dữ liệu inputFeatures không hợp lệ.')
  }
}

trainModel().catch((err) => console.error(err))

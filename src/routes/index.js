import express from 'express'
import InitRoutesAuthentication from '../routes/auth.route'
import InitRoutesUsers from '../routes/user.route'
import InitRoutesBook from '../routes/book.route'
import InitRoutesImageUpload from '../routes/image_upload.route'

const router = express.Router()

const configRoutes = async (app) => {
  app.get('/health', (req, res) => {
    return res.status(200).send({
      status: 'OK',
      message: 'Server is up and running',
    })
  })
  app.use('/auth', InitRoutesAuthentication(router))
  app.use('/users', InitRoutesUsers(router))
  app.use('/book', InitRoutesBook(router))
  app.use('/image', InitRoutesImageUpload(router))
}

module.exports = configRoutes

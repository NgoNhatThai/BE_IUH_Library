import userMiddleware from '../middleware/user.middleware'
import bookController from '../controllers/book.controller'
import multer from 'multer'

const upload = multer({ dest: 'uploads/' })

const InitRoutesBook = (router) => {
  router
    .route('/create')
    .post(
      userMiddleware.checkJWT,
      upload.single('image'),
      bookController.create
    )
  router.route('/update').put(bookController.update)
  router.route('/remove/:id').delete(bookController.remove)
  router.route('/add-chapter/:id').put(bookController.addChapter)
  router.route('/get-book-by-id/:id').get(bookController.getBookById)
  router.route('/search').get(bookController.search)

  return router
}

module.exports = InitRoutesBook

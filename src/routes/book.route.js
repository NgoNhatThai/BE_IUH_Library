import userMiddleware from '../middleware/user.middleware'
import bookController from '../controllers/book.controller'
import upload from '../config/uploadConfig/index'

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
  router
    .route('/add-chapter')
    .post(
      userMiddleware.checkJWT,
      upload.single('file'),
      bookController.addChapter
    )
  router.route('/get-book-by-id/:id').get(bookController.getBookById)
  router.route('/search').get(bookController.search)
  router.route('/get-detail-book/:id').get(bookController.getDetailBookById)
  router.route('/get-book-type').get(bookController.getBookType)
  router.route('/get-book-review').get(bookController.getBookReview)
  router.route('/get-top-views-book').get(bookController.getTopViewedBooks)
  router
    .route('/get-detail-chapter/:id')
    .get(bookController.getDetailChapterById)

  return router
}

module.exports = InitRoutesBook

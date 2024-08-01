import userMiddleware from '../middleware/user.middleware'
import bookController from '../controllers/book.controller'

const InitRoutesBook = (router) => {
  router.route('/create').post(userMiddleware.checkJWT, bookController.create)
  router.route('/update').put(bookController.update)
  router.route('/remove/:id').delete(bookController.remove)
  router.route('/add-chapter/:id').put(bookController.addChapter)
  router.route('/get-book-by-id/:id').get(bookController.getBookById)
  router.route('/search').get(bookController.searchBook)

  return router
}

module.exports = InitRoutesBook

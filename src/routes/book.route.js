import userMiddleware from '../middleware/user.middleware'
import bookController from '../controllers/book.controller'

const InitRoutesBook = (router) => {
  router.route('/create').post(bookController.create)
  // .get(userMiddleware.checkJWT, chatController.getAccessChat);

  return router
}

module.exports = InitRoutesBook

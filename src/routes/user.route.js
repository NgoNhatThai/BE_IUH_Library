import userController from '../controllers/user.controller'
import userMiddleware from '../middleware/user.middleware'

const IntRoutesUsers = (router) => {
  router.route('/like').post(userMiddleware.checkJWT, userController.like)
  router.route('/read').post(userMiddleware.checkJWT, userController.read)
  router.route('/rate').post(userMiddleware.checkJWT, userController.rate)
  router.route('/comment').post(userMiddleware.checkJWT, userController.comment)
  router
    .route('/create-user-book-mark')
    .post(userMiddleware.checkJWT, userController.createUserBookMark)
  router
    .route('/update-user-book-mark')
    .post(userMiddleware.checkJWT, userController.updateUserBookMark)
  router
    .route('/get-user-book-mark')
    .get(userMiddleware.checkJWT, userController.getUserBookMark)
  router.route('/follow').post(userMiddleware.checkJWT, userController.follow)
  router
    .route('/get-follow-list')
    .get(userMiddleware.checkJWT, userController.getFollowList)

  return router
}

module.exports = IntRoutesUsers

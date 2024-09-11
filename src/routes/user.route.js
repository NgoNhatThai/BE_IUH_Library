import userController from '../controllers/user.controller'
import userMiddleware from '../middleware/user.middleware'

const IntRoutesUsers = (router) => {
  router.route('/like').post(userController.like)
  router.route('/read').post(userController.read)
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
  router
    .route('/get-notification')
    .get(userMiddleware.checkJWT, userController.getNotification)
  router
    .route('/update-notification-status')
    .post(userMiddleware.checkJWT, userController.updateNotificationStatus)
  router.route('/get-hot-search').get(userController.getHotSearch)
  router.route('/check-follow-book').get(userController.checkFollowBook)
  router.route('/un-follow').get(userController.unFollow)
  return router
}

module.exports = IntRoutesUsers

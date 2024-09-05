import adminController from '../controllers/admin.controller'
import userMiddleware from '../middleware/user.middleware'
const InitRouteAdmin = (route) => {
  route
    .route('/create-author')
    .post(userMiddleware.checkJWT, adminController.createAuthor)

  route
    .route('/update-author')
    .put(userMiddleware.checkJWT, adminController.createAuthor)

  route
    .route('/get-all-author')
    .get(userMiddleware.checkJWT, adminController.getAllAuthor)

  route
    .route('/create-category')
    .post(userMiddleware.checkJWT, adminController.createCategory)

  route.route('/get-all-category').get(adminController.getAllCategory)

  route
    .route('/create-major')
    .post(userMiddleware.checkJWT, adminController.createMajor)

  route.route('/get-all-major').get(adminController.getAllMajor)
  route
    .route('/create-config')
    .post(userMiddleware.checkJWT, adminController.createLibraryConfig)
  route.route('/get-config/:id').get(adminController.getLibraryConfig)

  return route
}
module.exports = InitRouteAdmin

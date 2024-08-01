const InitRouteAdmin = (route) => {
  route
    .route('/total-together')
    .get(userMiddleware.checkJWT, chatController.getTotalTogether)
  route.route('/login').post(adminMiddleware.checkJWT, adminController.login)
}

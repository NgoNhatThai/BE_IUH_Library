"use strict";

var _app = _interopRequireDefault(require("../controllers/app.controller"));
var _user = _interopRequireDefault(require("../middleware/user.middleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var InitRoutesAuthentication = function InitRoutesAuthentication(router) {
  router.route('/register').post(_app["default"].register);
  router.route('/login').post(_app["default"].login);
  router.route('/logout').post(_app["default"].logout);
  router.route('/check').post(_app["default"].check);
  router.route('/verify').post(_app["default"].verifyUser);
  router.route('/reset-password').post(_app["default"].resetPassword);
  router.route('/change-password').put(_user["default"].checkJWT, _app["default"].changePassword);
  return router;
};
module.exports = InitRoutesAuthentication;
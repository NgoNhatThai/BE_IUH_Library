"use strict";

var _user = _interopRequireDefault(require("../middleware/user.middleware"));
var _imageController = _interopRequireDefault(require("../controllers/image.controller.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var InitRoutesImageUpload = function InitRoutesImageUpload(router) {
  router.route('/upload').post(_user["default"].checkJWT, _imageController["default"].upload);
  return router;
};
module.exports = InitRoutesImageUpload;
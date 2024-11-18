"use strict";

var _admin = _interopRequireDefault(require("../controllers/admin.controller"));
var _user = _interopRequireDefault(require("../middleware/user.middleware"));
var _index = _interopRequireDefault(require("../config/uploadConfig/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var InitRouteAdmin = function InitRouteAdmin(route) {
  route.route('/create-author').post(_user["default"].checkJWT, _admin["default"].createAuthor);
  route.route('/update-author').put(_user["default"].checkJWT, _admin["default"].createAuthor);
  route.route('/get-all-author').get(_user["default"].checkJWT, _admin["default"].getAllAuthor);
  route.route('/create-category').post(_user["default"].checkJWT, _index["default"].single('image'), _admin["default"].createCategory);
  route.route('/get-all-category').get(_admin["default"].getAllCategory);
  route.route('/create-major').post(_user["default"].checkJWT, _admin["default"].createMajor);
  route.route('/get-all-major').get(_admin["default"].getAllMajor);
  route.route('/create-config').post(_user["default"].checkJWT, _admin["default"].createLibraryConfig);
  route.route('/get-config').get(_admin["default"].getLibraryConfig);
  route.route('/get-list-amount-request').get(_user["default"].checkJWT, _admin["default"].getListAmountRequest);
  route.route('/accept-amount-request').post(_user["default"].checkJWT, _admin["default"].acceptAmountRequest);
  route.route('/get-banks').get(_admin["default"].findAllBankFromThirdPartyVietQr);
  route.route('/config-bank-account').post(_user["default"].checkJWT, _admin["default"].configBankAccount);
  route.route('/get-bank-account').get(_admin["default"].getBankAccount);
  route.route('/reject-amount-request').post(_user["default"].checkJWT, _admin["default"].rejectAmountRequest);
  route.route('/get-all-user').get(_user["default"].checkJWT, _admin["default"].getAllUser);
  route.route('/search-user').get(_user["default"].checkJWT, _admin["default"].searchUser);
  return route;
};
module.exports = InitRouteAdmin;
"use strict";

var _user = _interopRequireDefault(require("../middleware/user.middleware"));
var _book = _interopRequireDefault(require("../controllers/book.controller"));
var _recommend = _interopRequireDefault(require("../controllers/recommend.controller"));
var _index = _interopRequireDefault(require("../config/uploadConfig/index"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var InitRoutesBook = function InitRoutesBook(router) {
  router.route('/create').post(_user["default"].checkJWT, _index["default"].single('image'), _book["default"].create);
  router.route('/update').put(_book["default"].update);
  router.route('/remove/:id')["delete"](_book["default"].remove);
  router.route('/add-chapter').post(_user["default"].checkJWT, _index["default"].single('file'), _book["default"].addChapter);
  router.route('/get-book-by-id/:id').get(_book["default"].getBookById);
  router.route('/search').get(_book["default"].search);
  router.route('/get-detail-book/:id').get(_book["default"].getDetailBookById);
  router.route('/get-book-type').get(_book["default"].getBookType);
  router.route('/get-book-review').get(_book["default"].getBookReview);
  router.route('/get-top-views-book').get(_book["default"].getTopViewedBooks);
  router.route('/get-detail-chapter/:id').get(_book["default"].getDetailChapterById);
  router.route('/get-related-books/:id').get(_book["default"].getRelatedBooks);
  router.route('/find-books-by-text-input').get(_book["default"].findBooksByTextInput);
  router.route('/get-book-by-category/:id').get(_book["default"].getBookByCategory);
  router.route('/get-new-books').get(_book["default"].getNewBooks);
  router.route('/get-recommend-books').get(_recommend["default"].recommendBook);
  router.route('/add-multi-chapters').post(_user["default"].checkJWT, _index["default"].single('file'), _book["default"].addMultipleChapters);
  router.route('/add-chapter-by-outline').post(_user["default"].checkJWT, _index["default"].single('file'), _book["default"].addMultiChapterByOutline);
  router.route('/delete-chapter').post(_user["default"].checkJWT, _book["default"].deleteChapter);
  return router;
};
module.exports = InitRoutesBook;
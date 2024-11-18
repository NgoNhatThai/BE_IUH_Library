"use strict";

var _user = _interopRequireDefault(require("../controllers/user.controller"));
var _user2 = _interopRequireDefault(require("../middleware/user.middleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var IntRoutesUsers = function IntRoutesUsers(router) {
  router.route('/like').post(_user["default"].like);
  router.route('/read').post(_user["default"].read);
  router.route('/rate').post(_user2["default"].checkJWT, _user["default"].rate);
  router.route('/comment').post(_user2["default"].checkJWT, _user["default"].comment);
  router.route('/create-user-book-mark').post(_user2["default"].checkJWT, _user["default"].createUserBookMark);
  router.route('/update-user-book-mark').post(_user2["default"].checkJWT, _user["default"].updateUserBookMark);
  router.route('/get-user-book-mark').get(_user2["default"].checkJWT, _user["default"].getUserBookMark);
  router.route('/follow').post(_user2["default"].checkJWT, _user["default"].follow);
  router.route('/get-follow-list').get(_user2["default"].checkJWT, _user["default"].getFollowList);
  router.route('/get-notification').get(_user2["default"].checkJWT, _user["default"].getNotification);
  router.route('/update-notification-status').post(_user2["default"].checkJWT, _user["default"].updateNotificationStatus);
  router.route('/get-hot-search').get(_user["default"].getHotSearch);
  router.route('/check-follow-book').get(_user["default"].checkFollowBook);
  router.route('/un-follow').get(_user["default"].unFollow);
  router.route('/comment-in-chapter').post(_user2["default"].checkJWT, _user["default"].commentInChapter);
  router.route('/get-user-history').get(_user2["default"].checkJWT, _user["default"].getUserHistory);
  router.route('/request-amount').post(_user2["default"].checkJWT, _user["default"].requestAmount);
  router.route('/buy-book').post(_user2["default"].checkJWT, _user["default"].buyBook);
  router.route('/get-user-amount').get(_user2["default"].checkJWT, _user["default"].getUserAmount);
  router.route('/get-user-info').get(_user2["default"].checkJWT, _user["default"].getUserInfo);
  router.route('/get-pending-request').get(_user2["default"].checkJWT, _user["default"].getPendingRequest);
  router.route('/cancel-pending-request').post(_user2["default"].checkJWT, _user["default"].cancelPendingRequest);
  router.route('/get-bought-book').get(_user2["default"].checkJWT, _user["default"].getBoughtBook);
  router.route('/get-user-read-history').get(_user2["default"].checkJWT, _user["default"].getUserReadHistory);
  return router;
};
module.exports = IntRoutesUsers;
"use strict";

var _overview = _interopRequireDefault(require("../controllers/overview.controller"));
var _user = _interopRequireDefault(require("../middleware/user.middleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var InitRouteOverview = function InitRouteOverview(route) {
  route.route('/transaction-overview').get(_user["default"].checkJWT, _overview["default"].getTransactionOverview);
  route.route('/revenue-over-time').get(_user["default"].checkJWT, _overview["default"].getRevenueOverTime);
  route.route('/top-users-by-deposit').get(_user["default"].checkJWT, _overview["default"].getTopUsersByDepositAmount);
  route.route('/average-processing-time').get(_user["default"].checkJWT, _overview["default"].getAverageProcessingTime);
  route.route('/user-deposit-rate').get(_user["default"].checkJWT, _overview["default"].getUserDepositRate);
  route.route('/top-view').get(_user["default"].checkJWT, _overview["default"].getTopBooksByViews);
  route.route('/export-excel-file').get(_user["default"].checkJWT, _overview["default"].exportExcelFile);
  route.route('/get-read-time-overview').get(_user["default"].checkJWT, _overview["default"].getReadTimeOverviewData);
  route.route('/update-read-time').post(_user["default"].checkJWT, _overview["default"].updateReadTime);
  return route;
};
module.exports = InitRouteOverview;
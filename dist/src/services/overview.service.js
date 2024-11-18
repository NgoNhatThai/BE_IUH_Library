"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _requestAmount = _interopRequireDefault(require("../config/nosql/models/requestAmount.model"));
var _amount = _interopRequireDefault(require("../config/nosql/models/amount.model"));
var _user = _interopRequireDefault(require("../config/nosql/models/user.model"));
var _viewHistory = _interopRequireDefault(require("../config/nosql/models/view-history.model"));
var _readtime = _interopRequireDefault(require("../config/nosql/models/readtime.model"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Doanh thu theo trạng thái giao dịch
var getTransactionOverview = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(startDate, endDate, filters) {
    var userId, bankConfigId, minAmount, maxAmount, query, pendingTransactions, approvedTransactions, rejectedTransactions, tableData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          userId = filters.userId, bankConfigId = filters.bankConfigId, minAmount = filters.minAmount, maxAmount = filters.maxAmount; // Tạo điều kiện lọc động dựa trên các tiêu chí
          query = {
            date: {
              $gte: new Date(startDate),
              $lte: new Date(endDate)
            }
          };
          if (userId) query.userId = userId;
          if (bankConfigId) query.bankConfigId = bankConfigId;
          if (minAmount !== undefined || maxAmount !== undefined) {
            query.amount = {};
            if (minAmount !== undefined) query.amount.$gte = minAmount;
            if (maxAmount !== undefined) query.amount.$lte = maxAmount;
          }
          _context.next = 8;
          return _requestAmount["default"].countDocuments(_objectSpread(_objectSpread({}, query), {}, {
            status: 'PENDING'
          }));
        case 8:
          pendingTransactions = _context.sent;
          _context.next = 11;
          return _requestAmount["default"].countDocuments(_objectSpread(_objectSpread({}, query), {}, {
            status: 'APPROVED'
          }));
        case 11:
          approvedTransactions = _context.sent;
          _context.next = 14;
          return _requestAmount["default"].countDocuments(_objectSpread(_objectSpread({}, query), {}, {
            status: 'REJECTED'
          }));
        case 14:
          rejectedTransactions = _context.sent;
          _context.next = 17;
          return _requestAmount["default"].find(query).populate('userId');
        case 17:
          tableData = _context.sent;
          return _context.abrupt("return", {
            labels: ['Đang chờ', 'Đã duyệt', 'Từ chối'],
            datasets: [{
              label: 'Thống kê giao dịch nạp tiền',
              data: [pendingTransactions, approvedTransactions, rejectedTransactions],
              backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
              borderWidth: 1
            }],
            tableData: tableData
          });
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          throw new Error(_context.t0.message);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function getTransactionOverview(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// Doanh thu theo thời gian
var getRevenueOverTime = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(startDate, endDate, filters) {
    var userId, bankConfigId, minAmount, maxAmount, daysArray, currentDate, matchConditions, revenue, revenueMap, labels, data, tableData;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          userId = filters.userId, bankConfigId = filters.bankConfigId, minAmount = filters.minAmount, maxAmount = filters.maxAmount; // Tạo danh sách các ngày từ startDate đến endDate
          daysArray = [];
          currentDate = new Date(startDate);
          while (currentDate <= new Date(endDate)) {
            daysArray.push(currentDate.toISOString().split('T')[0]); // Định dạng 'YYYY-MM-DD'
            currentDate.setDate(currentDate.getDate() + 1);
          }

          // Xây dựng điều kiện lọc động dựa trên các tiêu chí
          matchConditions = {
            status: 'APPROVED',
            date: {
              $gte: new Date(startDate),
              $lte: new Date(endDate)
            }
          };
          if (userId) matchConditions.userId = userId;
          if (bankConfigId) matchConditions.bankConfigId = bankConfigId;
          if (minAmount !== undefined || maxAmount !== undefined) {
            matchConditions.amount = {};
            if (minAmount !== undefined) matchConditions.amount.$gte = minAmount;
            if (maxAmount !== undefined) matchConditions.amount.$lte = maxAmount;
          }
          _context2.next = 11;
          return _requestAmount["default"].aggregate([{
            $match: matchConditions
          }, {
            $group: {
              _id: {
                $dateToString: {
                  format: '%Y-%m-%d',
                  date: '$date'
                }
              },
              // Nhóm theo ngày cụ thể
              totalAmount: {
                $sum: '$amount'
              }
            }
          }, {
            $sort: {
              _id: 1
            }
          } // Sắp xếp theo ngày
          ]);
        case 11:
          revenue = _context2.sent;
          // Tạo một object map doanh thu theo ngày
          revenueMap = revenue.reduce(function (acc, item) {
            acc[item._id] = item.totalAmount;
            return acc;
          }, {}); // Đảm bảo mỗi ngày đều có một cột, nếu không có dữ liệu thì set giá trị 0
          labels = daysArray;
          data = daysArray.map(function (day) {
            return revenueMap[day] || 0;
          }); // Nếu không có thì set 0
          // Dữ liệu cho bảng
          _context2.next = 17;
          return _requestAmount["default"].find(matchConditions).populate('userId');
        case 17:
          tableData = _context2.sent;
          return _context2.abrupt("return", {
            labels: labels,
            datasets: [{
              label: 'Thống kê doanh thu',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }],
            tableData: tableData
          });
        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](0);
          throw new Error(_context2.t0.message);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 21]]);
  }));
  return function getRevenueOverTime(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// Doanh thu người dùng cao nhất theo số tiền gửi
var getTopUsersByDepositAmount = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(startDate, endDate, limit) {
    var topUsers, preLabels, users, userMap, labels, data, allUsers, tableDataPromises, tableData, sortedTableData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _requestAmount["default"].aggregate([{
            $match: {
              date: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
              },
              status: 'APPROVED'
            }
          }, {
            $group: {
              _id: '$userId',
              totalAmount: {
                $sum: '$amount'
              }
            }
          }, {
            $sort: {
              totalAmount: -1
            }
          }, {
            $limit: Number(limit)
          }]);
        case 3:
          topUsers = _context4.sent;
          preLabels = topUsers.map(function (user) {
            return user._id;
          });
          _context4.next = 7;
          return _user["default"].find({
            _id: {
              $in: preLabels
            }
          }).select('userName');
        case 7:
          users = _context4.sent;
          userMap = new Map(users.map(function (user) {
            return [user._id.toString(), user.userName];
          }));
          labels = topUsers.map(function (user) {
            return userMap.get(user._id.toString());
          });
          data = topUsers.map(function (user) {
            return user.totalAmount;
          });
          _context4.next = 13;
          return _requestAmount["default"].aggregate([{
            $match: {
              date: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
              },
              status: 'APPROVED'
            }
          }, {
            $group: {
              _id: '$userId',
              totalAmount: {
                $sum: '$amount'
              }
            }
          }]);
        case 13:
          allUsers = _context4.sent;
          tableDataPromises = allUsers.map(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(user) {
              var userInfo;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _user["default"].findById(user._id).select('userName');
                  case 2:
                    userInfo = _context3.sent;
                    return _context3.abrupt("return", {
                      userId: user._id,
                      userName: userInfo.userName,
                      totalAmount: user.totalAmount
                    });
                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x10) {
              return _ref4.apply(this, arguments);
            };
          }());
          _context4.next = 17;
          return Promise.all(tableDataPromises);
        case 17:
          tableData = _context4.sent;
          sortedTableData = tableData.sort(function (a, b) {
            return b.totalAmount - a.totalAmount;
          }).slice(0, Number(limit));
          return _context4.abrupt("return", {
            labels: labels,
            datasets: [{
              label: 'Top người dùng theo số tiền nạp',
              data: data,
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1
            }],
            tableData: sortedTableData
          });
        case 22:
          _context4.prev = 22;
          _context4.t0 = _context4["catch"](0);
          throw new Error(_context4.t0.message);
        case 25:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 22]]);
  }));
  return function getTopUsersByDepositAmount(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// Biểu đồ theo thời gian xét duyệt
var getAverageProcessingTime = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(startDate, endDate) {
    var _processingTimes$, processingTimes, avgProcessingTime;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _requestAmount["default"].aggregate([{
            $match: {
              status: {
                $in: ['APPROVED', 'REJECTED']
              },
              date: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
              }
            }
          }, {
            $project: {
              processingTime: {
                $subtract: ['$updatedAt', '$createdAt']
              }
            }
          }, {
            $group: {
              _id: null,
              averageProcessingTime: {
                $avg: '$processingTime'
              }
            }
          }]);
        case 3:
          processingTimes = _context5.sent;
          avgProcessingTime = ((_processingTimes$ = processingTimes[0]) === null || _processingTimes$ === void 0 ? void 0 : _processingTimes$.averageProcessingTime) || 0;
          return _context5.abrupt("return", {
            labels: ['Average Processing Time'],
            datasets: [{
              label: 'Processing Time (ms)',
              data: [avgProcessingTime],
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1
            }]
          });
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          throw new Error(_context5.t0.message);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function getAverageProcessingTime(_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

// Tỷ lệ người dùng nạp tiền
var getUserDepositRate = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var totalUsers, usersWithDeposits, depositRate;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _user["default"].countDocuments();
        case 3:
          totalUsers = _context6.sent;
          _context6.next = 6;
          return _amount["default"].countDocuments();
        case 6:
          usersWithDeposits = _context6.sent;
          depositRate = usersWithDeposits / totalUsers * 100;
          return _context6.abrupt("return", {
            labels: ['Người dùng đã nạp', 'Người dùng chưa nạp'],
            datasets: [{
              label: 'User Deposit Rate',
              data: [usersWithDeposits, totalUsers],
              backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
              borderWidth: 1
            }]
          });
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          throw new Error(_context6.t0.message);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }));
  return function getUserDepositRate() {
    return _ref6.apply(this, arguments);
  };
}();

// Thống kê theo lượt xem trong khoảng thời gian
var getTopBooksByViews = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(startDate, endDate, limit, filters) {
    var categoryId, authorId, status, matchConditions, bookMatchConditions, topBooks, labels, data, allBooks, tableData;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          categoryId = filters.categoryId, authorId = filters.authorId, status = filters.status; // Điều kiện lọc động cho ViewHistory
          matchConditions = {
            date: {
              $gte: new Date(startDate),
              $lte: new Date(endDate)
            }
          }; // Điều kiện lọc động cho Book (sử dụng trong $lookup)
          bookMatchConditions = {};
          if (categoryId) bookMatchConditions.categoryId = mongoose.Types.ObjectId(categoryId);
          if (authorId) bookMatchConditions.authorId = mongoose.Types.ObjectId(authorId);
          if (status) bookMatchConditions.status = status;
          _context7.next = 9;
          return _viewHistory["default"].aggregate([{
            $match: matchConditions
          }, {
            $group: {
              _id: '$bookId',
              totalViews: {
                $sum: '$views'
              }
            }
          }, {
            $lookup: {
              from: 'books',
              localField: '_id',
              foreignField: '_id',
              as: 'bookDetails'
            }
          }, {
            $unwind: '$bookDetails'
          }, {
            $match: bookMatchConditions
          }, {
            $project: {
              _id: 0,
              bookId: '$_id',
              title: '$bookDetails.title',
              totalViews: 1
            }
          }, {
            $sort: {
              totalViews: -1
            }
          }, {
            $limit: Number(limit)
          }]);
        case 9:
          topBooks = _context7.sent;
          labels = topBooks.map(function (book) {
            return book.title;
          });
          data = topBooks.map(function (book) {
            return book.totalViews;
          });
          _context7.next = 14;
          return _viewHistory["default"].aggregate([{
            $match: matchConditions
          }, {
            $group: {
              _id: '$bookId',
              totalViews: {
                $sum: '$views'
              }
            }
          }, {
            $lookup: {
              from: 'books',
              localField: '_id',
              foreignField: '_id',
              as: 'bookDetails'
            }
          }, {
            $unwind: '$bookDetails'
          }, {
            $match: bookMatchConditions
          }, {
            $project: {
              _id: 0,
              bookId: '$_id',
              title: '$bookDetails.title',
              totalViews: 1
            }
          }]);
        case 14:
          allBooks = _context7.sent;
          tableData = allBooks.sort(function (a, b) {
            return b.totalViews - a.totalViews;
          }).slice(0, Number(limit));
          return _context7.abrupt("return", {
            labels: labels,
            datasets: [{
              label: 'Thống kê sách theo lượt xem',
              data: data,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }],
            tableData: tableData
          });
        case 19:
          _context7.prev = 19;
          _context7.t0 = _context7["catch"](0);
          throw new Error(_context7.t0.message);
        case 22:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 19]]);
  }));
  return function getTopBooksByViews(_x13, _x14, _x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();
var ExcelJS = require('exceljs');
var exportExcelFile = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(startDate, endDate, type) {
    var workbook, worksheet, tableData, overview, revenueTime, topUsers, topBooks, buffer;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          workbook = new ExcelJS.Workbook();
          _context8.t0 = type;
          _context8.next = _context8.t0 === 'transaction' ? 4 : _context8.t0 === 'revenue' ? 12 : _context8.t0 === 'topUsers' ? 20 : _context8.t0 === 'topView' ? 28 : 36;
          break;
        case 4:
          _context8.next = 6;
          return getTransactionOverview(startDate, endDate);
        case 6:
          overview = _context8.sent;
          tableData = overview.tableData;
          worksheet = workbook.addWorksheet('Transaction Overview');
          worksheet.columns = [{
            header: 'Transaction ID',
            key: '_id',
            width: 20
          }, {
            header: 'User Id',
            key: 'userId',
            width: 20
          }, {
            header: 'User Name',
            key: 'userName',
            width: 20
          }, {
            header: 'Amount',
            key: 'amount',
            width: 15
          }, {
            header: 'Status',
            key: 'status',
            width: 15
          }, {
            header: 'Date',
            key: 'date',
            width: 20
          }];
          tableData.forEach(function (transaction) {
            worksheet.addRow({
              _id: transaction._id,
              userId: transaction.userId._id,
              userName: transaction.userId.userName,
              amount: transaction.amount,
              status: transaction.status,
              date: new Date(transaction.date).toLocaleString()
            });
          });
          return _context8.abrupt("break", 37);
        case 12:
          _context8.next = 14;
          return getRevenueOverTime(startDate, endDate);
        case 14:
          revenueTime = _context8.sent;
          tableData = revenueTime.tableData;
          worksheet = workbook.addWorksheet('Revenue Over Time');
          worksheet.columns = [{
            header: 'Transaction ID',
            key: '_id',
            width: 20
          }, {
            header: 'User Id',
            key: 'userId',
            width: 20
          }, {
            header: 'User Name',
            key: 'userName',
            width: 20
          }, {
            header: 'Amount',
            key: 'amount',
            width: 15
          }, {
            header: 'Status',
            key: 'status',
            width: 15
          }, {
            header: 'Date',
            key: 'date',
            width: 20
          }];
          tableData.forEach(function (revenue) {
            worksheet.addRow({
              _id: revenue._id,
              userId: revenue.userId._id,
              userName: revenue.userId.userName,
              amount: revenue.amount,
              status: revenue.status,
              date: new Date(revenue.date).toLocaleString()
            });
          });
          return _context8.abrupt("break", 37);
        case 20:
          _context8.next = 22;
          return getTopUsersByDepositAmount(startDate, endDate);
        case 22:
          topUsers = _context8.sent;
          tableData = topUsers.tableData;
          worksheet = workbook.addWorksheet('Top Users by Deposit Amount');
          worksheet.columns = [{
            header: 'User ID',
            key: 'userId',
            width: 20
          }, {
            header: 'User Name',
            key: 'userName',
            width: 20
          }, {
            header: 'Total Amount Deposited',
            key: 'totalAmount',
            width: 25
          }];
          tableData.forEach(function (user) {
            worksheet.addRow({
              userId: user.userId,
              userName: user.userName,
              totalAmount: user.totalAmount
            });
          });
          return _context8.abrupt("break", 37);
        case 28:
          _context8.next = 30;
          return getTopBooksByViews(startDate, endDate);
        case 30:
          topBooks = _context8.sent;
          tableData = topBooks.tableData;
          worksheet = workbook.addWorksheet('Top Books by Views');
          worksheet.columns = [{
            header: 'Book ID',
            key: 'bookId',
            width: 30
          }, {
            header: 'Book Title',
            key: 'title',
            width: 30
          }, {
            header: 'Total Views',
            key: 'totalViews',
            width: 20
          }];
          tableData.forEach(function (book) {
            worksheet.addRow({
              bookId: book.bookId,
              title: book.title,
              totalViews: book.totalViews
            });
          });
          return _context8.abrupt("break", 37);
        case 36:
          throw new Error('Invalid type provided');
        case 37:
          _context8.next = 39;
          return workbook.xlsx.writeBuffer();
        case 39:
          buffer = _context8.sent;
          return _context8.abrupt("return", buffer);
        case 41:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function exportExcelFile(_x17, _x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();
var getReadTimeOverviewData = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(startDate, endDate, userId) {
    var daysArray, currentDate, readTimeData, readTimeMap, labels, data, totalReadTimeOverall, numberOfDays, averageReadTime, details;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          // Tạo danh sách các ngày từ startDate đến endDate
          daysArray = [];
          currentDate = new Date(startDate);
          while (currentDate <= new Date(endDate)) {
            daysArray.push(currentDate.toISOString().split('T')[0]); // Định dạng 'YYYY-MM-DD'
            currentDate.setDate(currentDate.getDate() + 1);
          }

          // Lấy tất cả bản ghi thời gian đọc của user trong khoảng thời gian
          _context9.next = 6;
          return _readtime["default"].find({
            userId: userId,
            date: {
              $gte: new Date(startDate),
              $lte: new Date(endDate)
            }
          }).sort({
            date: 1
          });
        case 6:
          readTimeData = _context9.sent;
          // Tạo một object map thời gian đọc theo ngày
          readTimeMap = readTimeData.reduce(function (acc, record) {
            acc[record.date.toISOString().split('T')[0]] = {
              totalReadTime: record.totalReadTime,
              detail: record.detail
            };
            return acc;
          }, {}); // Đảm bảo mỗi ngày đều có một cột, nếu không có dữ liệu thì set giá trị 0
          labels = daysArray;
          data = daysArray.map(function (day) {
            var record = readTimeMap[day];
            return record ? record.totalReadTime : 0; // Nếu không có thì set 0
          });
          totalReadTimeOverall = data.reduce(function (acc, time) {
            return acc + time;
          }, 0);
          numberOfDays = daysArray.length;
          averageReadTime = numberOfDays > 0 ? totalReadTimeOverall / numberOfDays : 0; // Tạo details cho từng ngày
          details = daysArray.map(function (day) {
            var record = readTimeMap[day];
            return {
              date: new Date(day),
              totalReadTime: record ? record.totalReadTime : 0,
              details: record ? record.detail : []
            };
          });
          return _context9.abrupt("return", {
            labels: labels,
            datasets: [{
              label: 'Total Read Time (minutes)',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }],
            averageReadTime: averageReadTime,
            details: details
          });
        case 17:
          _context9.prev = 17;
          _context9.t0 = _context9["catch"](0);
          console.error('Error fetching read time data:', _context9.t0);
          throw _context9.t0;
        case 21:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 17]]);
  }));
  return function getReadTimeOverviewData(_x20, _x21, _x22) {
    return _ref9.apply(this, arguments);
  };
}();
var updateReadTime = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(userId, bookId, date, time) {
    var readTime, data, bookDetail;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _readtime["default"].findOne({
            userId: userId,
            date: date
          });
        case 3:
          readTime = _context10.sent;
          if (readTime) {
            _context10.next = 11;
            break;
          }
          _context10.next = 7;
          return _readtime["default"].create({
            userId: userId,
            date: date,
            totalReadTime: time,
            detail: [{
              bookId: bookId,
              readTime: time
            }]
          });
        case 7:
          data = _context10.sent;
          return _context10.abrupt("return", {
            status: 200,
            message: 'Update read time record successfully',
            data: data
          });
        case 11:
          readTime.totalReadTime += time;
          bookDetail = readTime.detail.find(function (item) {
            return item.bookId.toString() === bookId.toString();
          });
          if (bookDetail) {
            bookDetail.readTime += time;
          } else {
            readTime.detail.push({
              bookId: bookId,
              readTime: time
            });
          }
          _context10.next = 16;
          return readTime.save();
        case 16:
          return _context10.abrupt("return", {
            status: 200,
            message: 'Update read time record successfully',
            data: readTime
          });
        case 17:
          _context10.next = 23;
          break;
        case 19:
          _context10.prev = 19;
          _context10.t0 = _context10["catch"](0);
          console.error('Error updating read time:', _context10.t0);
          throw new Error(_context10.t0.message);
        case 23:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 19]]);
  }));
  return function updateReadTime(_x23, _x24, _x25, _x26) {
    return _ref10.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  getTransactionOverview: getTransactionOverview,
  getRevenueOverTime: getRevenueOverTime,
  getTopUsersByDepositAmount: getTopUsersByDepositAmount,
  getAverageProcessingTime: getAverageProcessingTime,
  getUserDepositRate: getUserDepositRate,
  getTopBooksByViews: getTopBooksByViews,
  exportExcelFile: exportExcelFile,
  getReadTimeOverviewData: getReadTimeOverviewData,
  updateReadTime: updateReadTime
};
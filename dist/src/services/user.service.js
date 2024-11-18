"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _review = _interopRequireDefault(require("../config/nosql/models/review.model"));
var _comment2 = _interopRequireDefault(require("../config/nosql/models/comment.model"));
var _bookMark = _interopRequireDefault(require("../config/nosql/models/book-mark.model"));
var _followList = _interopRequireDefault(require("../config/nosql/models/follow-list.model"));
var _notify = _interopRequireDefault(require("../config/nosql/models/notify.model"));
var _hotSearch = _interopRequireDefault(require("../config/nosql/models/hot-search.model"));
var _chapterComment = _interopRequireDefault(require("../config/nosql/models/chapter-comment"));
var _chapter = _interopRequireDefault(require("../config/nosql/models/chapter.model"));
var _history = _interopRequireDefault(require("../config/nosql/models/history.model"));
var _requestAmount = _interopRequireDefault(require("../config/nosql/models/requestAmount.model"));
var _amount = _interopRequireDefault(require("../config/nosql/models/amount.model"));
var _user = _interopRequireDefault(require("../config/nosql/models/user.model"));
var _book = _interopRequireDefault(require("../config/nosql/models/book.model"));
var _viewHistory = _interopRequireDefault(require("../config/nosql/models/view-history.model"));
var _sequelize = require("sequelize");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var like = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(userId, bookId) {
    var review, result, bookMark;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!(!userId || !bookId)) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", {
            errCode: 409,
            message: 'Missing required fields'
          });
        case 3:
          _context.next = 5;
          return _review["default"].find({
            bookId: bookId
          });
        case 5:
          review = _context.sent;
          review.totalLike += 1;
          _context.next = 9;
          return review.save();
        case 9:
          result = _context.sent;
          _context.next = 12;
          return _bookMark["default"].findOne({
            userId: userId,
            bookId: bookId
          });
        case 12:
          bookMark = _context.sent;
          bookMark.like = true;
          _context.next = 16;
          return bookMark.save();
        case 16:
          if (result) {
            _context.next = 20;
            break;
          }
          return _context.abrupt("return", {
            errCode: 500,
            message: 'Error updating review'
          });
        case 20:
          return _context.abrupt("return", {
            errCode: 200,
            message: 'Update review success (like)',
            data: review
          });
        case 21:
          _context.next = 26;
          break;
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          throw new Error(_context.t0);
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 23]]);
  }));
  return function like(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var read = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userId, bookId, chapterId) {
    var review, history, existingBookIndex, today, viewHistoryByDate;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _review["default"].findOne({
            bookId: bookId
          });
        case 3:
          review = _context2.sent;
          if (review) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", {
            errCode: 404,
            message: 'Review not found'
          });
        case 6:
          review.totalView = (review.totalView || 0) + 1;
          _context2.prev = 7;
          _context2.next = 10;
          return review.save();
        case 10:
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](7);
          console.error('Error saving review:', _context2.t0);
          throw new Error('Error updating review.');
        case 16:
          _context2.next = 18;
          return _history["default"].findOne({
            userId: userId
          });
        case 18:
          history = _context2.sent;
          if (history) {
            _context2.next = 25;
            break;
          }
          _context2.next = 22;
          return _history["default"].create({
            userId: userId,
            books: [{
              bookId: bookId,
              lastReadChapterId: chapterId,
              lastReadAt: new Date()
            }],
            lastReadBook: bookId
          });
        case 22:
          history = _context2.sent;
          _context2.next = 37;
          break;
        case 25:
          existingBookIndex = history.books.findIndex(function (book) {
            return book.bookId.toString() === bookId.toString();
          });
          if (existingBookIndex > -1) {
            history.books[existingBookIndex].lastReadChapterId = chapterId;
            history.books[existingBookIndex].lastReadAt = new Date();
          } else {
            history.books.push({
              bookId: bookId,
              lastReadChapterId: chapterId,
              lastReadAt: new Date()
            });
          }
          history.lastReadBook = bookId;
          _context2.prev = 28;
          _context2.next = 31;
          return history.save();
        case 31:
          _context2.next = 37;
          break;
        case 33:
          _context2.prev = 33;
          _context2.t1 = _context2["catch"](28);
          console.error('Error saving history:', _context2.t1);
          throw new Error('Error updating reading history.');
        case 37:
          today = new Date();
          today.setHours(0, 0, 0, 0);
          _context2.next = 41;
          return _viewHistory["default"].findOne({
            bookId: bookId,
            date: today
          });
        case 41:
          viewHistoryByDate = _context2.sent;
          if (viewHistoryByDate) {
            _context2.next = 48;
            break;
          }
          _context2.next = 45;
          return _viewHistory["default"].create({
            bookId: bookId,
            date: today,
            views: 1
          });
        case 45:
          viewHistoryByDate = _context2.sent;
          _context2.next = 58;
          break;
        case 48:
          viewHistoryByDate.views += 1;
          _context2.prev = 49;
          _context2.next = 52;
          return viewHistoryByDate.save();
        case 52:
          _context2.next = 58;
          break;
        case 54:
          _context2.prev = 54;
          _context2.t2 = _context2["catch"](49);
          console.error('Error saving view history:', _context2.t2);
          throw new Error('Error updating view history.');
        case 58:
          return _context2.abrupt("return", {
            status: 200,
            message: 'Update review success (view)',
            data: review
          });
        case 61:
          _context2.prev = 61;
          _context2.t3 = _context2["catch"](0);
          console.error('Error in read function:', _context2.t3);
          throw new Error(_context2.t3.message);
        case 65:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 61], [7, 12], [28, 33], [49, 54]]);
  }));
  return function read(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
var rate = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(userId, bookId, rating) {
    var review, result, bookMark, history, existingBookIndex;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          if (!(!userId || !bookId || !rating)) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", {
            errCode: 409,
            message: 'Missing required fields'
          });
        case 3:
          _context3.next = 5;
          return _review["default"].findOne({
            bookId: bookId
          });
        case 5:
          review = _context3.sent;
          if (!(review.userId === userId)) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", {
            errCode: 409,
            message: 'User can not rate twice',
            data: review
          });
        case 8:
          review.rating.push(rating);
          review.rate = review.rating.reduce(function (a, b) {
            return a + b;
          }) / review.rating.length;
          _context3.next = 12;
          return review.save();
        case 12:
          result = _context3.sent;
          _context3.next = 15;
          return _bookMark["default"].findOne({
            userId: userId,
            bookId: bookId
          });
        case 15:
          bookMark = _context3.sent;
          if (bookMark) {
            _context3.next = 19;
            break;
          }
          _context3.next = 19;
          return _bookMark["default"].create({
            userId: userId,
            bookId: bookId,
            rating: rating
          });
        case 19:
          bookMark.rating = rating;
          _context3.next = 22;
          return bookMark.save();
        case 22:
          _context3.next = 24;
          return _history["default"].findOne({
            userId: userId
          });
        case 24:
          history = _context3.sent;
          if (history) {
            _context3.next = 31;
            break;
          }
          _context3.next = 28;
          return _history["default"].create({
            userId: userId,
            books: [{
              bookId: bookId,
              lastReadAt: new Date()
            }],
            rating: [{
              bookId: bookId,
              rating: rating,
              ratedAt: new Date()
            }],
            lastReadBook: bookId
          });
        case 28:
          history = _context3.sent;
          _context3.next = 42;
          break;
        case 31:
          // Kiểm tra xem cuốn sách đã có trong lịch sử chưa
          existingBookIndex = history.books.findIndex(function (book) {
            return book.bookId.toString() === bookId.toString();
          });
          if (existingBookIndex > -1) {
            // Cập nhật thông tin của cuốn sách đã đọc
            history.books[existingBookIndex].lastReadAt = new Date();
          } else {
            // Thêm sách mới vào lịch sử
            history.books.push({
              bookId: bookId,
              lastReadAt: new Date()
            });
            history.rating.push({
              bookId: bookId,
              rating: rating,
              ratedAt: new Date()
            });
          }
          _context3.prev = 33;
          _context3.next = 36;
          return history.save();
        case 36:
          _context3.next = 42;
          break;
        case 38:
          _context3.prev = 38;
          _context3.t0 = _context3["catch"](33);
          console.error('Error saving history:', _context3.t0);
          throw new Error('Error updating reading history.');
        case 42:
          if (result) {
            _context3.next = 46;
            break;
          }
          return _context3.abrupt("return", {
            errCode: 500,
            message: 'Error updating review'
          });
        case 46:
          return _context3.abrupt("return", {
            errCode: 200,
            message: 'Update review success (rate)',
            data: review
          });
        case 47:
          _context3.next = 52;
          break;
        case 49:
          _context3.prev = 49;
          _context3.t1 = _context3["catch"](0);
          throw new Error(_context3.t1);
        case 52:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 49], [33, 38]]);
  }));
  return function rate(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var comment = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId, bookId, _comment) {
    var review, newComment, result, history, existingBookIndex;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          if (!(!userId || !bookId || !_comment)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", {
            errCode: 409,
            message: 'Missing required fields'
          });
        case 3:
          _context4.next = 5;
          return _review["default"].findOne({
            bookId: bookId
          });
        case 5:
          review = _context4.sent;
          _context4.next = 8;
          return _comment2["default"].create({
            reviewId: review._id,
            user: userId,
            content: _comment,
            postDate: new Date()
          });
        case 8:
          newComment = _context4.sent;
          review.comments.push(newComment._id);
          _context4.next = 12;
          return review.save();
        case 12:
          result = _context4.sent;
          _context4.next = 15;
          return _history["default"].findOne({
            userId: userId
          });
        case 15:
          history = _context4.sent;
          if (history) {
            _context4.next = 22;
            break;
          }
          _context4.next = 19;
          return _history["default"].create({
            userId: userId,
            books: [{
              bookId: bookId,
              lastReadAt: new Date()
            }],
            comment: [{
              bookId: bookId,
              content: _comment,
              createdAt: new Date()
            }],
            lastReadBook: bookId
          });
        case 19:
          history = _context4.sent;
          _context4.next = 33;
          break;
        case 22:
          // Kiểm tra xem cuốn sách đã có trong lịch sử chưa
          existingBookIndex = history.books.findIndex(function (book) {
            return book.bookId.toString() === bookId.toString();
          });
          if (existingBookIndex > -1) {
            // Cập nhật thông tin của cuốn sách đã đọc
            history.books[existingBookIndex].lastReadAt = new Date();
          } else {
            // Thêm sách mới vào lịch sử
            history.books.push({
              bookId: bookId,
              lastReadAt: new Date()
            });
            history.comment.push({
              bookId: bookId,
              content: _comment,
              createdAt: new Date()
            });
          }
          _context4.prev = 24;
          _context4.next = 27;
          return history.save();
        case 27:
          _context4.next = 33;
          break;
        case 29:
          _context4.prev = 29;
          _context4.t0 = _context4["catch"](24);
          console.error('Error saving history:', _context4.t0);
          throw new Error('Error updating reading history.');
        case 33:
          if (result) {
            _context4.next = 37;
            break;
          }
          return _context4.abrupt("return", {
            errCode: 500,
            message: 'Error updating review'
          });
        case 37:
          return _context4.abrupt("return", {
            errCode: 200,
            message: 'Update review success (comment)',
            data: review
          });
        case 38:
          _context4.next = 43;
          break;
        case 40:
          _context4.prev = 40;
          _context4.t1 = _context4["catch"](0);
          throw new Error(_context4.t1);
        case 43:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 40], [24, 29]]);
  }));
  return function comment(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();
var createUserBookMark = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId, bookId) {
    var bookMark;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _bookMark["default"].create({
            userId: userId,
            bookId: bookId
          });
        case 3:
          bookMark = _context5.sent;
          return _context5.abrupt("return", {
            status: 200,
            message: 'Create user book mark success',
            data: bookMark
          });
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", {
            status: 500,
            message: _context5.t0.message
          });
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function createUserBookMark(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();
var updateUserBookMark = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(updateData) {
    var userId, bookId, chapterId, lastReadChapterIndex, _like, _follow, rating, notes, highLights, bookMark, newBookMark, history, bookInHistory;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          userId = updateData.userId, bookId = updateData.bookId, chapterId = updateData.chapterId, lastReadChapterIndex = updateData.lastReadChapterIndex, _like = updateData.like, _follow = updateData.follow, rating = updateData.rating, notes = updateData.notes, highLights = updateData.highLights;
          _context6.next = 4;
          return _bookMark["default"].findOne({
            userId: userId,
            bookId: bookId
          });
        case 4:
          bookMark = _context6.sent;
          if (bookMark) {
            _context6.next = 12;
            break;
          }
          _context6.next = 8;
          return _bookMark["default"].create({
            userId: userId,
            bookId: bookId,
            lastReadChapterId: chapterId || undefined,
            lastReadChapterIndex: lastReadChapterIndex || undefined,
            readChapterIds: chapterId ? [chapterId] : undefined,
            like: _like || undefined,
            follow: _follow || undefined,
            rating: rating || undefined,
            notes: notes || undefined,
            highLights: highLights || undefined
          });
        case 8:
          newBookMark = _context6.sent;
          return _context6.abrupt("return", {
            status: 200,
            message: 'Create BookMark successfully',
            data: newBookMark
          });
        case 12:
          if (chapterId !== undefined) {
            bookMark.lastReadChapterId = chapterId;
            if (!bookMark.readChapterIds.includes(chapterId)) {
              bookMark.readChapterIds.push(chapterId);
            }
          }
          if (lastReadChapterIndex !== undefined) {
            bookMark.lastReadChapterIndex = lastReadChapterIndex;
          }
          if (_like !== undefined) {
            bookMark.like = _like;
          }
          if (_follow !== undefined) {
            bookMark.follow = _follow;
          }
          if (rating !== undefined) {
            bookMark.rating = rating;
          }
          if (notes !== undefined) {
            bookMark.notes = notes;
          }
          if (highLights !== undefined) {
            bookMark.highLights = highLights;
          }
          _context6.next = 21;
          return bookMark.save();
        case 21:
          _context6.next = 23;
          return _history["default"].findOne({
            userId: userId
          });
        case 23:
          history = _context6.sent;
          if (history) {
            _context6.next = 30;
            break;
          }
          _context6.next = 27;
          return _history["default"].create({
            userId: userId,
            books: [{
              bookId: bookId,
              lastReadChapterId: chapterId,
              lastReadAt: new Date()
            }],
            lastReadBook: bookId
          });
        case 27:
          history = _context6.sent;
          _context6.next = 35;
          break;
        case 30:
          bookInHistory = history.books.find(function (b) {
            return b.bookId.toString() === bookId.toString();
          });
          if (bookInHistory) {
            bookInHistory.lastReadChapterId = chapterId;
            bookInHistory.lastReadAt = new Date();
          } else {
            history.books.push({
              bookId: bookId,
              lastReadChapterId: chapterId,
              lastReadAt: new Date()
            });
          }
          history.lastReadBook = bookId;
          _context6.next = 35;
          return history.save();
        case 35:
          return _context6.abrupt("return", {
            status: 200,
            message: 'Update BookMark successfully',
            data: bookMark
          });
        case 36:
          _context6.next = 42;
          break;
        case 38:
          _context6.prev = 38;
          _context6.t0 = _context6["catch"](0);
          console.error('Error in updateUserBookMark:', _context6.t0.message);
          return _context6.abrupt("return", {
            status: 500,
            message: _context6.t0.message
          });
        case 42:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 38]]);
  }));
  return function updateUserBookMark(_x14) {
    return _ref6.apply(this, arguments);
  };
}();
var getUserBookMark = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(userId, bookId) {
    var bookMark, newBookMark;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _bookMark["default"].findOne({
            userId: userId,
            bookId: bookId
          });
        case 3:
          bookMark = _context7.sent;
          if (!bookMark) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", {
            status: 200,
            message: 'Get user book mark success',
            data: bookMark
          });
        case 8:
          _context7.next = 10;
          return _bookMark["default"].create({
            userId: userId,
            bookId: bookId
          });
        case 10:
          newBookMark = _context7.sent;
          return _context7.abrupt("return", {
            status: 200,
            message: 'Create new user book mark success',
            data: newBookMark
          });
        case 12:
          _context7.next = 17;
          break;
        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", {
            status: 500,
            message: _context7.t0.message
          });
        case 17:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 14]]);
  }));
  return function getUserBookMark(_x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();
var follow = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(userId, bookId) {
    var history, existingBookIndex, followList, newFollowList;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          if (!(!userId || !bookId)) {
            _context8.next = 3;
            break;
          }
          return _context8.abrupt("return", {
            status: 400,
            message: 'Missing required fields'
          });
        case 3:
          _context8.next = 5;
          return _history["default"].findOne({
            userId: userId
          });
        case 5:
          history = _context8.sent;
          if (history) {
            _context8.next = 12;
            break;
          }
          _context8.next = 9;
          return _history["default"].create({
            userId: userId,
            books: [],
            lastReadBook: null,
            like: [],
            follow: [bookId],
            rating: [],
            comment: []
          });
        case 9:
          history = _context8.sent;
          _context8.next = 14;
          break;
        case 12:
          existingBookIndex = history.books.findIndex(function (book) {
            return book.bookId.toString() === bookId.toString();
          });
          if (existingBookIndex > -1) {
            history.books[existingBookIndex].lastReadAt = new Date();
          } else {
            history.follow.push(bookId);
          }
        case 14:
          _context8.next = 16;
          return history.save();
        case 16:
          _context8.next = 18;
          return _followList["default"].findOne({
            userId: userId
          });
        case 18:
          followList = _context8.sent;
          if (followList) {
            _context8.next = 27;
            break;
          }
          _context8.next = 22;
          return _followList["default"].create({
            userId: userId,
            books: [bookId]
          });
        case 22:
          newFollowList = _context8.sent;
          if (!newFollowList) {
            _context8.next = 25;
            break;
          }
          return _context8.abrupt("return", {
            status: 200,
            message: 'Follow book success'
          });
        case 25:
          _context8.next = 35;
          break;
        case 27:
          if (followList.books.includes(bookId)) {
            _context8.next = 33;
            break;
          }
          followList.books.push(bookId);
          _context8.next = 31;
          return followList.save();
        case 31:
          _context8.next = 34;
          break;
        case 33:
          return _context8.abrupt("return", {
            status: 400,
            message: 'Book already followed'
          });
        case 34:
          return _context8.abrupt("return", {
            status: 200,
            message: 'Follow book success'
          });
        case 35:
          _context8.next = 40;
          break;
        case 37:
          _context8.prev = 37;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", {
            status: 500,
            message: _context8.t0.message
          });
        case 40:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 37]]);
  }));
  return function follow(_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();
var getFollowList = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(userId, pageIndex, pageSize) {
    var followList, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _followList["default"].findOne({
            userId: userId
          }).populate({
            path: 'books',
            populate: [{
              path: 'authorId'
            }, {
              path: 'categoryId'
            }, {
              path: 'majorId'
            }, {
              path: 'review'
            }]
          });
        case 3:
          followList = _context9.sent;
          if (followList) {
            _context9.next = 6;
            break;
          }
          return _context9.abrupt("return", {
            status: 400,
            message: 'Follow list not found'
          });
        case 6:
          data = followList.books.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
          return _context9.abrupt("return", {
            status: 200,
            message: 'Get follow list success',
            data: data
          });
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", {
            status: 500,
            message: _context9.t0.message
          });
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function getFollowList(_x19, _x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();
var getNotification = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(userId) {
    var notification;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _notify["default"].find({
            userId: userId
          }).populate({
            path: 'bookId',
            populate: {
              path: 'authorId'
            }
          }).sort({
            createdAt: -1
          }).limit(10);
        case 3:
          notification = _context10.sent;
          if (!notification) {
            _context10.next = 8;
            break;
          }
          return _context10.abrupt("return", {
            status: 200,
            message: 'Get notification success',
            data: notification
          });
        case 8:
          return _context10.abrupt("return", {
            status: 400,
            message: 'Notification not found'
          });
        case 9:
          _context10.next = 14;
          break;
        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", {
            status: 500,
            message: _context10.t0.message
          });
        case 14:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 11]]);
  }));
  return function getNotification(_x22) {
    return _ref10.apply(this, arguments);
  };
}();
var updateNotificationStatus = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(userId, notifyId) {
    var notification, result;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _notify["default"].findOne({
            userId: userId,
            _id: notifyId
          });
        case 3:
          notification = _context11.sent;
          if (!notification) {
            _context11.next = 13;
            break;
          }
          notification.status = 'READ';
          _context11.next = 8;
          return notification.save();
        case 8:
          result = _context11.sent;
          if (!result) {
            _context11.next = 11;
            break;
          }
          return _context11.abrupt("return", {
            status: 200,
            message: 'Update notification status success'
          });
        case 11:
          _context11.next = 14;
          break;
        case 13:
          return _context11.abrupt("return", {
            status: 400,
            message: 'Notification not found'
          });
        case 14:
          _context11.next = 19;
          break;
        case 16:
          _context11.prev = 16;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", {
            status: 500,
            message: _context11.t0.message
          });
        case 19:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 16]]);
  }));
  return function updateNotificationStatus(_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}();
var getHotSearch = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var trendingKeywords;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _hotSearch["default"].find().sort({
            searchCount: -1
          }).limit(25);
        case 3:
          trendingKeywords = _context12.sent;
          return _context12.abrupt("return", {
            status: 200,
            message: 'Get trending keywords success',
            data: trendingKeywords
          });
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", {
            status: 500,
            message: _context12.t0.message
          });
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function getHotSearch() {
    return _ref12.apply(this, arguments);
  };
}();
var checkFollowBook = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(userId, bookId) {
    var followList;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _followList["default"].findOne({
            userId: userId
          });
        case 3:
          followList = _context13.sent;
          if (!(followList && followList.books.includes(bookId))) {
            _context13.next = 8;
            break;
          }
          return _context13.abrupt("return", true);
        case 8:
          return _context13.abrupt("return", false);
        case 9:
          _context13.next = 14;
          break;
        case 11:
          _context13.prev = 11;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", false);
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 11]]);
  }));
  return function checkFollowBook(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var unFollow = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(userId, bookId) {
    var followList, result;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return _followList["default"].findOne({
            userId: userId
          });
        case 3:
          followList = _context14.sent;
          if (followList) {
            _context14.next = 6;
            break;
          }
          return _context14.abrupt("return", {
            status: 400,
            message: 'User has not followed any book yet'
          });
        case 6:
          if (followList.books.includes(bookId)) {
            _context14.next = 8;
            break;
          }
          return _context14.abrupt("return", {
            status: 404,
            message: 'Book not found in follow list'
          });
        case 8:
          followList.books = followList.books.filter(function (book) {
            return book.toString() !== bookId;
          });
          _context14.next = 11;
          return followList.save();
        case 11:
          result = _context14.sent;
          if (!result) {
            _context14.next = 14;
            break;
          }
          return _context14.abrupt("return", {
            status: 200,
            message: 'Unfollow book success'
          });
        case 14:
          _context14.next = 19;
          break;
        case 16:
          _context14.prev = 16;
          _context14.t0 = _context14["catch"](0);
          return _context14.abrupt("return", {
            status: 500,
            message: _context14.t0.message
          });
        case 19:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 16]]);
  }));
  return function unFollow(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var commentInChapter = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(userId, chapterId, comment) {
    var newComment, chapter;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          if (!(!userId || !chapterId || !comment)) {
            _context15.next = 3;
            break;
          }
          return _context15.abrupt("return", {
            errCode: 409,
            message: 'Missing required fields'
          });
        case 3:
          _context15.next = 5;
          return _chapterComment["default"].create({
            chapterId: chapterId,
            user: userId,
            content: comment,
            postDate: new Date()
          });
        case 5:
          newComment = _context15.sent;
          _context15.next = 8;
          return _chapter["default"].findOne({
            _id: chapterId
          });
        case 8:
          chapter = _context15.sent;
          chapter.comments.push(newComment._id);
          _context15.next = 12;
          return chapter.save();
        case 12:
          return _context15.abrupt("return", {
            errCode: 200,
            message: 'Create comment in chapter success',
            data: newComment
          });
        case 15:
          _context15.prev = 15;
          _context15.t0 = _context15["catch"](0);
          throw new Error(_context15.t0);
        case 18:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 15]]);
  }));
  return function commentInChapter(_x29, _x30, _x31) {
    return _ref15.apply(this, arguments);
  };
}();
var updateHistory = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(userId, bookId, chapterId) {
    var history, newHistory, book;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return _history["default"].findOne({
            userId: userId
          });
        case 3:
          history = _context16.sent;
          if (history) {
            _context16.next = 11;
            break;
          }
          _context16.next = 7;
          return _history["default"].create({
            userId: userId,
            books: [{
              bookId: bookId,
              lastReadChapterId: chapterId,
              lastReadAt: new Date()
            }],
            lastReadBook: bookId
          });
        case 7:
          newHistory = _context16.sent;
          return _context16.abrupt("return", {
            status: 200,
            message: 'Create history success',
            data: newHistory
          });
        case 11:
          book = history.books.find(function (book) {
            return book.bookId === bookId;
          });
          if (!book) {
            history.books.push({
              bookId: bookId,
              lastReadChapterId: chapterId,
              lastReadAt: new Date()
            });
          } else {
            book.lastReadChapterId = chapterId;
            book.lastReadAt = new Date();
          }
          history.lastReadBook = bookId;
          _context16.next = 16;
          return history.save();
        case 16:
          return _context16.abrupt("return", {
            status: 200,
            message: 'Update history success',
            data: history
          });
        case 17:
          _context16.next = 22;
          break;
        case 19:
          _context16.prev = 19;
          _context16.t0 = _context16["catch"](0);
          return _context16.abrupt("return", {
            status: 500,
            message: _context16.t0.message
          });
        case 22:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 19]]);
  }));
  return function updateHistory(_x32, _x33, _x34) {
    return _ref16.apply(this, arguments);
  };
}();
var getUserHistory = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(userId) {
    var history;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return _history["default"].findOne({
            userId: userId
          });
        case 3:
          history = _context17.sent;
          if (history) {
            _context17.next = 6;
            break;
          }
          return _context17.abrupt("return", {
            status: 404,
            message: 'History not found'
          });
        case 6:
          return _context17.abrupt("return", {
            status: 200,
            message: 'Get history success',
            data: history
          });
        case 9:
          _context17.prev = 9;
          _context17.t0 = _context17["catch"](0);
          return _context17.abrupt("return", {
            status: 500,
            message: _context17.t0.message
          });
        case 12:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 9]]);
  }));
  return function getUserHistory(_x35) {
    return _ref17.apply(this, arguments);
  };
}();
var requestAmount = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(userId, amount, description, bankConfigId) {
    var request;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return _requestAmount["default"].create({
            userId: userId,
            amount: amount,
            description: description,
            bankConfigId: bankConfigId,
            date: new Date(),
            status: 'PENDING'
          });
        case 3:
          request = _context18.sent;
          return _context18.abrupt("return", {
            status: 200,
            message: 'Request amount success',
            data: request
          });
        case 7:
          _context18.prev = 7;
          _context18.t0 = _context18["catch"](0);
          return _context18.abrupt("return", {
            status: 500,
            message: _context18.t0.message
          });
        case 10:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 7]]);
  }));
  return function requestAmount(_x36, _x37, _x38, _x39) {
    return _ref18.apply(this, arguments);
  };
}();
var buyBook = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(userId, bookId) {
    var book, userAmount, userBookMark;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return _book["default"].findById(bookId);
        case 3:
          book = _context19.sent;
          _context19.next = 6;
          return _amount["default"].findOne({
            userId: userId
          });
        case 6:
          userAmount = _context19.sent;
          _context19.next = 9;
          return _bookMark["default"].findOne({
            userId: userId,
            bookId: bookId
          });
        case 9:
          userBookMark = _context19.sent;
          if (!userBookMark.isBuy) {
            _context19.next = 12;
            break;
          }
          return _context19.abrupt("return", {
            status: 400,
            message: 'Book already bought'
          });
        case 12:
          if (!userBookMark) {
            userBookMark = new _bookMark["default"]({
              userId: userId,
              bookId: bookId,
              like: false,
              follow: false,
              rating: 0,
              notes: '',
              highLights: []
            });
          }
          if (userAmount) {
            _context19.next = 15;
            break;
          }
          return _context19.abrupt("return", {
            status: 404,
            message: 'User amount not found - Please recharge your account'
          });
        case 15:
          if (!(userAmount.total < book.price)) {
            _context19.next = 17;
            break;
          }
          return _context19.abrupt("return", {
            status: 400,
            message: 'Not enough money in your account'
          });
        case 17:
          userBookMark.isBuy = true;
          _context19.next = 20;
          return userBookMark.save();
        case 20:
          userAmount.total -= book.price;
          userAmount.history.push({
            amount: -Math.abs(book.price),
            description: "".concat(bookId),
            remain: userAmount.total,
            date: new Date()
          });
          _context19.next = 24;
          return userAmount.save();
        case 24:
          return _context19.abrupt("return", {
            status: 200,
            message: 'Buy book success',
            data: {
              userAmount: userAmount,
              userBookMark: userBookMark
            }
          });
        case 27:
          _context19.prev = 27;
          _context19.t0 = _context19["catch"](0);
          return _context19.abrupt("return", {
            status: 500,
            message: _context19.t0.message
          });
        case 30:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 27]]);
  }));
  return function buyBook(_x40, _x41) {
    return _ref19.apply(this, arguments);
  };
}();
var getUserAmount = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(userId, startDate, endDate) {
    var userAmount, now, start, end, filteredHistory, _iterator, _step, item, book;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return _amount["default"].findOne({
            userId: userId
          });
        case 3:
          userAmount = _context20.sent;
          if (userAmount) {
            _context20.next = 6;
            break;
          }
          return _context20.abrupt("return", {
            status: 404,
            message: 'User amount not found'
          });
        case 6:
          // Xác định ngày đầu và cuối của tháng nếu startDate và endDate là null
          now = new Date();
          start = startDate ? new Date(startDate) : new Date(now.getFullYear(), now.getMonth(), 1); // Ngày đầu tháng
          end = endDate ? new Date(endDate) : new Date(now.getFullYear(), now.getMonth() + 1, 0); // Ngày cuối tháng
          // Lọc lịch sử theo khoảng ngày
          filteredHistory = userAmount.history.filter(function (item) {
            var itemDate = new Date(item.date); // Chuyển đổi item.date thành Date
            return itemDate >= start && itemDate <= end;
          }); // Sắp xếp lại lịch sử đã lọc từ mới đến cũ
          filteredHistory.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          });

          // Thêm chi tiết sách nếu có
          _iterator = _createForOfIteratorHelper(filteredHistory);
          _context20.prev = 12;
          _iterator.s();
        case 14:
          if ((_step = _iterator.n()).done) {
            _context20.next = 23;
            break;
          }
          item = _step.value;
          if (!(item.amount < 0 && item.description)) {
            _context20.next = 21;
            break;
          }
          _context20.next = 19;
          return _book["default"].findById(item.description);
        case 19:
          book = _context20.sent;
          if (book) {
            item.detail = book;
          }
        case 21:
          _context20.next = 14;
          break;
        case 23:
          _context20.next = 28;
          break;
        case 25:
          _context20.prev = 25;
          _context20.t0 = _context20["catch"](12);
          _iterator.e(_context20.t0);
        case 28:
          _context20.prev = 28;
          _iterator.f();
          return _context20.finish(28);
        case 31:
          return _context20.abrupt("return", {
            status: 200,
            message: 'Get user amount success',
            data: _objectSpread(_objectSpread({}, userAmount.toObject()), {}, {
              history: filteredHistory // Thay thế mảng history bằng mảng đã lọc
            })
          });
        case 34:
          _context20.prev = 34;
          _context20.t1 = _context20["catch"](0);
          return _context20.abrupt("return", {
            status: 500,
            message: _context20.t1.message
          });
        case 37:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 34], [12, 25, 28, 31]]);
  }));
  return function getUserAmount(_x42, _x43, _x44) {
    return _ref20.apply(this, arguments);
  };
}();
var getUserInfo = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(userId) {
    var user;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return _user["default"].findById(userId).populate(['amount', 'historyId']);
        case 3:
          user = _context21.sent;
          if (user) {
            _context21.next = 6;
            break;
          }
          return _context21.abrupt("return", {
            status: 404,
            message: 'User not found'
          });
        case 6:
          return _context21.abrupt("return", {
            status: 200,
            message: 'Get user info success',
            data: user
          });
        case 9:
          _context21.prev = 9;
          _context21.t0 = _context21["catch"](0);
          return _context21.abrupt("return", {
            status: 500,
            message: _context21.t0.message
          });
        case 12:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 9]]);
  }));
  return function getUserInfo(_x45) {
    return _ref21.apply(this, arguments);
  };
}();
var getPendingRequest = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(userId) {
    var requests;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return _requestAmount["default"].find({
            userId: userId,
            status: 'PENDING'
          }).populate('bankConfigId');
        case 3:
          requests = _context22.sent;
          return _context22.abrupt("return", {
            status: 200,
            message: 'Get pending request success',
            data: requests
          });
        case 7:
          _context22.prev = 7;
          _context22.t0 = _context22["catch"](0);
          return _context22.abrupt("return", {
            status: 500,
            message: _context22.t0.message
          });
        case 10:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 7]]);
  }));
  return function getPendingRequest(_x46) {
    return _ref22.apply(this, arguments);
  };
}();
var cancelPendingRequest = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(userId, requestId) {
    var result;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return _requestAmount["default"].deleteOne({
            userId: userId,
            _id: requestId,
            status: 'PENDING'
          });
        case 3:
          result = _context23.sent;
          if (!(result.deletedCount === 0)) {
            _context23.next = 6;
            break;
          }
          return _context23.abrupt("return", {
            status: 404,
            message: 'No request found to delete'
          });
        case 6:
          return _context23.abrupt("return", {
            status: 200,
            message: 'Cancel request success'
          });
        case 9:
          _context23.prev = 9;
          _context23.t0 = _context23["catch"](0);
          return _context23.abrupt("return", {
            status: 500,
            message: _context23.t0.message
          });
        case 12:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 9]]);
  }));
  return function cancelPendingRequest(_x47, _x48) {
    return _ref23.apply(this, arguments);
  };
}();
var getBoughtBook = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(userId) {
    var books;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return _bookMark["default"].find({
            userId: userId,
            isBuy: true
          }).populate('bookId');
        case 3:
          books = _context24.sent;
          return _context24.abrupt("return", {
            status: 200,
            message: 'Get bought book success',
            data: books
          });
        case 7:
          _context24.prev = 7;
          _context24.t0 = _context24["catch"](0);
          return _context24.abrupt("return", {
            status: 500,
            message: _context24.t0.message
          });
        case 10:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 7]]);
  }));
  return function getBoughtBook(_x49) {
    return _ref24.apply(this, arguments);
  };
}();
var getUserReadHistory = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(userId) {
    var history, uniqueBooks, readHistory;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return _history["default"].findOne({
            userId: userId
          });
        case 3:
          history = _context26.sent;
          if (history) {
            _context26.next = 6;
            break;
          }
          return _context26.abrupt("return", {
            status: 404,
            message: 'History not found'
          });
        case 6:
          uniqueBooks = history.books.sort(function (a, b) {
            return new Date(b.lastReadAt) - new Date(a.lastReadAt);
          }).filter(function (book, index, self) {
            return index === self.findIndex(function (b) {
              return b.bookId === book.bookId;
            });
          });
          _context26.next = 9;
          return Promise.all(uniqueBooks.map(/*#__PURE__*/function () {
            var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(book) {
              var detail;
              return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                while (1) switch (_context25.prev = _context25.next) {
                  case 0:
                    _context25.next = 2;
                    return _book["default"].findById(book.bookId).populate('authorId', '_id name').populate('categoryId', '_id name').populate('majorId', '_id name').lean();
                  case 2:
                    detail = _context25.sent;
                    return _context25.abrupt("return", {
                      bookId: book.bookId,
                      lastReadChapterId: book.lastReadChapterId,
                      lastReadAt: book.lastReadAt,
                      detail: detail
                    });
                  case 4:
                  case "end":
                    return _context25.stop();
                }
              }, _callee25);
            }));
            return function (_x51) {
              return _ref26.apply(this, arguments);
            };
          }()));
        case 9:
          readHistory = _context26.sent;
          return _context26.abrupt("return", {
            status: 200,
            message: 'Read history retrieved successfully',
            data: readHistory
          });
        case 13:
          _context26.prev = 13;
          _context26.t0 = _context26["catch"](0);
          console.error('Error in getUserReadHistory:', _context26.t0.message);
          return _context26.abrupt("return", {
            status: 500,
            message: _context26.t0.message
          });
        case 17:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 13]]);
  }));
  return function getUserReadHistory(_x50) {
    return _ref25.apply(this, arguments);
  };
}();
module.exports = {
  like: like,
  read: read,
  rate: rate,
  comment: comment,
  createUserBookMark: createUserBookMark,
  updateUserBookMark: updateUserBookMark,
  getUserBookMark: getUserBookMark,
  follow: follow,
  getFollowList: getFollowList,
  getNotification: getNotification,
  updateNotificationStatus: updateNotificationStatus,
  getHotSearch: getHotSearch,
  checkFollowBook: checkFollowBook,
  unFollow: unFollow,
  commentInChapter: commentInChapter,
  updateHistory: updateHistory,
  getUserHistory: getUserHistory,
  requestAmount: requestAmount,
  buyBook: buyBook,
  getUserAmount: getUserAmount,
  getUserInfo: getUserInfo,
  getPendingRequest: getPendingRequest,
  cancelPendingRequest: cancelPendingRequest,
  getBoughtBook: getBoughtBook,
  getUserReadHistory: getUserReadHistory
};
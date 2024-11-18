"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var tf = _interopRequireWildcard(require("@tensorflow/tfjs-node"));
var _history = _interopRequireDefault(require("../config/nosql/models/history.model"));
var _book = _interopRequireDefault(require("../config/nosql/models/book.model"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var natural = require('natural');
var loadModel = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var model;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return tf.loadLayersModel('file://model.json');
        case 3:
          model = _context.sent;
          return _context.abrupt("return", model);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Error loading model:', _context.t0.message);
          return _context.abrupt("return", {
            status: 500,
            message: _context.t0.message
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function loadModel() {
    return _ref.apply(this, arguments);
  };
}();

// Hàm để xử lý mô tả sách thành vector
function processTextToVector(text) {
  var tokenizer = new natural.TfIdf();
  tokenizer.addDocument(text);
  var vector = [];
  tokenizer.tfidfs(text, function (i, measure) {
    vector.push(measure);
  });
  return vector;
}
var preprocessHistory = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(history) {
    var userBookFeatures, _iterator, _step, book, bookData, descriptionVector, categoryVector, authorVector, combinedFeatures;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          userBookFeatures = []; // Duyệt qua từng sách trong lịch sử người dùng
          _iterator = _createForOfIteratorHelper(history.books);
          _context2.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context2.next = 17;
            break;
          }
          book = _step.value;
          _context2.next = 9;
          return _book["default"].findById(book.bookId);
        case 9:
          bookData = _context2.sent;
          // Lấy thông tin chi tiết về sách
          descriptionVector = processTextToVector(bookData.desc);
          categoryVector = processTextToVector(bookData.categoryId);
          authorVector = processTextToVector(bookData.authorId);
          combinedFeatures = [].concat(_toConsumableArray(descriptionVector), _toConsumableArray(categoryVector), _toConsumableArray(authorVector));
          userBookFeatures.push(combinedFeatures);
        case 15:
          _context2.next = 5;
          break;
        case 17:
          _context2.next = 22;
          break;
        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](3);
          _iterator.e(_context2.t0);
        case 22:
          _context2.prev = 22;
          _iterator.f();
          return _context2.finish(22);
        case 25:
          return _context2.abrupt("return", userBookFeatures);
        case 28:
          _context2.prev = 28;
          _context2.t1 = _context2["catch"](0);
          console.error('Error preprocessing history:', _context2.t1.message);
          return _context2.abrupt("return", {
            status: 500,
            message: _context2.t1.message
          });
        case 32:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 28], [3, 19, 22, 25]]);
  }));
  return function preprocessHistory(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var filterUnreadBooks = function filterUnreadBooks(books, userHistory) {
  try {
    // Chuyển đổi tất cả readBookIds sang dạng string
    var readBookIds = userHistory.books.map(function (book) {
      return book.bookId.toString();
    });

    // Lọc sách chưa đọc bằng cách so sánh với chuỗi
    var unreadBooks = books.filter(function (book) {
      return !readBookIds.includes(book.toString());
    });
    return unreadBooks;
  } catch (error) {
    console.error('Error filtering unread books:', error.message);
    return {
      status: 500,
      message: error.message
    };
  }
};
var suggestBooks = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(userId) {
    var model, userHistory, inputFeatures, inputTensor, predictions, predictionsArray, recommendedBooks, suggestionIds, books;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return loadModel();
        case 3:
          model = _context4.sent;
          _context4.next = 6;
          return _history["default"].findOne({
            userId: userId
          });
        case 6:
          userHistory = _context4.sent;
          _context4.next = 9;
          return preprocessHistory(userHistory);
        case 9:
          inputFeatures = _context4.sent;
          // Biến đổi các đặc trưng thành tensors
          inputTensor = tf.tensor2d(inputFeatures, [inputFeatures.length, inputFeatures[0].length]); // Dự đoán sách từ mô hình
          predictions = model.predict(inputTensor); // Chuyển đổi tensor dự đoán thành mảng
          _context4.next = 14;
          return predictions.array();
        case 14:
          predictionsArray = _context4.sent;
          _context4.next = 17;
          return suggestBooksBasedOnPredictions(predictionsArray);
        case 17:
          recommendedBooks = _context4.sent;
          suggestionIds = filterUnreadBooks(recommendedBooks, userHistory); // Trả về danh sách các sách chưa đọc với thông tin chi tiết
          _context4.next = 21;
          return Promise.all(suggestionIds.map(/*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bookId) {
              var book;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return _book["default"].findById(bookId).populate([{
                      path: 'authorId'
                    }, {
                      path: 'categoryId'
                    }, {
                      path: 'majorId'
                    }, {
                      path: 'review'
                    }]);
                  case 2:
                    book = _context3.sent;
                    return _context3.abrupt("return", book);
                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x3) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 21:
          books = _context4.sent;
          return _context4.abrupt("return", books);
        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4["catch"](0);
          console.error('Error suggesting books:', _context4.t0.message);
          return _context4.abrupt("return", {
            status: 500,
            message: _context4.t0.message
          });
        case 29:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 25]]);
  }));
  return function suggestBooks(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// Sau khi có kết quả, giải mã dự đoán để lấy ID sách
var preprocessBookForComparison = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(bookId) {
    var _bookData$desc;
    var bookData, tokenizer, descriptionTokens, categoryVector, authorVector, resultVector;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _book["default"].findById(bookId);
        case 2:
          bookData = _context5.sent;
          tokenizer = new natural.WordTokenizer();
          descriptionTokens = tokenizer.tokenize((_bookData$desc = bookData.desc) !== null && _bookData$desc !== void 0 ? _bookData$desc : 'None').slice(0, 50);
          categoryVector = processTextToVector(bookData.categoryId || '');
          authorVector = processTextToVector(bookData.authorId || '');
          resultVector = [].concat(_toConsumableArray(processTextToVector(descriptionTokens.join(' '))), _toConsumableArray(categoryVector), _toConsumableArray(authorVector));
          return _context5.abrupt("return", resultVector);
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function preprocessBookForComparison(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
var prepareAllBookVectors = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var books, bookVectors, _iterator2, _step2, book, vector;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _book["default"].find();
        case 2:
          books = _context6.sent;
          // Lấy tất cả sách từ cơ sở dữ liệu
          bookVectors = {};
          _iterator2 = _createForOfIteratorHelper(books);
          _context6.prev = 5;
          _iterator2.s();
        case 7:
          if ((_step2 = _iterator2.n()).done) {
            _context6.next = 15;
            break;
          }
          book = _step2.value;
          _context6.next = 11;
          return preprocessBookForComparison(book._id);
        case 11:
          vector = _context6.sent;
          bookVectors[book._id] = vector;
        case 13:
          _context6.next = 7;
          break;
        case 15:
          _context6.next = 20;
          break;
        case 17:
          _context6.prev = 17;
          _context6.t0 = _context6["catch"](5);
          _iterator2.e(_context6.t0);
        case 20:
          _context6.prev = 20;
          _iterator2.f();
          return _context6.finish(20);
        case 23:
          return _context6.abrupt("return", bookVectors);
        case 24:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[5, 17, 20, 23]]);
  }));
  return function prepareAllBookVectors() {
    return _ref6.apply(this, arguments);
  };
}();
var cosineSimilarity = function cosineSimilarity(vecA, vecB) {
  var dotProduct = vecA.reduce(function (sum, value, index) {
    return sum + value * vecB[index];
  }, 0);
  var magnitudeA = Math.sqrt(vecA.reduce(function (sum, value) {
    return sum + Math.pow(value, 2);
  }, 0));
  var magnitudeB = Math.sqrt(vecB.reduce(function (sum, value) {
    return sum + Math.pow(value, 2);
  }, 0));
  var similarity = dotProduct / (magnitudeA * magnitudeB);
  return similarity;
};
var getSimilarBooks = function getSimilarBooks(bookVectors, predictionVector) {
  var similarities = Object.entries(bookVectors).map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      bookId = _ref8[0],
      vector = _ref8[1];
    return {
      bookId: bookId,
      similarity: cosineSimilarity(vector, predictionVector)
    };
  });
  similarities.sort(function (a, b) {
    return b.similarity - a.similarity;
  }); // Sắp xếp theo độ tương đồng giảm dần

  return similarities;
};
var suggestBooksBasedOnPredictions = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(predictions) {
    var bookVectors, predictionVector, similarBooks;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return prepareAllBookVectors();
        case 2:
          bookVectors = _context7.sent;
          if (!(!predictions || !predictions[0])) {
            _context7.next = 6;
            break;
          }
          console.error('Predictions không hợp lệ:', predictions);
          return _context7.abrupt("return", []);
        case 6:
          predictionVector = predictions[0]; // Chọn vector phù hợp từ dự đoán
          similarBooks = getSimilarBooks(bookVectors, predictionVector);
          return _context7.abrupt("return", similarBooks.map(function (_ref10) {
            var bookId = _ref10.bookId;
            return bookId;
          }));
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function suggestBooksBasedOnPredictions(_x5) {
    return _ref9.apply(this, arguments);
  };
}();
module.exports = {
  suggestBooks: suggestBooks
};
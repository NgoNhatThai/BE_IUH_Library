"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _cloudinary = _interopRequireDefault(require("../config/cloudinary"));
var _book = _interopRequireDefault(require("../config/nosql/models/book.model"));
var _content = _interopRequireDefault(require("../config/nosql/models/content.model"));
var _chapter = _interopRequireDefault(require("../config/nosql/models/chapter.model"));
var _author = _interopRequireDefault(require("../config/nosql/models/author.model"));
var _category = _interopRequireDefault(require("../config/nosql/models/category.model"));
var _major = _interopRequireDefault(require("../config/nosql/models/major.model"));
var _bookMark = _interopRequireDefault(require("../config/nosql/models/book-mark.model"));
var _review = _interopRequireDefault(require("../config/nosql/models/review.model"));
var _notify = _interopRequireDefault(require("../config/nosql/models/notify.model"));
var _followList = _interopRequireDefault(require("../config/nosql/models/follow-list.model"));
var _hotSearch = _interopRequireDefault(require("../config/nosql/models/hot-search.model"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _pdfLib = require("pdf-lib");
var _pdfParse = _interopRequireDefault(require("pdf-parse"));
var _pdfPoppler = _interopRequireDefault(require("pdf-poppler"));
var _tesseract = _interopRequireDefault(require("tesseract.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(book) {
    var author, category, major, localImagePath, imagePath, bookData, content, contentData, data, review, reviewResponse;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!book.authorId) {
            _context.next = 7;
            break;
          }
          _context.next = 4;
          return _author["default"].findById(book.authorId);
        case 4:
          author = _context.sent;
          if (author) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", {
            status: 404,
            message: 'Author not found'
          });
        case 7:
          if (!book.categoryId) {
            _context.next = 13;
            break;
          }
          _context.next = 10;
          return _category["default"].findById(book.categoryId);
        case 10:
          category = _context.sent;
          if (category) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", {
            status: 404,
            message: 'Category not found'
          });
        case 13:
          if (!book.majorId) {
            _context.next = 19;
            break;
          }
          _context.next = 16;
          return _major["default"].findById(book.majorId);
        case 16:
          major = _context.sent;
          if (major) {
            _context.next = 19;
            break;
          }
          return _context.abrupt("return", {
            status: 404,
            message: 'Major not found'
          });
        case 19:
          // Upload ảnh lên Cloudinary và xử lý đường dẫn ảnh
          localImagePath = _path["default"].join('uploads/', _path["default"].basename(book.image));
          _context.next = 22;
          return _cloudinary["default"].uploader.upload(book.image, {
            public_id: book.title
          });
        case 22:
          imagePath = _context.sent;
          // Tạo đối tượng sách (không lưu vào DB ngay)
          bookData = new _book["default"](_objectSpread(_objectSpread({}, book), {}, {
            image: imagePath.secure_url,
            price: book.price ? book.price : 0,
            status: book.status ? book.status : 'ISWRITE',
            createDate: new Date()
          })); // Tạo đối tượng content và lưu content trước
          content = new _content["default"]({
            bookId: bookData._id,
            numberOfChapter: 0,
            chapters: []
          });
          _context.next = 27;
          return _content["default"].create(content);
        case 27:
          contentData = _context.sent;
          // Gán contentId vào sách trước khi lưu
          bookData.content = contentData._id;
          _context.next = 31;
          return bookData.save();
        case 31:
          data = _context.sent;
          // Tạo review và lưu
          review = new _review["default"]({
            bookId: data._id,
            totalLike: 0,
            totalView: 0,
            comments: [],
            rate: 0,
            rating: []
          });
          _context.next = 35;
          return _review["default"].create(review);
        case 35:
          reviewResponse = _context.sent;
          data.review = reviewResponse._id;
          _context.next = 39;
          return data.save();
        case 39:
          // Xóa ảnh tạm
          _fs["default"].unlinkSync(localImagePath);
          return _context.abrupt("return", {
            status: 200,
            message: 'Create book success',
            data: data
          });
        case 43:
          _context.prev = 43;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            status: 500,
            message: _context.t0.message
          });
        case 46:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 43]]);
  }));
  return function create(_x) {
    return _ref.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(book) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _book["default"].update(book);
        case 3:
          data = _context2.sent;
          return _context2.abrupt("return", {
            status: 200,
            message: 'Update book success',
            data: data
          });
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            status: 500,
            message: _context2.t0.message
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function update(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
    var book, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _book["default"].findOne(id);
        case 3:
          book = _context3.sent;
          if (book) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", {
            status: 404,
            message: 'Book not found'
          });
        case 6:
          book.active = false;
          _context3.next = 9;
          return _book["default"].update(book);
        case 9:
          data = _context3.sent;
          return _context3.abrupt("return", {
            status: 200,
            message: 'Delete book success',
            data: data
          });
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", {
            status: 500,
            message: _context3.t0.message
          });
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function remove(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var uploadToCloudinary = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(filePath) {
    var resourceType,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          resourceType = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 'image';
          return _context4.abrupt("return", new Promise(function (resolve, reject) {
            _cloudinary["default"].uploader.upload(filePath, {
              resource_type: resourceType
            }, function (error, result) {
              if (error) {
                reject(error);
              } else {
                resolve(result.secure_url);
              }
            });
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function uploadToCloudinary(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var addChapter = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(chapter) {
    var content, pdfFilePath, pdfData, pdfText, parsedData, textPages, imagePaths, _options, _imageFiles, _iterator, _step, imageFile, imageFilePath, ocrResult, options, imageFiles, _iterator2, _step2, _imageFile, _imageFilePath, imageUrl, newChapter, chapterData, result, book;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _content["default"].findById(chapter.contentId);
        case 3:
          content = _context5.sent;
          if (!chapter.title) {
            chapter.title = "Chapter ".concat((content.numberOfChapter ? content.numberOfChapter : 0) + 1);
          }
          pdfFilePath = _path["default"].join('uploads', _path["default"].basename(chapter.file.path));
          pdfData = _fs["default"].readFileSync(pdfFilePath);
          _context5.next = 9;
          return checkPdfContent(pdfFilePath, chapter.contentId);
        case 9:
          // Kiểm tra xem PDF có phải dạng văn bản không
          pdfText = '';
          _context5.prev = 10;
          _context5.next = 13;
          return (0, _pdfParse["default"])(pdfData);
        case 13:
          parsedData = _context5.sent;
          pdfText = parsedData.text;
          _context5.next = 20;
          break;
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](10);
          console.error('Lỗi trích xuất văn bản từ PDF:', _context5.t0.message);
        case 20:
          textPages = [];
          imagePaths = []; // Mảng chứa URL ảnh tải lên Cloudinary
          if (!(pdfText && pdfText.trim() !== '')) {
            _context5.next = 26;
            break;
          }
          // Nếu PDF có văn bản, phân trang theo đoạn văn bằng dấu ngắt dòng "\n\n"
          textPages = pdfText.split('\n\n');
          _context5.next = 51;
          break;
        case 26:
          // Nếu PDF không có văn bản, thực hiện OCR từ ảnh trên từng trang
          _options = {
            format: 'png',
            out_dir: _path["default"].dirname(pdfFilePath),
            out_prefix: _path["default"].basename(pdfFilePath, _path["default"].extname(pdfFilePath))
          };
          _context5.next = 29;
          return _pdfPoppler["default"].convert(pdfFilePath, _options);
        case 29:
          // Đọc danh sách các file ảnh đã tạo từ PDF
          _imageFiles = _fs["default"].readdirSync(_path["default"].dirname(pdfFilePath)).filter(function (file) {
            return file.startsWith(_options.out_prefix) && file.endsWith('.png');
          });
          _iterator = _createForOfIteratorHelper(_imageFiles);
          _context5.prev = 31;
          _iterator.s();
        case 33:
          if ((_step = _iterator.n()).done) {
            _context5.next = 43;
            break;
          }
          imageFile = _step.value;
          imageFilePath = _path["default"].join(_path["default"].dirname(pdfFilePath), imageFile); // Sử dụng Tesseract để thực hiện OCR trên ảnh của từng trang
          _context5.next = 38;
          return _tesseract["default"].recognize(imageFilePath, 'vie');
        case 38:
          ocrResult = _context5.sent;
          textPages.push(ocrResult.data.text); // Lưu văn bản trích xuất được

          // Xóa ảnh sau khi OCR và tải lên Cloudinary
          _fs["default"].unlinkSync(imageFilePath);
        case 41:
          _context5.next = 33;
          break;
        case 43:
          _context5.next = 48;
          break;
        case 45:
          _context5.prev = 45;
          _context5.t1 = _context5["catch"](31);
          _iterator.e(_context5.t1);
        case 48:
          _context5.prev = 48;
          _iterator.f();
          return _context5.finish(48);
        case 51:
          // Tạo ảnh từ PDF và tải lên Cloudinary dù có văn bản hay không
          options = {
            format: 'png',
            out_dir: _path["default"].dirname(pdfFilePath),
            out_prefix: _path["default"].basename(pdfFilePath, _path["default"].extname(pdfFilePath))
          };
          _context5.next = 54;
          return _pdfPoppler["default"].convert(pdfFilePath, options);
        case 54:
          imageFiles = _fs["default"].readdirSync(_path["default"].dirname(pdfFilePath)).filter(function (file) {
            return file.startsWith(options.out_prefix) && file.endsWith('.png');
          });
          _iterator2 = _createForOfIteratorHelper(imageFiles);
          _context5.prev = 56;
          _iterator2.s();
        case 58:
          if ((_step2 = _iterator2.n()).done) {
            _context5.next = 68;
            break;
          }
          _imageFile = _step2.value;
          _imageFilePath = _path["default"].join(_path["default"].dirname(pdfFilePath), _imageFile);
          _context5.next = 63;
          return uploadToCloudinary(_imageFilePath);
        case 63:
          imageUrl = _context5.sent;
          imagePaths.push(imageUrl);
          _fs["default"].unlinkSync(_imageFilePath);
        case 66:
          _context5.next = 58;
          break;
        case 68:
          _context5.next = 73;
          break;
        case 70:
          _context5.prev = 70;
          _context5.t2 = _context5["catch"](56);
          _iterator2.e(_context5.t2);
        case 73:
          _context5.prev = 73;
          _iterator2.f();
          return _context5.finish(73);
        case 76:
          // Xóa file PDF gốc
          _fs["default"].unlinkSync(pdfFilePath);

          // Lưu chương mới với dữ liệu đã trích xuất
          newChapter = new _chapter["default"]({
            bookId: content.bookId,
            contentId: chapter.contentId,
            title: chapter.title,
            text: textPages,
            images: imagePaths,
            // Lưu các URL ảnh đã upload lên Cloudinary
            mp3s: [],
            numberOfPage: textPages.length,
            status: 'ACTIVE'
          });
          _context5.next = 80;
          return _chapter["default"].create(newChapter);
        case 80:
          chapterData = _context5.sent;
          content.numberOfChapter += 1;
          _context5.next = 84;
          return content.save();
        case 84:
          result = _context5.sent;
          _context5.next = 87;
          return sendAddedChapterNotification(chapterData, content.bookId);
        case 87:
          if (!chapter.status) {
            _context5.next = 94;
            break;
          }
          _context5.next = 90;
          return _book["default"].findOne({
            _id: content.bookId
          });
        case 90:
          book = _context5.sent;
          book.status = chapter.status;
          _context5.next = 94;
          return book.save();
        case 94:
          if (result) {
            _context5.next = 96;
            break;
          }
          return _context5.abrupt("return", {
            status: 500,
            message: 'Lỗi cập nhật nội dung'
          });
        case 96:
          return _context5.abrupt("return", {
            status: 200,
            message: 'Thêm chương thành công',
            data: chapterData
          });
        case 99:
          _context5.prev = 99;
          _context5.t3 = _context5["catch"](0);
          console.error('Lỗi xử lý chương:', _context5.t3.message);
          return _context5.abrupt("return", {
            status: 500,
            message: _context5.t3.message
          });
        case 103:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 99], [10, 17], [31, 45, 48, 51], [56, 70, 73, 76]]);
  }));
  return function addChapter(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var addMultipleChapters = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(contentId, file, chapterTitles, chapterPaginations, status) {
    var pdfFilePath, pdfData, pdfDoc, _loop, i, content, book;
    return _regeneratorRuntime().wrap(function _callee6$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          // Đọc file PDF lớn
          pdfFilePath = _path["default"].join('uploads', _path["default"].basename(file.path));
          console.log("Reading PDF file from path: ".concat(pdfFilePath));
          pdfData = _fs["default"].readFileSync(pdfFilePath); // Tải tài liệu PDF
          _context7.next = 6;
          return _pdfLib.PDFDocument.load(pdfData);
        case 6:
          pdfDoc = _context7.sent;
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
            var pages, chapterTitle, chapterDoc, copiedPages, chapterPdfPath, chapterPdfBytes;
            return _regeneratorRuntime().wrap(function _loop$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  pages = chapterPaginations[i]; // Mảng chứa các trang của chương
                  chapterTitle = chapterTitles[i] || "Chapter ".concat(i + 1); // Tạo một tài liệu PDF mới cho từng chương
                  _context6.next = 4;
                  return _pdfLib.PDFDocument.create();
                case 4:
                  chapterDoc = _context6.sent;
                  _context6.next = 7;
                  return chapterDoc.copyPages(pdfDoc, pages.map(function (p) {
                    return p - 1;
                  }));
                case 7:
                  copiedPages = _context6.sent;
                  // Thêm từng trang đã sao chép vào chapterDoc
                  copiedPages.forEach(function (page) {
                    chapterDoc.addPage(page);
                  });

                  // Lưu file PDF cho từng chương tạm thời
                  chapterPdfPath = _path["default"].join('uploads', "chapter_".concat(i + 1, ".pdf"));
                  _context6.next = 12;
                  return chapterDoc.save();
                case 12:
                  chapterPdfBytes = _context6.sent;
                  _fs["default"].writeFileSync(chapterPdfPath, chapterPdfBytes);

                  // Gọi lại API addChapter cho chương đã tách ra
                  _context6.next = 16;
                  return addChapter({
                    contentId: contentId,
                    title: chapterTitle,
                    file: {
                      path: chapterPdfPath
                    }
                  });
                case 16:
                case "end":
                  return _context6.stop();
              }
            }, _loop);
          });
          i = 0;
        case 9:
          if (!(i < chapterPaginations.length)) {
            _context7.next = 14;
            break;
          }
          return _context7.delegateYield(_loop(), "t0", 11);
        case 11:
          i++;
          _context7.next = 9;
          break;
        case 14:
          // Xóa file PDF gốc
          _fs["default"].unlinkSync(pdfFilePath);
          if (!status) {
            _context7.next = 25;
            break;
          }
          _context7.next = 18;
          return _content["default"].findById(contentId);
        case 18:
          content = _context7.sent;
          _context7.next = 21;
          return _book["default"].findById(content.bookId);
        case 21:
          book = _context7.sent;
          book.status = 'FINISH';
          _context7.next = 25;
          return book.save();
        case 25:
          return _context7.abrupt("return", {
            status: 200,
            message: 'All chapters added successfully'
          });
        case 28:
          _context7.prev = 28;
          _context7.t1 = _context7["catch"](0);
          console.error('Error splitting PDF and adding chapters:', _context7.t1.message);
          return _context7.abrupt("return", {
            status: 500,
            message: _context7.t1.message
          });
        case 32:
        case "end":
          return _context7.stop();
      }
    }, _callee6, null, [[0, 28]]);
  }));
  return function addMultipleChapters(_x6, _x7, _x8, _x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
var addMultiChapterByOutline = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(contentId, file) {
    var pdfFilePath, pdfData, data, text, totalPages, lines, tocStartIndex, tableOfContents, i, line, match, nextLine, finalMatch, title, startPage, _loop2, _i, content, book;
    return _regeneratorRuntime().wrap(function _callee7$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          // Đọc file PDF
          pdfFilePath = _path["default"].join('uploads', _path["default"].basename(file.path));
          pdfData = _fs["default"].readFileSync(pdfFilePath); // Trích xuất nội dung văn bản từ file PDF
          _context9.next = 5;
          return (0, _pdfParse["default"])(pdfData);
        case 5:
          data = _context9.sent;
          text = data.text;
          totalPages = data.numpages; // Tổng số trang của PDF
          // Tìm từ khóa "MỤC LỤC" và lấy các dòng bên dưới
          lines = text.split('\n');
          tocStartIndex = lines.findIndex(function (line) {
            return line.includes('MỤC LỤC');
          });
          if (!(tocStartIndex === -1)) {
            _context9.next = 12;
            break;
          }
          return _context9.abrupt("return", {
            status: 400,
            message: 'Không tìm thấy MỤC LỤC trong tài liệu'
          });
        case 12:
          tableOfContents = [];
          i = tocStartIndex + 1;
        case 14:
          if (!(i < lines.length)) {
            _context9.next = 32;
            break;
          }
          line = lines[i].trim();
          if (line) {
            _context9.next = 18;
            break;
          }
          return _context9.abrupt("continue", 29);
        case 18:
          // Kiểm tra nếu dòng hiện tại không có số trang
          match = line.match(/^(.+?)\s+(\d+)$/);
          if (match) {
            _context9.next = 27;
            break;
          }
          nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
          if (!(nextLine && /^\d+$/.test(nextLine))) {
            _context9.next = 26;
            break;
          }
          line = "".concat(line, " ").concat(nextLine);
          i++;
          _context9.next = 27;
          break;
        case 26:
          return _context9.abrupt("break", 32);
        case 27:
          finalMatch = line.match(/^(.+?)\s+(\d+)$/);
          if (finalMatch) {
            // Lấy tiêu đề chương và loại bỏ các dấu "..."
            title = finalMatch[1].trim().replace(/\.+$/, '').trim(); // Bỏ các dấu chấm ở cuối
            startPage = parseInt(finalMatch[2], 10);
            tableOfContents.push({
              title: title,
              startPage: startPage
            });
          }
        case 29:
          i++;
          _context9.next = 14;
          break;
        case 32:
          if (tableOfContents.length) {
            _context9.next = 34;
            break;
          }
          return _context9.abrupt("return", {
            status: 400,
            message: 'Something wrong with outline!'
          });
        case 34:
          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
            var _tableOfContents$_i, title, startPage, endPage, pdfDoc, chapterDoc, copiedPages, chapterPdfPath, chapterPdfBytes;
            return _regeneratorRuntime().wrap(function _loop2$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _tableOfContents$_i = tableOfContents[_i], title = _tableOfContents$_i.title, startPage = _tableOfContents$_i.startPage;
                  endPage = _i < tableOfContents.length - 1 ? tableOfContents[_i + 1].startPage - 1 : totalPages; // Nếu là chương cuối, đặt trang cuối là tổng số trang
                  _context8.next = 4;
                  return _pdfLib.PDFDocument.load(pdfData);
                case 4:
                  pdfDoc = _context8.sent;
                  _context8.next = 7;
                  return _pdfLib.PDFDocument.create();
                case 7:
                  chapterDoc = _context8.sent;
                  _context8.next = 10;
                  return chapterDoc.copyPages(pdfDoc, Array.from({
                    length: endPage - startPage + 1
                  }, function (_, idx) {
                    return startPage + idx - 1;
                  }));
                case 10:
                  copiedPages = _context8.sent;
                  copiedPages.forEach(function (page) {
                    return chapterDoc.addPage(page);
                  });
                  chapterPdfPath = _path["default"].join('uploads', "chapter_".concat(_i + 1, ".pdf"));
                  _context8.next = 15;
                  return chapterDoc.save();
                case 15:
                  chapterPdfBytes = _context8.sent;
                  _fs["default"].writeFileSync(chapterPdfPath, chapterPdfBytes);
                  _context8.next = 19;
                  return addChapter({
                    contentId: contentId,
                    title: title,
                    file: {
                      path: chapterPdfPath
                    }
                  });
                case 19:
                case "end":
                  return _context8.stop();
              }
            }, _loop2);
          });
          _i = 0;
        case 36:
          if (!(_i < tableOfContents.length)) {
            _context9.next = 41;
            break;
          }
          return _context9.delegateYield(_loop2(), "t0", 38);
        case 38:
          _i++;
          _context9.next = 36;
          break;
        case 41:
          _fs["default"].unlinkSync(pdfFilePath);
          _context9.next = 44;
          return _content["default"].findById(contentId);
        case 44:
          content = _context9.sent;
          _context9.next = 47;
          return _book["default"].findById(content.bookId);
        case 47:
          book = _context9.sent;
          book.status = 'FINISH';
          _context9.next = 51;
          return book.save();
        case 51:
          return _context9.abrupt("return", {
            status: 200,
            message: 'All chapters added successfully based on table of contents'
          });
        case 54:
          _context9.prev = 54;
          _context9.t1 = _context9["catch"](0);
          console.error('Lỗi khi phân tách PDF theo MỤC LỤC:', _context9.t1.message);
          return _context9.abrupt("return", {
            status: 500,
            message: _context9.t1.message
          });
        case 58:
        case "end":
          return _context9.stop();
      }
    }, _callee7, null, [[0, 54]]);
  }));
  return function addMultiChapterByOutline(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
var getBookById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(id) {
    var data;
    return _regeneratorRuntime().wrap(function _callee8$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _book["default"].findById(id).populate('content').populate('authorId').populate('categoryId').populate('majorId');
        case 3:
          data = _context10.sent;
          return _context10.abrupt("return", {
            status: 200,
            message: 'Get book by id success',
            data: data
          });
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", {
            status: 500,
            message: _context10.t0.message
          });
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function getBookById(_x13) {
    return _ref8.apply(this, arguments);
  };
}();
var search = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(params) {
    var query, books, totalBooks;
    return _regeneratorRuntime().wrap(function _callee9$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          query = {};
          if (params.title) {
            query.title = {
              $regex: params.title,
              $options: 'i'
            };
          }
          if (params.categoryId) {
            query.categoryId = params.categoryId;
          }
          if (params.authorId) {
            query.authorId = params.authorId;
          }
          query.active = true;
          _context11.next = 8;
          return _book["default"].find(query).populate([{
            path: 'authorId'
          }, {
            path: 'categoryId'
          }]).skip(params.pageIndex * params.pageSize).limit(params.pageSize);
        case 8:
          books = _context11.sent;
          _context11.next = 11;
          return _book["default"].countDocuments(query);
        case 11:
          totalBooks = _context11.sent;
          return _context11.abrupt("return", {
            status: 200,
            message: 'Search book success',
            data: {
              total: totalBooks,
              pageIndex: params.pageIndex,
              pageSize: params.pageSize,
              data: books
            }
          });
        case 15:
          _context11.prev = 15;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", {
            status: 500,
            message: _context11.t0.message
          });
        case 18:
        case "end":
          return _context11.stop();
      }
    }, _callee9, null, [[0, 15]]);
  }));
  return function search(_x14) {
    return _ref9.apply(this, arguments);
  };
}();
var getDetailBookById = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
    var data, chapters;
    return _regeneratorRuntime().wrap(function _callee10$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _book["default"].findById(id).populate({
            path: 'content'
          }).populate('authorId').populate('categoryId').populate('majorId').populate({
            path: 'review',
            populate: {
              path: 'comments',
              populate: {
                path: 'user'
              }
            }
          });
        case 3:
          data = _context12.sent;
          _context12.next = 6;
          return _chapter["default"].find({
            contentId: data.content._id
          });
        case 6:
          chapters = _context12.sent;
          data.content.chapters = chapters;
          return _context12.abrupt("return", {
            status: 200,
            message: 'Get detail book by id success',
            data: data
          });
        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", {
            status: 500,
            message: _context12.t0.message
          });
        case 14:
        case "end":
          return _context12.stop();
      }
    }, _callee10, null, [[0, 11]]);
  }));
  return function getDetailBookById(_x15) {
    return _ref10.apply(this, arguments);
  };
}();
var getBookType = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(contentId) {
    var content, book;
    return _regeneratorRuntime().wrap(function _callee11$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _content["default"].findById(contentId);
        case 3:
          content = _context13.sent;
          _context13.next = 6;
          return _book["default"].findById(content.bookId);
        case 6:
          book = _context13.sent;
          if (book) {
            _context13.next = 9;
            break;
          }
          return _context13.abrupt("return", null);
        case 9:
          return _context13.abrupt("return", book.type);
        case 12:
          _context13.prev = 12;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", null);
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee11, null, [[0, 12]]);
  }));
  return function getBookType(_x16) {
    return _ref11.apply(this, arguments);
  };
}();
var createUserBookMark = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(userId, bookId) {
    var bookMark, data, newBookMark, _data;
    return _regeneratorRuntime().wrap(function _callee12$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return _bookMark["default"].findOne({
            userId: userId
          });
        case 3:
          bookMark = _context14.sent;
          if (!bookMark) {
            _context14.next = 14;
            break;
          }
          if (!bookMark.books.includes(bookId)) {
            _context14.next = 7;
            break;
          }
          return _context14.abrupt("return", {
            status: 400,
            message: 'Book already bookmarked'
          });
        case 7:
          bookMark.books.push(bookId);
          _context14.next = 10;
          return bookMark.save();
        case 10:
          data = _context14.sent;
          return _context14.abrupt("return", {
            status: 200,
            message: 'Create user book mark success',
            data: data
          });
        case 14:
          newBookMark = new _bookMark["default"]({
            userId: userId,
            books: [bookId]
          });
          _context14.next = 17;
          return _bookMark["default"].create(newBookMark);
        case 17:
          _data = _context14.sent;
          return _context14.abrupt("return", {
            status: 200,
            message: 'Create user book mark success',
            data: _data
          });
        case 19:
          _context14.next = 24;
          break;
        case 21:
          _context14.prev = 21;
          _context14.t0 = _context14["catch"](0);
          return _context14.abrupt("return", {
            status: 500,
            message: _context14.t0.message
          });
        case 24:
        case "end":
          return _context14.stop();
      }
    }, _callee12, null, [[0, 21]]);
  }));
  return function createUserBookMark(_x17, _x18) {
    return _ref12.apply(this, arguments);
  };
}();
var updateUserBookMark = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(userId, bookId) {
    var bookMark, data;
    return _regeneratorRuntime().wrap(function _callee13$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return _bookMark["default"].findOne({
            userId: userId
          });
        case 3:
          bookMark = _context15.sent;
          if (!bookMark) {
            _context15.next = 16;
            break;
          }
          if (!bookMark.books.includes(bookId)) {
            _context15.next = 13;
            break;
          }
          bookMark.books = bookMark.books.filter(function (id) {
            return id !== bookId;
          });
          _context15.next = 9;
          return bookMark.save();
        case 9:
          data = _context15.sent;
          return _context15.abrupt("return", {
            status: 200,
            message: 'Update user book mark success',
            data: data
          });
        case 13:
          return _context15.abrupt("return", {
            status: 400,
            message: 'Book not bookmarked'
          });
        case 14:
          _context15.next = 17;
          break;
        case 16:
          return _context15.abrupt("return", {
            status: 400,
            message: 'User book mark not found'
          });
        case 17:
          _context15.next = 22;
          break;
        case 19:
          _context15.prev = 19;
          _context15.t0 = _context15["catch"](0);
          return _context15.abrupt("return", {
            status: 500,
            message: _context15.t0.message
          });
        case 22:
        case "end":
          return _context15.stop();
      }
    }, _callee13, null, [[0, 19]]);
  }));
  return function updateUserBookMark(_x19, _x20) {
    return _ref13.apply(this, arguments);
  };
}();
var getUserBookMark = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(userId) {
    var bookMark;
    return _regeneratorRuntime().wrap(function _callee14$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return _bookMark["default"].findOne({
            userId: userId
          });
        case 3:
          bookMark = _context16.sent;
          if (!bookMark) {
            _context16.next = 8;
            break;
          }
          return _context16.abrupt("return", {
            status: 200,
            message: 'Get user book mark success',
            data: bookMark
          });
        case 8:
          return _context16.abrupt("return", {
            status: 400,
            message: 'User book mark not found'
          });
        case 9:
          _context16.next = 14;
          break;
        case 11:
          _context16.prev = 11;
          _context16.t0 = _context16["catch"](0);
          return _context16.abrupt("return", {
            status: 500,
            message: _context16.t0.message
          });
        case 14:
        case "end":
          return _context16.stop();
      }
    }, _callee14, null, [[0, 11]]);
  }));
  return function getUserBookMark(_x21) {
    return _ref14.apply(this, arguments);
  };
}();
var getTopViewedBooks = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var topReviews, bookIds, books;
    return _regeneratorRuntime().wrap(function _callee15$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return _review["default"].find().sort({
            totalView: -1
          }).limit(10).select('_id bookId');
        case 3:
          topReviews = _context17.sent;
          bookIds = topReviews.map(function (review) {
            return review.bookId;
          });
          _context17.next = 7;
          return _book["default"].find({
            _id: {
              $in: bookIds
            }
          }).populate('content').populate('authorId').populate('categoryId').populate('majorId').populate('review');
        case 7:
          books = _context17.sent;
          return _context17.abrupt("return", {
            status: 200,
            message: 'Get top viewed books success',
            data: books
          });
        case 11:
          _context17.prev = 11;
          _context17.t0 = _context17["catch"](0);
          return _context17.abrupt("return", {
            status: 500,
            message: _context17.t0.message
          });
        case 14:
        case "end":
          return _context17.stop();
      }
    }, _callee15, null, [[0, 11]]);
  }));
  return function getTopViewedBooks() {
    return _ref15.apply(this, arguments);
  };
}();
var getDetailChapterById = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(id) {
    var data, allChapters;
    return _regeneratorRuntime().wrap(function _callee16$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return _chapter["default"].findById(id).populate({
            path: 'comments',
            populate: 'user'
          }).lean();
        case 3:
          data = _context18.sent;
          _context18.next = 6;
          return _chapter["default"].find({
            contentId: data.contentId
          });
        case 6:
          allChapters = _context18.sent;
          data.allChapters = allChapters;
          return _context18.abrupt("return", {
            status: 200,
            message: 'Get detail chapter by id success',
            data: data
          });
        case 11:
          _context18.prev = 11;
          _context18.t0 = _context18["catch"](0);
          return _context18.abrupt("return", {
            status: 500,
            message: _context18.t0.message
          });
        case 14:
        case "end":
          return _context18.stop();
      }
    }, _callee16, null, [[0, 11]]);
  }));
  return function getDetailChapterById(_x22) {
    return _ref16.apply(this, arguments);
  };
}();
var getRelatedBooks = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(id) {
    var book, books;
    return _regeneratorRuntime().wrap(function _callee17$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return _book["default"].findById(id);
        case 3:
          book = _context19.sent;
          if (book) {
            _context19.next = 6;
            break;
          }
          return _context19.abrupt("return", {
            status: 404,
            message: 'Book not found'
          });
        case 6:
          _context19.next = 8;
          return _book["default"].find({
            $or: [{
              categoryId: book.categoryId
            }, {
              authorId: book.authorId
            }],
            _id: {
              $ne: book._id
            },
            active: true
          }).populate([{
            path: 'authorId'
          }, {
            path: 'categoryId'
          }, {
            path: 'majorId'
          }, {
            path: 'review'
          }]).limit(10).lean();
        case 8:
          books = _context19.sent;
          return _context19.abrupt("return", {
            status: 200,
            message: 'Get related books success',
            data: books
          });
        case 12:
          _context19.prev = 12;
          _context19.t0 = _context19["catch"](0);
          return _context19.abrupt("return", {
            status: 500,
            message: _context19.t0.message
          });
        case 15:
        case "end":
          return _context19.stop();
      }
    }, _callee17, null, [[0, 12]]);
  }));
  return function getRelatedBooks(_x23) {
    return _ref17.apply(this, arguments);
  };
}();
var findBooksByTextInput = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(text) {
    var books, hotSearch, trendingKeywords, newHotSearch;
    return _regeneratorRuntime().wrap(function _callee18$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return _book["default"].aggregate([{
            $lookup: {
              from: 'authors',
              localField: 'authorId',
              foreignField: '_id',
              as: 'authorId'
            }
          }, {
            $lookup: {
              from: 'categories',
              localField: 'categoryId',
              foreignField: '_id',
              as: 'categoryId'
            }
          }, {
            $lookup: {
              from: 'majors',
              localField: 'majorId',
              foreignField: '_id',
              as: 'majorId'
            }
          }, {
            $lookup: {
              from: 'reviews',
              localField: '_id',
              foreignField: 'bookId',
              as: 'review'
            }
          }, {
            $match: {
              active: true,
              $or: [{
                title: {
                  $regex: text,
                  $options: 'i'
                }
              }, {
                'author.name': {
                  $regex: text,
                  $options: 'i'
                }
              }, {
                'category.name': {
                  $regex: text,
                  $options: 'i'
                }
              }]
            }
          }, {
            $project: {
              title: 1,
              authorId: 1,
              categoryId: 1,
              majorId: 1,
              review: 1,
              image: 1,
              type: 1,
              createDate: 1,
              price: 1
            }
          }]).limit(10).exec();
        case 3:
          books = _context20.sent;
          _context20.next = 6;
          return _hotSearch["default"].findOne({
            keyword: text
          });
        case 6:
          hotSearch = _context20.sent;
          if (!hotSearch) {
            _context20.next = 17;
            break;
          }
          hotSearch.searchCount += 1;
          _context20.next = 11;
          return _hotSearch["default"].find().sort({
            searchCount: -1
          }).limit(10);
        case 11:
          trendingKeywords = _context20.sent;
          if (trendingKeywords.includes(hotSearch)) {
            hotSearch.isTrending = true;
          }
          _context20.next = 15;
          return hotSearch.save();
        case 15:
          _context20.next = 20;
          break;
        case 17:
          newHotSearch = new _hotSearch["default"]({
            keyword: text,
            searchCount: 1
          });
          _context20.next = 20;
          return _hotSearch["default"].create(newHotSearch);
        case 20:
          return _context20.abrupt("return", {
            status: 200,
            message: 'Find books by text input success',
            data: books
          });
        case 23:
          _context20.prev = 23;
          _context20.t0 = _context20["catch"](0);
          return _context20.abrupt("return", {
            status: 500,
            message: _context20.t0.message
          });
        case 26:
        case "end":
          return _context20.stop();
      }
    }, _callee18, null, [[0, 23]]);
  }));
  return function findBooksByTextInput(_x24) {
    return _ref18.apply(this, arguments);
  };
}();
var sendAddedChapterNotification = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(chapter, bookId) {
    var listFollowers, book;
    return _regeneratorRuntime().wrap(function _callee20$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return _followList["default"].find({
            books: {
              $in: [bookId]
            }
          }).select('userId');
        case 3:
          listFollowers = _context22.sent;
          _context22.next = 6;
          return _book["default"].findById(bookId);
        case 6:
          book = _context22.sent;
          if (book) {
            _context22.next = 9;
            break;
          }
          return _context22.abrupt("return", {
            status: 404,
            message: 'Book not found'
          });
        case 9:
          if (listFollowers) {
            listFollowers.forEach(/*#__PURE__*/function () {
              var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(follower) {
                var notify;
                return _regeneratorRuntime().wrap(function _callee19$(_context21) {
                  while (1) switch (_context21.prev = _context21.next) {
                    case 0:
                      notify = new _notify["default"]({
                        userId: follower.userId,
                        bookId: bookId,
                        chapterId: chapter._id,
                        message: "".concat(book.title, " \u0111\xE3 c\xF3 ch\u01B0\u01A1ng m\u1EDBi: ").concat(chapter.title),
                        status: 'UNREAD',
                        createDate: new Date()
                      });
                      _context21.next = 3;
                      return _notify["default"].create(notify);
                    case 3:
                    case "end":
                      return _context21.stop();
                  }
                }, _callee19);
              }));
              return function (_x27) {
                return _ref20.apply(this, arguments);
              };
            }());
          }
          _context22.next = 15;
          break;
        case 12:
          _context22.prev = 12;
          _context22.t0 = _context22["catch"](0);
          return _context22.abrupt("return", {
            status: 500,
            message: _context22.t0.message
          });
        case 15:
        case "end":
          return _context22.stop();
      }
    }, _callee20, null, [[0, 12]]);
  }));
  return function sendAddedChapterNotification(_x25, _x26) {
    return _ref19.apply(this, arguments);
  };
}();
var getBookByCategory = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(categoryId) {
    var books;
    return _regeneratorRuntime().wrap(function _callee21$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return _book["default"].find({
            categoryId: categoryId,
            active: true
          }).populate('content').populate('authorId').populate('categoryId').populate('majorId').populate('review');
        case 3:
          books = _context23.sent;
          return _context23.abrupt("return", {
            status: 200,
            message: 'Get book by category success',
            data: books
          });
        case 7:
          _context23.prev = 7;
          _context23.t0 = _context23["catch"](0);
          return _context23.abrupt("return", {
            status: 500,
            message: _context23.t0.message
          });
        case 10:
        case "end":
          return _context23.stop();
      }
    }, _callee21, null, [[0, 7]]);
  }));
  return function getBookByCategory(_x28) {
    return _ref21.apply(this, arguments);
  };
}();
var getNewBooks = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
    var books;
    return _regeneratorRuntime().wrap(function _callee22$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return _book["default"].find({
            active: true
          }).populate('content').populate('authorId').populate('categoryId').populate('majorId').populate('review').sort({
            createdAt: -1
          }).limit(10);
        case 3:
          books = _context24.sent;
          return _context24.abrupt("return", {
            status: 200,
            message: 'Get new books success',
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
    }, _callee22, null, [[0, 7]]);
  }));
  return function getNewBooks() {
    return _ref22.apply(this, arguments);
  };
}();
var hasImageInBlocks = function hasImageInBlocks(blocks) {
  var _iterator3 = _createForOfIteratorHelper(blocks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var block = _step3.value;
      // Kiểm tra xem block có phải loại "image" không
      if (block.blocktype === 'image') {
        return true;
      }
      var text = block.text || '';
      var lines = text.split('\n');

      // Biến đếm số dòng ngắn/lạ liên tục
      var consecutiveShortLines = 0;
      var _iterator4 = _createForOfIteratorHelper(lines),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var line = _step4.value;
          // Kiểm tra độ dài của dòng và tỷ lệ ký tự lạ
          var nonAlphaNumCount = line.replace(/[a-zA-Z0-9\s]/g, '').length;
          var totalLength = line.length;
          var nonAlphaNumRatio = totalLength > 0 ? nonAlphaNumCount / totalLength : 1;

          // Xác định dòng là "ngắn/lạ" nếu có tỷ lệ ký tự lạ cao hoặc độ dài ngắn
          var isShortOrUnusual = totalLength <= 5 && nonAlphaNumRatio > 0.3;
          if (isShortOrUnusual && line !== '') {
            consecutiveShortLines++;

            // Nếu có 3 dòng ngắn/lạ liên tiếp, coi block này như một ảnh
            if (consecutiveShortLines >= 4) {
              return true;
            }
          } else {
            // Nếu gặp dòng bình thường, đặt lại bộ đếm
            consecutiveShortLines = 0;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    // Nếu không phát hiện ảnh
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return false;
};
var checkPdfContent = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(filePath, contentId) {
    var outputDir, pdfData, pdfText, parsedData, hasTextOnly, hasImages, options, imageFiles, _iterator5, _step5, imageFile, imageFilePath, ocrResult, blocks, _options2, _imageFiles2, _iterator6, _step6, _imageFile2, _imageFilePath2, _ocrResult, _blocks, content, book;
    return _regeneratorRuntime().wrap(function _callee23$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          if (_fs["default"].existsSync(filePath)) {
            _context25.next = 3;
            break;
          }
          throw new Error('Tệp PDF không tồn tại.');
        case 3:
          // Tạo thư mục tạm thời để lưu hình ảnh
          outputDir = _path["default"].join(__dirname, 'output');
          if (_fs["default"].existsSync(outputDir)) {
            _fs["default"].readdirSync(outputDir).forEach(function (file) {
              return _fs["default"].unlinkSync(_path["default"].join(outputDir, file));
            });
          } else {
            // Tạo thư mục nếu chưa tồn tại
            _fs["default"].mkdirSync(outputDir);
          }
          pdfData = _fs["default"].readFileSync(filePath);
          pdfText = '';
          _context25.prev = 7;
          _context25.next = 10;
          return (0, _pdfParse["default"])(pdfData);
        case 10:
          parsedData = _context25.sent;
          pdfText = parsedData.text;
          _context25.next = 17;
          break;
        case 14:
          _context25.prev = 14;
          _context25.t0 = _context25["catch"](7);
          console.error('Lỗi trích xuất văn bản từ PDF:', _context25.t0.message);
        case 17:
          hasTextOnly = true; // Giả định ban đầu là chỉ có văn bản
          hasImages = false;
          if (!(pdfText && pdfText.trim() !== '')) {
            _context25.next = 51;
            break;
          }
          // Cấu hình cho poppler
          options = {
            format: 'png',
            out_dir: outputDir,
            out_prefix: _path["default"].basename(filePath, _path["default"].extname(filePath)),
            page: null
          }; // Chạy poppler để trích xuất hình ảnh
          _context25.next = 23;
          return _pdfPoppler["default"].convert(filePath, options);
        case 23:
          // Danh sách các file ảnh đã tạo từ PDF
          imageFiles = _fs["default"].readdirSync(outputDir).filter(function (file) {
            return file.endsWith('.png');
          });
          _iterator5 = _createForOfIteratorHelper(imageFiles);
          _context25.prev = 25;
          _iterator5.s();
        case 27:
          if ((_step5 = _iterator5.n()).done) {
            _context25.next = 41;
            break;
          }
          imageFile = _step5.value;
          imageFilePath = _path["default"].join(outputDir, imageFile); // Sử dụng Tesseract để OCR
          _context25.next = 32;
          return _tesseract["default"].recognize(imageFilePath, 'vie');
        case 32:
          ocrResult = _context25.sent;
          blocks = ocrResult.data.blocks; // Duyệt qua từng block để kiểm tra
          if (!hasImageInBlocks(blocks)) {
            _context25.next = 38;
            break;
          }
          hasImages = true;
          hasTextOnly = false;
          return _context25.abrupt("break", 41);
        case 38:
          // Xóa file ảnh sau khi kiểm tra
          _fs["default"].unlinkSync(imageFilePath);
        case 39:
          _context25.next = 27;
          break;
        case 41:
          _context25.next = 46;
          break;
        case 43:
          _context25.prev = 43;
          _context25.t1 = _context25["catch"](25);
          _iterator5.e(_context25.t1);
        case 46:
          _context25.prev = 46;
          _iterator5.f();
          return _context25.finish(46);
        case 49:
          _context25.next = 80;
          break;
        case 51:
          // Cấu hình cho poppler
          _options2 = {
            format: 'png',
            out_dir: outputDir,
            out_prefix: _path["default"].basename(filePath, _path["default"].extname(filePath)),
            page: null
          }; // Chạy poppler để trích xuất hình ảnh
          _context25.next = 54;
          return _pdfPoppler["default"].convert(filePath, _options2);
        case 54:
          // Danh sách các file ảnh đã tạo từ PDF
          _imageFiles2 = _fs["default"].readdirSync(outputDir).filter(function (file) {
            return file.endsWith('.png');
          });
          _iterator6 = _createForOfIteratorHelper(_imageFiles2);
          _context25.prev = 56;
          _iterator6.s();
        case 58:
          if ((_step6 = _iterator6.n()).done) {
            _context25.next = 72;
            break;
          }
          _imageFile2 = _step6.value;
          _imageFilePath2 = _path["default"].join(outputDir, _imageFile2); // Sử dụng Tesseract để OCR
          _context25.next = 63;
          return _tesseract["default"].recognize(_imageFilePath2, 'vie');
        case 63:
          _ocrResult = _context25.sent;
          _blocks = _ocrResult.data.blocks; // Duyệt qua từng block để kiểm tra
          if (!hasImageInBlocks(_blocks)) {
            _context25.next = 69;
            break;
          }
          hasImages = true;
          hasTextOnly = false;
          return _context25.abrupt("break", 72);
        case 69:
          // Xóa file ảnh sau khi kiểm tra
          _fs["default"].unlinkSync(_imageFilePath2);
        case 70:
          _context25.next = 58;
          break;
        case 72:
          _context25.next = 77;
          break;
        case 74:
          _context25.prev = 74;
          _context25.t2 = _context25["catch"](56);
          _iterator6.e(_context25.t2);
        case 77:
          _context25.prev = 77;
          _iterator6.f();
          return _context25.finish(77);
        case 80:
          _context25.next = 82;
          return _content["default"].findOne({
            _id: contentId
          });
        case 82:
          content = _context25.sent;
          if (content) {
            _context25.next = 85;
            break;
          }
          throw new Error('Content ID không tồn tại!');
        case 85:
          _context25.next = 87;
          return _book["default"].findOne({
            _id: content.bookId
          });
        case 87:
          book = _context25.sent;
          if (book) {
            _context25.next = 90;
            break;
          }
          throw new Error('Book ID không tồn tại!');
        case 90:
          // Cập nhật type của sách dựa vào nội dung PDF

          if (hasImages) {
            book.type = 'IMAGE';
          } else if (!hasImages && book.type !== 'IMAGE') {
            book.type = 'VOICE';
          }

          // Lưu cập nhật của sách
          _context25.next = 93;
          return book.save();
        case 93:
          _context25.next = 99;
          break;
        case 95:
          _context25.prev = 95;
          _context25.t3 = _context25["catch"](0);
          console.error('Kiểm tra file PDF thất bại:', _context25.t3.message);
          throw new Error("Ki\u1EC3m tra file PDF th\u1EA5t b\u1EA1i: ".concat(_context25.t3.message));
        case 99:
        case "end":
          return _context25.stop();
      }
    }, _callee23, null, [[0, 95], [7, 14], [25, 43, 46, 49], [56, 74, 77, 80]]);
  }));
  return function checkPdfContent(_x29, _x30) {
    return _ref23.apply(this, arguments);
  };
}();
var deleteChapter = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(chapterId) {
    var _deleteChapter, contentUpdateResult, chapter;
    return _regeneratorRuntime().wrap(function _callee24$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return _chapter["default"].findOne({
            _id: chapterId
          });
        case 3:
          _deleteChapter = _context26.sent;
          if (_deleteChapter) {
            _context26.next = 6;
            break;
          }
          return _context26.abrupt("return", {
            status: 500,
            message: 'Failed to find chapter!'
          });
        case 6:
          _context26.next = 8;
          return _content["default"].findOneAndUpdate({
            _id: _deleteChapter.contentId
          }, {
            $pull: {
              chapters: chapterId
            },
            $inc: {
              numberOfChapter: -1
            }
          }, {
            "new": true
          });
        case 8:
          contentUpdateResult = _context26.sent;
          if (contentUpdateResult) {
            _context26.next = 11;
            break;
          }
          return _context26.abrupt("return", {
            status: 500,
            message: 'Failed to update content number of chapters!'
          });
        case 11:
          _context26.next = 13;
          return _chapter["default"].findByIdAndDelete(chapterId);
        case 13:
          chapter = _context26.sent;
          if (chapter) {
            _context26.next = 16;
            break;
          }
          return _context26.abrupt("return", {
            status: 404,
            message: 'Chapter not found!'
          });
        case 16:
          return _context26.abrupt("return", {
            status: 200,
            message: 'Delete chapter successfully!'
          });
        case 19:
          _context26.prev = 19;
          _context26.t0 = _context26["catch"](0);
          console.error('Delete chapter fail:', _context26.t0.message);
          return _context26.abrupt("return", {
            status: 500,
            message: _context26.t0.message
          });
        case 23:
        case "end":
          return _context26.stop();
      }
    }, _callee24, null, [[0, 19]]);
  }));
  return function deleteChapter(_x31) {
    return _ref24.apply(this, arguments);
  };
}();
module.exports = {
  create: create,
  update: update,
  remove: remove,
  addChapter: addChapter,
  getBookById: getBookById,
  search: search,
  getDetailBookById: getDetailBookById,
  getBookType: getBookType,
  createUserBookMark: createUserBookMark,
  updateUserBookMark: updateUserBookMark,
  getUserBookMark: getUserBookMark,
  getTopViewedBooks: getTopViewedBooks,
  getDetailChapterById: getDetailChapterById,
  getRelatedBooks: getRelatedBooks,
  findBooksByTextInput: findBooksByTextInput,
  getBookByCategory: getBookByCategory,
  getNewBooks: getNewBooks,
  addMultipleChapters: addMultipleChapters,
  deleteChapter: deleteChapter,
  addMultiChapterByOutline: addMultiChapterByOutline
};
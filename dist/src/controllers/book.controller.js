"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _bookService = _interopRequireDefault(require("../services/book.service.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var book, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          book = _objectSpread(_objectSpread({}, req.body), {}, {
            image: req.file.path
          });
          if (!(!book.title || !book.image)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).send('Bad request: Missing fields'));
        case 4:
          if (req.file) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: 'File is required'
          }));
        case 6:
          _context.next = 8;
          return _bookService["default"].create(book);
        case 8:
          data = _context.sent;
          res.status(200).json(data);
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          res.status(500).send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return function create(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var update = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var book, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          book = req.body;
          _context2.next = 4;
          return _bookService["default"].update(book);
        case 4:
          data = _context2.sent;
          res.status(200).json(data);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send(_context2.t0.message);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function update(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var remove = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, book, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _bookService["default"].getBookById(id);
        case 4:
          book = _context3.sent;
          if (book) {
            _context3.next = 8;
            break;
          }
          res.status(404).send('Book not found');
          return _context3.abrupt("return");
        case 8:
          book.status = 'INACTIVE';
          _context3.next = 11;
          return _bookService["default"].update(book);
        case 11:
          data = _context3.sent;
          res.status(200).json(data);
          _context3.next = 18;
          break;
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](0);
          res.status(500).send(_context3.t0.message);
        case 18:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 15]]);
  }));
  return function remove(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var addChapter = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var chapter, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          if (!(!req.file || !req.body.contentId)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).send('Bad request: missing file or contentID'));
        case 3:
          chapter = _objectSpread(_objectSpread({}, req.body), {}, {
            file: req.file
          });
          _context4.next = 6;
          return _bookService["default"].addChapter(chapter);
        case 6:
          data = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(data));
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).send(_context4.t0.message));
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function addChapter(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getBookById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return _bookService["default"].getBookById(id);
        case 4:
          data = _context5.sent;
          res.status(200).json(data);
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.status(500).send(_context5.t0.message);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return function getBookById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var search = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var params, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          params = req.query;
          if (Object.keys(params).length) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(400).send('Bad request: Missing params'));
        case 4:
          _context6.next = 6;
          return _bookService["default"].search(params);
        case 6:
          data = _context6.sent;
          res.status(200).json(data);
          _context6.next = 13;
          break;
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          res.status(500).send(_context6.t0.message);
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function search(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getDetailBookById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return _bookService["default"].getDetailBookById(id);
        case 4:
          data = _context7.sent;
          res.status(200).json(data);
          _context7.next = 11;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          res.status(500).send(_context7.t0.message);
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function getDetailBookById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getBookType = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var contentId, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          contentId = req.query.contentId;
          if (contentId) {
            _context8.next = 4;
            break;
          }
          return _context8.abrupt("return", res.status(400).send('Bad request: Missing contentId'));
        case 4:
          _context8.next = 6;
          return _bookService["default"].getBookType(contentId);
        case 6:
          data = _context8.sent;
          res.status(200).json(data);
          _context8.next = 13;
          break;
        case 10:
          _context8.prev = 10;
          _context8.t0 = _context8["catch"](0);
          res.status(500).send(_context8.t0.message);
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 10]]);
  }));
  return function getBookType(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getBookReview = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var bookId, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          bookId = req.query.bookId;
          if (bookId) {
            _context9.next = 4;
            break;
          }
          return _context9.abrupt("return", res.status(400).send('Bad request: Missing bookId'));
        case 4:
          _context9.next = 6;
          return _bookService["default"].getBookReview(bookId);
        case 6:
          data = _context9.sent;
          res.status(200).json(data);
          _context9.next = 13;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](0);
          res.status(500).send(_context9.t0.message);
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 10]]);
  }));
  return function getBookReview(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getTopViewedBooks = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _bookService["default"].getTopViewedBooks();
        case 3:
          data = _context10.sent;
          res.status(200).json(data);
          _context10.next = 10;
          break;
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          res.status(500).send(_context10.t0.message);
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function getTopViewedBooks(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var getDetailChapterById = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          id = req.params.id;
          _context11.next = 4;
          return _bookService["default"].getDetailChapterById(id);
        case 4:
          data = _context11.sent;
          res.status(200).json(data);
          _context11.next = 11;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          res.status(500).send(_context11.t0.message);
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return function getDetailChapterById(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var getRelatedBooks = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var id, data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          id = req.params.id;
          if (id) {
            _context12.next = 5;
            break;
          }
          res.status(400).send('Bad request');
          return _context12.abrupt("return", {
            status: 400,
            message: 'Missing book id'
          });
        case 5:
          _context12.next = 7;
          return _bookService["default"].getRelatedBooks(id);
        case 7:
          data = _context12.sent;
          res.status(200).json(data);
          _context12.next = 14;
          break;
        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](0);
          res.status(500).send(_context12.t0.message);
        case 14:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 11]]);
  }));
  return function getRelatedBooks(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var findBooksByTextInput = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var text, data;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          text = req.query.text;
          if (text) {
            _context13.next = 5;
            break;
          }
          res.status(400).send('Bad request');
          return _context13.abrupt("return", {
            status: 400,
            message: 'Missing text'
          });
        case 5:
          _context13.next = 7;
          return _bookService["default"].findBooksByTextInput(text);
        case 7:
          data = _context13.sent;
          // Sử dụng text trực tiếp
          res.status(200).json(data);
          _context13.next = 14;
          break;
        case 11:
          _context13.prev = 11;
          _context13.t0 = _context13["catch"](0);
          res.status(500).send(_context13.t0.message);
        case 14:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 11]]);
  }));
  return function findBooksByTextInput(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var getBookByCategory = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          id = req.params.id;
          if (id) {
            _context14.next = 5;
            break;
          }
          res.status(400).send('Bad request');
          return _context14.abrupt("return", {
            status: 400,
            message: 'Missing category id'
          });
        case 5:
          _context14.next = 7;
          return _bookService["default"].getBookByCategory(id);
        case 7:
          data = _context14.sent;
          res.status(200).json(data);
          _context14.next = 14;
          break;
        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14["catch"](0);
          res.status(500).send(_context14.t0.message);
        case 14:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 11]]);
  }));
  return function getBookByCategory(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var getNewBooks = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return _bookService["default"].getNewBooks();
        case 3:
          data = _context15.sent;
          res.status(200).json(data);
          _context15.next = 10;
          break;
        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          res.status(500).send(_context15.t0.message);
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return function getNewBooks(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var addMultipleChapters = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var _req$body, contentId, status, chapterTitles, chapterPaginations, file, data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _req$body = req.body, contentId = _req$body.contentId, status = _req$body.status;
          chapterTitles = req.body.chapterTitles;
          chapterPaginations = req.body.chapterPaginations;
          file = req.file; // Kiểm tra và chuyển đổi `chapterTitles` về dạng mảng nếu nó là chuỗi JSON
          if (!(typeof chapterTitles === 'string')) {
            _context16.next = 13;
            break;
          }
          _context16.prev = 6;
          chapterTitles = JSON.parse(chapterTitles);
          _context16.next = 13;
          break;
        case 10:
          _context16.prev = 10;
          _context16.t0 = _context16["catch"](6);
          return _context16.abrupt("return", res.status(400).send('Invalid format for chapterTitles'));
        case 13:
          if (!(typeof chapterPaginations === 'string')) {
            _context16.next = 21;
            break;
          }
          _context16.prev = 14;
          chapterPaginations = JSON.parse(chapterPaginations);
          _context16.next = 21;
          break;
        case 18:
          _context16.prev = 18;
          _context16.t1 = _context16["catch"](14);
          return _context16.abrupt("return", res.status(400).send('Invalid format for chapterPaginations'));
        case 21:
          console.log({
            chapterTitles: chapterTitles
          });
          console.log({
            chapterPaginations: chapterPaginations
          });
          if (!(!contentId || !file || !Array.isArray(chapterTitles) || !Array.isArray(chapterPaginations) || !chapterTitles.length || !chapterPaginations.length)) {
            _context16.next = 25;
            break;
          }
          return _context16.abrupt("return", res.status(400).send('Bad request: missing or invalid params contentId, file, chapterTitles, or chapterPaginations'));
        case 25:
          _context16.next = 27;
          return _bookService["default"].addMultipleChapters(contentId, file, chapterTitles, chapterPaginations, status);
        case 27:
          data = _context16.sent;
          return _context16.abrupt("return", res.status(200).json(data));
        case 31:
          _context16.prev = 31;
          _context16.t2 = _context16["catch"](0);
          return _context16.abrupt("return", res.status(500).send(_context16.t2.message));
        case 34:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 31], [6, 10], [14, 18]]);
  }));
  return function addMultipleChapters(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var deleteChapter = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var chapterId, data;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          chapterId = req.body.chapterId;
          if (chapterId) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(400).send('Missing params chapterID'));
        case 4:
          _context17.next = 6;
          return _bookService["default"].deleteChapter(chapterId);
        case 6:
          data = _context17.sent;
          res.status(200).json(data);
          _context17.next = 13;
          break;
        case 10:
          _context17.prev = 10;
          _context17.t0 = _context17["catch"](0);
          res.status(500).send(_context17.t0.message);
        case 13:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 10]]);
  }));
  return function deleteChapter(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var addMultiChapterByOutline = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var contentId, file, data;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          contentId = req.body.contentId;
          file = req.file;
          if (!(!contentId || !file)) {
            _context18.next = 5;
            break;
          }
          return _context18.abrupt("return", res.status(400).send('Bad request: missing file or contentID'));
        case 5:
          _context18.next = 7;
          return _bookService["default"].addMultiChapterByOutline(contentId, file);
        case 7:
          data = _context18.sent;
          return _context18.abrupt("return", res.status(200).json(data));
        case 11:
          _context18.prev = 11;
          _context18.t0 = _context18["catch"](0);
          return _context18.abrupt("return", res.status(500).send(_context18.t0.message));
        case 14:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 11]]);
  }));
  return function addMultiChapterByOutline(_x35, _x36) {
    return _ref18.apply(this, arguments);
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
  getBookReview: getBookReview,
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
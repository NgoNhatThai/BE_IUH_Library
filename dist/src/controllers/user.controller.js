"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _user = _interopRequireDefault(require("../services/user.service"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var like = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, userId, bookId, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, userId = _req$body.userId, bookId = _req$body.bookId;
          _context.next = 4;
          return _user["default"].like(userId, bookId);
        case 4:
          data = _context.sent;
          return _context.abrupt("return", res.status(200).json(data));
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send(_context.t0.message));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function like(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var read = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body2, userId, bookId, chapterId, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, userId = _req$body2.userId, bookId = _req$body2.bookId, chapterId = _req$body2.chapterId;
          if (!(!bookId || !userId || !chapterId)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).send('Missing params: userID, bookID or chapterID'));
        case 4:
          _context2.next = 6;
          return _user["default"].read(userId, bookId, chapterId);
        case 6:
          data = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(data));
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).send(_context2.t0.message));
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function read(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var rate = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body3, userId, bookId, rating, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$body3 = req.body, userId = _req$body3.userId, bookId = _req$body3.bookId, rating = _req$body3.rating;
          if (!(!userId || !bookId || !rating)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).send('User id, book id and rating are required'));
        case 4:
          _context3.next = 6;
          return _user["default"].rate(userId, bookId, rating);
        case 6:
          data = _context3.sent;
          return _context3.abrupt("return", res.status(200).json(data));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).send(_context3.t0.message));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function rate(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var comment = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body4, userId, bookId, _comment, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body4 = req.body, userId = _req$body4.userId, bookId = _req$body4.bookId, _comment = _req$body4.comment;
          _context4.next = 4;
          return _user["default"].comment(userId, bookId, _comment);
        case 4:
          data = _context4.sent;
          return _context4.abrupt("return", res.status(200).json(data));
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).send(_context4.t0.message));
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function comment(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var createUserBookMark = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body5, userId, bookId, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body5 = req.body, userId = _req$body5.userId, bookId = _req$body5.bookId;
          if (!(!userId || !bookId)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.status(400).send('Missing params'));
        case 4:
          _context5.next = 6;
          return _user["default"].createUserBookMark(userId, bookId);
        case 6:
          data = _context5.sent;
          return _context5.abrupt("return", res.status(200).json(data));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).send(_context5.t0.message));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function createUserBookMark(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateUserBookMark = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$body6, userId, bookId, chapterId, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$body6 = req.body, userId = _req$body6.userId, bookId = _req$body6.bookId, chapterId = _req$body6.chapterId;
          if (!(!userId || !bookId || !chapterId)) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return", res.status(400).send('Missing params!'));
        case 4:
          _context6.next = 6;
          return _user["default"].updateUserBookMark(_objectSpread({}, req.body));
        case 6:
          data = _context6.sent;
          return _context6.abrupt("return", res.status(200).json(data));
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).send(_context6.t0.message));
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function updateUserBookMark(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var getUserBookMark = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$query, userId, bookId, data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$query = req.query, userId = _req$query.userId, bookId = _req$query.bookId;
          if (!(!userId || !bookId)) {
            _context7.next = 4;
            break;
          }
          return _context7.abrupt("return", res.status(400).send('Bad request: Missing userId or book ID'));
        case 4:
          _context7.next = 6;
          return _user["default"].getUserBookMark(userId, bookId);
        case 6:
          data = _context7.sent;
          return _context7.abrupt("return", res.status(200).json(data));
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).send(_context7.t0.message));
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function getUserBookMark(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var follow = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$body7, userId, bookId, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$body7 = req.body, userId = _req$body7.userId, bookId = _req$body7.bookId;
          _context8.next = 4;
          return _user["default"].follow(userId, bookId);
        case 4:
          data = _context8.sent;
          return _context8.abrupt("return", res.status(200).json(data));
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).send(_context8.t0.message));
        case 11:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return function follow(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getFollowList = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$query2, userId, pageIndex, pageSize, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$query2 = req.query, userId = _req$query2.userId, pageIndex = _req$query2.pageIndex, pageSize = _req$query2.pageSize;
          if (!(!userId || !pageIndex || !pageSize)) {
            _context9.next = 4;
            break;
          }
          return _context9.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context9.next = 6;
          return _user["default"].getFollowList(userId, pageIndex, pageSize);
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
  return function getFollowList(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var getNotification = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var userId, data;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          userId = req.query.userId;
          if (userId) {
            _context10.next = 4;
            break;
          }
          return _context10.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context10.next = 6;
          return _user["default"].getNotification(userId);
        case 6:
          data = _context10.sent;
          res.status(200).json(data);
          _context10.next = 13;
          break;
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          res.status(500).send(_context10.t0.message);
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function getNotification(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
var updateNotificationStatus = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$body8, userId, notifyId, data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$body8 = req.body, userId = _req$body8.userId, notifyId = _req$body8.notifyId;
          if (!(!userId || !notifyId)) {
            _context11.next = 4;
            break;
          }
          return _context11.abrupt("return", res.status(400).send('User id and notify id are required'));
        case 4:
          _context11.next = 6;
          return _user["default"].updateNotificationStatus(userId, notifyId);
        case 6:
          data = _context11.sent;
          res.status(200).json(data);
          _context11.next = 13;
          break;
        case 10:
          _context11.prev = 10;
          _context11.t0 = _context11["catch"](0);
          res.status(500).send(_context11.t0.message);
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 10]]);
  }));
  return function updateNotificationStatus(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
var getHotSearch = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _user["default"].getHotSearch();
        case 3:
          data = _context12.sent;
          res.status(200).json(data);
          _context12.next = 10;
          break;
        case 7:
          _context12.prev = 7;
          _context12.t0 = _context12["catch"](0);
          res.status(500).send(_context12.t0.message);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 7]]);
  }));
  return function getHotSearch(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
var checkFollowBook = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$query3, userId, bookId, data;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _req$query3 = req.query, userId = _req$query3.userId, bookId = _req$query3.bookId;
          if (!(!userId || !bookId)) {
            _context13.next = 4;
            break;
          }
          return _context13.abrupt("return", res.status(400).send('User id and book id are required'));
        case 4:
          _context13.next = 6;
          return _user["default"].checkFollowBook(userId, bookId);
        case 6:
          data = _context13.sent;
          res.status(200).json(data);
          _context13.next = 13;
          break;
        case 10:
          _context13.prev = 10;
          _context13.t0 = _context13["catch"](0);
          res.status(500).send(_context13.t0.message);
        case 13:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 10]]);
  }));
  return function checkFollowBook(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
var unFollow = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var _req$query4, userId, bookId, data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _req$query4 = req.query, userId = _req$query4.userId, bookId = _req$query4.bookId;
          _context14.next = 4;
          return _user["default"].unFollow(userId, bookId);
        case 4:
          data = _context14.sent;
          res.status(200).json(data);
          _context14.next = 11;
          break;
        case 8:
          _context14.prev = 8;
          _context14.t0 = _context14["catch"](0);
          res.status(500).send(_context14.t0.message);
        case 11:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 8]]);
  }));
  return function unFollow(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
var commentInChapter = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _req$body9, userId, chapterId, _comment2, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _req$body9 = req.body, userId = _req$body9.userId, chapterId = _req$body9.chapterId, _comment2 = _req$body9.comment;
          if (!(!userId || !chapterId || !_comment2)) {
            _context15.next = 4;
            break;
          }
          return _context15.abrupt("return", res.status(400).send('User id, chapter id and comment are required'));
        case 4:
          _context15.next = 6;
          return _user["default"].commentInChapter(userId, chapterId, _comment2);
        case 6:
          data = _context15.sent;
          res.status(200).json(data);
          _context15.next = 13;
          break;
        case 10:
          _context15.prev = 10;
          _context15.t0 = _context15["catch"](0);
          res.status(500).send(_context15.t0.message);
        case 13:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 10]]);
  }));
  return function commentInChapter(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var getUserHistory = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var userId, data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          userId = req.query.userId;
          if (userId) {
            _context16.next = 4;
            break;
          }
          return _context16.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context16.next = 6;
          return _user["default"].getUserHistory(userId);
        case 6:
          data = _context16.sent;
          res.status(200).json(data);
          _context16.next = 13;
          break;
        case 10:
          _context16.prev = 10;
          _context16.t0 = _context16["catch"](0);
          res.status(500).send(_context16.t0.message);
        case 13:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 10]]);
  }));
  return function getUserHistory(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
var requestAmount = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var _req$body10, userId, amount, description, bankConfigId, data;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _req$body10 = req.body, userId = _req$body10.userId, amount = _req$body10.amount, description = _req$body10.description, bankConfigId = _req$body10.bankConfigId;
          if (!(!userId || !amount || !bankConfigId)) {
            _context17.next = 4;
            break;
          }
          return _context17.abrupt("return", res.status(400).send('User id, bankId and amount are required'));
        case 4:
          _context17.next = 6;
          return _user["default"].requestAmount(userId, amount, description, bankConfigId);
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
  return function requestAmount(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
var buyBook = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var _req$body11, userId, bookId, data;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _req$body11 = req.body, userId = _req$body11.userId, bookId = _req$body11.bookId;
          if (!(!userId || !bookId)) {
            _context18.next = 4;
            break;
          }
          return _context18.abrupt("return", res.status(400).send('User id and book id are required'));
        case 4:
          _context18.next = 6;
          return _user["default"].buyBook(userId, bookId);
        case 6:
          data = _context18.sent;
          res.status(200).json(data);
          _context18.next = 13;
          break;
        case 10:
          _context18.prev = 10;
          _context18.t0 = _context18["catch"](0);
          res.status(500).send(_context18.t0.message);
        case 13:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 10]]);
  }));
  return function buyBook(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
var getUserAmount = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var _req$query5, userId, startDate, endDate, data;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _req$query5 = req.query, userId = _req$query5.userId, startDate = _req$query5.startDate, endDate = _req$query5.endDate;
          if (userId) {
            _context19.next = 4;
            break;
          }
          return _context19.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context19.next = 6;
          return _user["default"].getUserAmount(userId, startDate, endDate);
        case 6:
          data = _context19.sent;
          res.status(200).json(data);
          _context19.next = 13;
          break;
        case 10:
          _context19.prev = 10;
          _context19.t0 = _context19["catch"](0);
          res.status(500).send(_context19.t0.message);
        case 13:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 10]]);
  }));
  return function getUserAmount(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
var getUserInfo = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var userId, data;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          userId = req.query.userId;
          if (userId) {
            _context20.next = 4;
            break;
          }
          return _context20.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context20.next = 6;
          return _user["default"].getUserInfo(userId);
        case 6:
          data = _context20.sent;
          res.status(200).json(data);
          _context20.next = 13;
          break;
        case 10:
          _context20.prev = 10;
          _context20.t0 = _context20["catch"](0);
          res.status(500).send(_context20.t0.message);
        case 13:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 10]]);
  }));
  return function getUserInfo(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
var getPendingRequest = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var userId, data;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          userId = req.query.userId;
          if (userId) {
            _context21.next = 4;
            break;
          }
          return _context21.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context21.next = 6;
          return _user["default"].getPendingRequest(userId);
        case 6:
          data = _context21.sent;
          res.status(200).json(data);
          _context21.next = 13;
          break;
        case 10:
          _context21.prev = 10;
          _context21.t0 = _context21["catch"](0);
          res.status(500).send(_context21.t0.message);
        case 13:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 10]]);
  }));
  return function getPendingRequest(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
var cancelPendingRequest = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var _req$body12, userId, requestId, data;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _req$body12 = req.body, userId = _req$body12.userId, requestId = _req$body12.requestId;
          if (!(!userId || !requestId)) {
            _context22.next = 4;
            break;
          }
          return _context22.abrupt("return", res.status(400).send('User id and request id are required'));
        case 4:
          _context22.next = 6;
          return _user["default"].cancelPendingRequest(userId, requestId);
        case 6:
          data = _context22.sent;
          res.status(200).json(data);
          _context22.next = 13;
          break;
        case 10:
          _context22.prev = 10;
          _context22.t0 = _context22["catch"](0);
          res.status(500).send(_context22.t0.message);
        case 13:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 10]]);
  }));
  return function cancelPendingRequest(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
var getBoughtBook = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var userId, data;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          userId = req.query.userId;
          if (userId) {
            _context23.next = 4;
            break;
          }
          return _context23.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context23.next = 6;
          return _user["default"].getBoughtBook(userId);
        case 6:
          data = _context23.sent;
          res.status(200).json(data);
          _context23.next = 13;
          break;
        case 10:
          _context23.prev = 10;
          _context23.t0 = _context23["catch"](0);
          res.status(500).send(_context23.t0.message);
        case 13:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 10]]);
  }));
  return function getBoughtBook(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();
var getUserReadHistory = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var userId, data;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          userId = req.query.userId;
          if (userId) {
            _context24.next = 4;
            break;
          }
          return _context24.abrupt("return", res.status(400).send('User id is required'));
        case 4:
          _context24.next = 6;
          return _user["default"].getUserReadHistory(userId);
        case 6:
          data = _context24.sent;
          res.status(200).json(data);
          _context24.next = 13;
          break;
        case 10:
          _context24.prev = 10;
          _context24.t0 = _context24["catch"](0);
          res.status(500).send(_context24.t0.message);
        case 13:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 10]]);
  }));
  return function getUserReadHistory(_x47, _x48) {
    return _ref24.apply(this, arguments);
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
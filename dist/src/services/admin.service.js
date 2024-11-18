"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _author = _interopRequireDefault(require("../config/nosql/models/author.model"));
var _category = _interopRequireDefault(require("../config/nosql/models/category.model"));
var _major = _interopRequireDefault(require("../config/nosql/models/major.model"));
var _configLibrary = _interopRequireDefault(require("../config/nosql/models/config-library.model"));
var _requestAmount = _interopRequireDefault(require("../config/nosql/models/requestAmount.model"));
var _amount = _interopRequireDefault(require("../config/nosql/models/amount.model"));
var _bankAccount = _interopRequireDefault(require("../config/nosql/models/bankAccount.model"));
var _notify = _interopRequireDefault(require("../config/nosql/models/notify.model"));
var _user = _interopRequireDefault(require("../config/nosql/models/user.model"));
var _axios = _interopRequireDefault(require("axios"));
var _cloudinary = _interopRequireDefault(require("../config/cloudinary"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var getAllUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageIndex, pageSize) {
    var skip, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          skip = pageIndex * pageSize;
          _context.next = 4;
          return _user["default"].find().skip(skip).limit(pageSize);
        case 4:
          data = _context.sent;
          return _context.abrupt("return", {
            status: 200,
            message: 'Get all user success',
            data: data,
            pagination: {
              pageIndex: pageIndex,
              pageSize: pageSize
            }
          });
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            status: 500,
            message: _context.t0.message
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getAllUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createAuthor = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(author) {
    var newAuthor, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          newAuthor = new _author["default"](_objectSpread({}, author));
          _context2.next = 4;
          return _author["default"].create(newAuthor);
        case 4:
          data = _context2.sent;
          return _context2.abrupt("return", {
            status: 200,
            message: 'Create author success',
            data: data
          });
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            status: 500,
            message: _context2.t0.message
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function createAuthor(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
var updateAuthor = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(author) {
    var data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _author["default"].update(author);
        case 3:
          data = _context3.sent;
          return _context3.abrupt("return", {
            status: 200,
            message: 'Update author success',
            data: data
          });
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", {
            status: 500,
            message: _context3.t0.message
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function updateAuthor(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
var getAllAuthor = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _author["default"].find();
        case 3:
          data = _context4.sent;
          return _context4.abrupt("return", {
            status: 200,
            message: 'Get all author success',
            data: data
          });
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", {
            status: 500,
            message: _context4.t0.message
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function getAllAuthor() {
    return _ref4.apply(this, arguments);
  };
}();
var createCategory = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(category) {
    var localImagePath, imagePath, newCategory, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          localImagePath = _path["default"].join('uploads/', _path["default"].basename(category.image));
          _context5.next = 4;
          return _cloudinary["default"].uploader.upload(category.image, {
            public_id: book.title
          });
        case 4:
          imagePath = _context5.sent;
          newCategory = new _category["default"](_objectSpread(_objectSpread({}, category), {}, {
            image: imagePath.secure_url
          }));
          _context5.next = 8;
          return _category["default"].create(newCategory);
        case 8:
          data = _context5.sent;
          _fs["default"].unlinkSync(localImagePath);
          return _context5.abrupt("return", {
            status: 200,
            message: 'Create category success',
            data: data
          });
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", {
            status: 500,
            message: _context5.t0.message
          });
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return function createCategory(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var getAllCategory = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var config, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _configLibrary["default"].findOne();
        case 3:
          config = _context6.sent;
          _context6.next = 6;
          return _category["default"].find({
            _id: {
              $in: config.categories
            }
          });
        case 6:
          data = _context6.sent;
          return _context6.abrupt("return", {
            status: 200,
            message: 'Get all category success',
            data: data
          });
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", {
            status: 500,
            message: _context6.t0.message
          });
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function getAllCategory() {
    return _ref6.apply(this, arguments);
  };
}();
var createMajor = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(major) {
    var newMajor, data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          newMajor = new _major["default"](_objectSpread({}, major));
          _context7.next = 4;
          return _major["default"].create(newMajor);
        case 4:
          data = _context7.sent;
          return _context7.abrupt("return", {
            status: 200,
            message: 'Create major success',
            data: data
          });
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", {
            status: 500,
            message: _context7.t0.message
          });
        case 11:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function createMajor(_x6) {
    return _ref7.apply(this, arguments);
  };
}();
var getAllMajor = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _major["default"].find();
        case 3:
          data = _context8.sent;
          return _context8.abrupt("return", {
            status: 200,
            message: 'Get all major success',
            data: data
          });
        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", {
            status: 500,
            message: _context8.t0.message
          });
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return function getAllMajor() {
    return _ref8.apply(this, arguments);
  };
}();
var createOrUpdateLibraryConfig = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(config) {
    var existingConfig, key, updatedConfig, newConfig, createdConfig;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _configLibrary["default"].findOne();
        case 3:
          existingConfig = _context9.sent;
          if (!existingConfig) {
            _context9.next = 12;
            break;
          }
          for (key in config) {
            if (config[key] !== undefined && config[key] !== existingConfig[key]) {
              existingConfig[key] = config[key];
            }
          }
          _context9.next = 8;
          return existingConfig.save();
        case 8:
          updatedConfig = _context9.sent;
          return _context9.abrupt("return", {
            status: 200,
            message: 'Update config success',
            data: updatedConfig
          });
        case 12:
          newConfig = new _configLibrary["default"](_objectSpread({}, config));
          _context9.next = 15;
          return newConfig.save();
        case 15:
          createdConfig = _context9.sent;
          return _context9.abrupt("return", {
            status: 201,
            message: 'Create config success',
            data: createdConfig
          });
        case 17:
          _context9.next = 22;
          break;
        case 19:
          _context9.prev = 19;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", {
            status: 500,
            message: _context9.t0.message
          });
        case 22:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 19]]);
  }));
  return function createOrUpdateLibraryConfig(_x7) {
    return _ref9.apply(this, arguments);
  };
}();
var getLibraryConfig = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    var config;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _configLibrary["default"].findOne().populate('categories');
        case 3:
          config = _context10.sent;
          if (config) {
            _context10.next = 6;
            break;
          }
          return _context10.abrupt("return", {
            status: 404,
            message: 'Config not found'
          });
        case 6:
          return _context10.abrupt("return", {
            status: 200,
            message: 'Get config success',
            data: config
          });
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", {
            status: 500,
            message: _context10.t0.message
          });
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 9]]);
  }));
  return function getLibraryConfig() {
    return _ref10.apply(this, arguments);
  };
}();
var getListAmountRequest = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var data;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _requestAmount["default"].find().populate([{
            path: 'bankConfigId'
          }, {
            path: 'userId'
          }]);
        case 3:
          data = _context11.sent;
          data.sort(function (a, b) {
            return b.date - a.date;
          });
          return _context11.abrupt("return", data);
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", {
            status: 500,
            message: _context11.t0.message
          });
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return function getListAmountRequest() {
    return _ref11.apply(this, arguments);
  };
}();
var acceptAmountRequest = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(userId, requestId) {
    var request, userAmount, notify;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _requestAmount["default"].findById(requestId);
        case 3:
          request = _context12.sent;
          if (request) {
            _context12.next = 6;
            break;
          }
          return _context12.abrupt("return", {
            status: 404,
            message: 'Request not found'
          });
        case 6:
          if (!(request.status === 'APPROVED')) {
            _context12.next = 8;
            break;
          }
          return _context12.abrupt("return", {
            status: 400,
            message: 'Request has been approved'
          });
        case 8:
          _context12.next = 10;
          return _amount["default"].findOne({
            userId: userId
          });
        case 10:
          userAmount = _context12.sent;
          if (!userAmount) {
            userAmount = new _amount["default"]({
              userId: userId,
              total: 0,
              history: []
            });
          }
          userAmount.history.push({
            amount: request.amount,
            description: request.description,
            remain: userAmount.total + request.amount,
            bankConfigId: request.bankConfigId,
            date: request.date
          });
          userAmount.total += request.amount;
          request.status = 'APPROVED';
          _context12.next = 17;
          return request.save();
        case 17:
          _context12.next = 19;
          return userAmount.save();
        case 19:
          // Send notification to user
          notify = new _notify["default"]({
            userId: request.userId,
            requestId: requestId,
            message: "Y\xEAu c\u1EA7u n\u1EA1p [".concat(request.amount, "] v\xE0o l\xFAc [").concat(request.date, "] c\u1EE7a b\u1EA1n \u0111\xE3 \u0111\u01B0\u1EE3c duy\u1EC7t"),
            status: 'UNREAD',
            createDate: new Date()
          });
          _context12.next = 22;
          return _notify["default"].create(notify);
        case 22:
          return _context12.abrupt("return", {
            status: 200,
            message: 'Accept amount request success',
            data: userAmount
          });
        case 25:
          _context12.prev = 25;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", {
            status: 500,
            message: _context12.t0.message
          });
        case 28:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 25]]);
  }));
  return function acceptAmountRequest(_x8, _x9) {
    return _ref12.apply(this, arguments);
  };
}();
var findAllBankFromThirdPartyVietQr = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    var response;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _axios["default"].get('https://api.vietqr.io/v2/banks');
        case 3:
          response = _context13.sent;
          return _context13.abrupt("return", {
            status: 200,
            data: response.data
          });
        case 7:
          _context13.prev = 7;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", {
            status: 500,
            message: _context13.t0.message
          });
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 7]]);
  }));
  return function findAllBankFromThirdPartyVietQr() {
    return _ref13.apply(this, arguments);
  };
}();
var configBankAccount = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(bankId, bankName, accountNumber, accountName) {
    var bankAccount, data, newBankAccount;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return _bankAccount["default"].findOne({
            bankId: bankId,
            accountNumber: accountNumber
          });
        case 3:
          bankAccount = _context14.sent;
          if (bankAccount) {
            _context14.next = 11;
            break;
          }
          newBankAccount = new _bankAccount["default"]({
            bankId: bankId,
            bankName: bankName,
            accountNumber: accountNumber,
            accountName: accountName
          });
          _context14.next = 8;
          return newBankAccount.save();
        case 8:
          data = _context14.sent;
          _context14.next = 14;
          break;
        case 11:
          _context14.next = 13;
          return _bankAccount["default"].updateOne({
            bankId: bankId,
            accountNumber: accountNumber
          }, {
            bankName: bankName,
            accountName: accountName
          });
        case 13:
          data = _context14.sent;
        case 14:
          return _context14.abrupt("return", {
            status: 200,
            message: bankAccount ? 'Bank account updated successfully' : 'Bank account created successfully',
            data: data
          });
        case 17:
          _context14.prev = 17;
          _context14.t0 = _context14["catch"](0);
          return _context14.abrupt("return", {
            status: 500,
            message: _context14.t0.message
          });
        case 20:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 17]]);
  }));
  return function configBankAccount(_x10, _x11, _x12, _x13) {
    return _ref14.apply(this, arguments);
  };
}();
var getBankAccount = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return _bankAccount["default"].find();
        case 3:
          data = _context15.sent;
          return _context15.abrupt("return", {
            status: 200,
            message: 'Get all bank account success',
            data: data
          });
        case 7:
          _context15.prev = 7;
          _context15.t0 = _context15["catch"](0);
          return _context15.abrupt("return", {
            status: 500,
            message: _context15.t0.message
          });
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return function getBankAccount() {
    return _ref15.apply(this, arguments);
  };
}();
var rejectAmountRequest = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(requestId) {
    var request, notify;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return _requestAmount["default"].findById(requestId);
        case 3:
          request = _context16.sent;
          if (request) {
            _context16.next = 6;
            break;
          }
          return _context16.abrupt("return", {
            status: 404,
            message: 'Request not found'
          });
        case 6:
          if (!(request.status === 'REJECTED')) {
            _context16.next = 8;
            break;
          }
          return _context16.abrupt("return", {
            status: 400,
            message: 'Request has been rejected'
          });
        case 8:
          request.status = 'REJECTED';
          _context16.next = 11;
          return request.save();
        case 11:
          // Send notification to user
          notify = new _notify["default"]({
            userId: request.userId,
            requestId: requestId,
            message: "Y\xEAu c\u1EA7u n\u1EA1p [".concat(request.amount, "] v\xE0o l\xFAc [").concat(request.createDate, "] c\u1EE7a b\u1EA1n \u0111\xE3 b\u1ECB t\u1EEB ch\u1ED1i"),
            status: 'UNREAD',
            createDate: new Date()
          });
          _context16.next = 14;
          return _notify["default"].create(notify);
        case 14:
          return _context16.abrupt("return", {
            status: 200,
            message: 'Reject amount request success',
            data: request
          });
        case 17:
          _context16.prev = 17;
          _context16.t0 = _context16["catch"](0);
          return _context16.abrupt("return", {
            status: 500,
            message: _context16.t0.message
          });
        case 20:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 17]]);
  }));
  return function rejectAmountRequest(_x14) {
    return _ref16.apply(this, arguments);
  };
}();
var searchUser = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(text) {
    var data, query;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          if (text) {
            _context17.next = 8;
            break;
          }
          _context17.next = 4;
          return _user["default"].find().skip(0).limit(10);
        case 4:
          data = _context17.sent;
          return _context17.abrupt("return", {
            status: 200,
            message: 'Get all users success',
            data: data
          });
        case 8:
          query = {
            $or: [{
              userName: {
                $regex: text,
                $options: 'i'
              }
            }, {
              $expr: {
                $regexMatch: {
                  input: {
                    $toString: '$studentCode'
                  },
                  regex: text,
                  options: 'i'
                }
              }
            }]
          };
          _context17.next = 11;
          return _user["default"].find(query).limit(10);
        case 11:
          data = _context17.sent;
        case 12:
          return _context17.abrupt("return", {
            status: 200,
            message: 'Search user success',
            data: data
          });
        case 15:
          _context17.prev = 15;
          _context17.t0 = _context17["catch"](0);
          return _context17.abrupt("return", {
            status: 500,
            message: _context17.t0.message
          });
        case 18:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 15]]);
  }));
  return function searchUser(_x15) {
    return _ref17.apply(this, arguments);
  };
}();
var _default = exports["default"] = {
  createAuthor: createAuthor,
  updateAuthor: updateAuthor,
  createCategory: createCategory,
  createMajor: createMajor,
  getAllAuthor: getAllAuthor,
  getAllCategory: getAllCategory,
  getAllMajor: getAllMajor,
  createOrUpdateLibraryConfig: createOrUpdateLibraryConfig,
  getLibraryConfig: getLibraryConfig,
  getListAmountRequest: getListAmountRequest,
  acceptAmountRequest: acceptAmountRequest,
  findAllBankFromThirdPartyVietQr: findAllBankFromThirdPartyVietQr,
  configBankAccount: configBankAccount,
  getBankAccount: getBankAccount,
  rejectAmountRequest: rejectAmountRequest,
  getAllUser: getAllUser,
  searchUser: searchUser
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var upload = (0, _multer["default"])({
  storage: _multer["default"].diskStorage({
    destination: function destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function filename(req, file, cb) {
      cb(null, Date.now() + _path["default"].extname(file.originalname));
    }
  }),
  onError: function onError(err, next) {
    console.log('error', err);
    next(err);
  },
  fileFilter: function fileFilter(req, file, cb) {
    var allowedTypes = /jpeg|jpg|png|gif|pdf/;
    var mimetype = allowedTypes.test(file.mimetype);
    var extname = allowedTypes.test(_path["default"].extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error('Invalid file type. Only images and PDFs are allowed.'));
  }
});
var _default = exports["default"] = upload;
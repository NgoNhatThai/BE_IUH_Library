"use strict";

var errorHandler = function errorHandler(err, req, res, next) {
  var _err$statusCode;
  var statusCode = (_err$statusCode = err.statusCode) !== null && _err$statusCode !== void 0 ? _err$statusCode : 500;
  res.status(statusCode !== null && statusCode !== void 0 ? statusCode : 500).json({
    error: statusCode,
    message: err.message
  });
};

// const errorHandler = (err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode);
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === 'production' ? null : err.stack,
//     })
// };

var notFoundHandler = function notFoundHandler(req, res, next) {
  var error = new Error("Not Found = ".concat(req.originalUrl));
  res.status(404);
  next(error);
};
module.exports = {
  errorHandler: errorHandler,
  notFoundHandler: notFoundHandler
};
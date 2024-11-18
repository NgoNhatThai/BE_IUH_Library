"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var signJwt = function signJwt(data, secret, expiresIn) {
  try {
    var token = _jsonwebtoken["default"].sign({
      data: data
    }, secret, {
      expiresIn: expiresIn
    });
    return token;
  } catch (error) {
    throw error;
  }
};
var verify = function verify(token, secret) {
  try {
    var myDecoded = null;
    _jsonwebtoken["default"].verify(token, secret, function (err, decoded) {
      myDecoded = decoded;
      if (err) {
        throw err;
      }
    });
    return myDecoded;
  } catch (error) {
    throw error;
  }
};
var extractToken = function extractToken(req) {
  try {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  signJwt: signJwt,
  verify: verify,
  extractToken: extractToken
};
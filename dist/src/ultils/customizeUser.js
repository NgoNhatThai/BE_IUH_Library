"use strict";

var _bcrypt = _interopRequireDefault(require("bcrypt"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var saltRounds = 10;
var keyUserRegister = ['id', 'phoneNumber', 'userName', 'avatar', 'lastedOnline', 'peerId'];
var keyProfile = ['birthdate', 'gender', 'soundTrack', 'coverImage', 'description'];
var hashPassword = function hashPassword(myPlaintextPassword) {
  try {
    var salt = _bcrypt["default"].genSaltSync(saltRounds);
    return _bcrypt["default"].hashSync(myPlaintextPassword, salt);
  } catch (error) {
    throw error;
  }
};
var checkPassword = function checkPassword(myPlaintextPassword, hashedPassword) {
  try {
    return _bcrypt["default"].compareSync(myPlaintextPassword, hashedPassword); // true
  } catch (error) {
    throw error;
  }
};
var standardUser = function standardUser(user) {
  try {
    var myUser = _objectSpread({}, user);
    if (myUser.avatar) {
      var avatar = myUser.avatar;
      var base64 = Buffer.from(avatar, 'base64');
      myUser.avatar = base64.toString();
    }
    for (var key in myUser) if (!keyUserRegister.includes(key)) delete myUser[key];
    return myUser;
  } catch (error) {
    throw error;
  }
};
var standardProfile = function standardProfile(profile) {
  try {
    var myProfile = _objectSpread({}, profile);
    for (var key in myProfile) if (!keyProfile.includes(key)) delete myProfile[key];
    return myProfile;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  standardUser: standardUser,
  hashPassword: hashPassword,
  checkPassword: checkPassword,
  standardProfile: standardProfile
};
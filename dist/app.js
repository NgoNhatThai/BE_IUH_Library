"use strict";

var _express = _interopRequireDefault(require("express"));
var _expressSession = _interopRequireDefault(require("express-session"));
var _path = _interopRequireDefault(require("path"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _expressValidator = _interopRequireDefault(require("express-validator"));
var _serveFavicon = _interopRequireDefault(require("serve-favicon"));
var _helmet = _interopRequireDefault(require("helmet"));
var _config = _interopRequireDefault(require("./src/config/nosql/config"));
var _index = _interopRequireDefault(require("./src/routes/index"));
var _handleException = _interopRequireDefault(require("./src/middleware/handleException.middleware"));
var _nodeCron = _interopRequireDefault(require("node-cron"));
var _child_process = _interopRequireDefault(require("child_process"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// import connectMySql from './src/config/sql/connectMySql'

require('dotenv').config();
var app = (0, _express["default"])();
app.use(function (req, res, next) {
  var allowedOrigins = ['http://localhost:3024', 'http://localhost:5500', 'http://localhost:8081', 'http://localhost:19006', 'http://localhost:8080', 'https://be-iuh-library.vercel.app/', '*'];
  var origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization');
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.set('views', _path["default"].join(__dirname, 'views')); // this is the folder where we keep our pug files
app.set('view engine', 'ejs'); // we use the engine pug, mustache or EJS work great too

app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use((0, _helmet["default"])());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use((0, _serveFavicon["default"])(_path["default"].join(__dirname, 'public', 'favicon.ico')));
app.use((0, _expressValidator["default"])());
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].json({
  limit: '50mb'
}));
app.use(_bodyParser["default"].urlencoded({
  limit: '50mb',
  extended: true
}));
// app.use((req, res, next) => {
//   res.locals.user = req.user || null;
//   res.locals.currentPath = req.path;
//   next();
// });
// Connect db
// connectMySql()
(0, _config["default"])();
(0, _index["default"])(app);
app.use(_handleException["default"].notFoundHandler);
app.use(_handleException["default"].errorHandler);
_nodeCron["default"].schedule('0 0 * * *', function () {
  console.log('Bắt đầu huấn luyện lại mô hình...');
  (0, _child_process["default"])('node src/training/index.js', function (error, stdout, stderr) {
    if (error) {
      console.error("L\u1ED7i khi hu\u1EA5n luy\u1EC7n l\u1EA1i: ".concat(error));
      return;
    }
    console.log("K\u1EBFt qu\u1EA3: ".concat(stdout));
  });
});
module.exports = app;

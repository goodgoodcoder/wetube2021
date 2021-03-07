"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _routes = _interopRequireDefault(require("./routes"));

var _User = _interopRequireDefault(require("./models/User"));

var _passportGithub = _interopRequireDefault(require("passport-github"));

var _userController = require("./controller/userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Local
_passport["default"].use(_User["default"].createStrategy()); // passport.use(new LocalStrategy(User.authenticate())); 와 동일


_passport["default"].serializeUser(_User["default"].serializeUser());

_passport["default"].deserializeUser(_User["default"].deserializeUser()); // Gibhub


_passport["default"].use(new _passportGithub["default"]({
  clientID: process.env.GITHUB_ID,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: "http://localhost:4000".concat(_routes["default"].githubCallback)
}, _userController.githubLoginCallback)); // http://www.passportjs.org/packages/passport-github/
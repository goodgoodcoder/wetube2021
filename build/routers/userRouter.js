"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controller/userController.js");

var _middlewares = require("../middlewares.js");

var _routes = _interopRequireDefault(require("../routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router(); // Router.get(path, callback)
// callback function in controller


userRouter.get(_routes["default"].editProfile, _middlewares.onlyPrivate, _userController.getEditProfile);
userRouter.post(_routes["default"].editProfile, _middlewares.onlyPrivate, _middlewares.uploadAvatar, _userController.postEditProfile);
userRouter.get(_routes["default"].changePassword, _middlewares.onlyPrivate, _userController.getChangePassword);
userRouter.post(_routes["default"].changePassword, _middlewares.onlyPrivate, _userController.postChangePassword);
userRouter.get(_routes["default"].userDetail(), _userController.userDetail);
var _default = userRouter;
exports["default"] = _default;
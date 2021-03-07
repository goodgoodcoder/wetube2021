"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _userController = require("../controller/userController.js");

var _videoController = require("../controller/videoController.js");

var _middlewares = require("../middlewares.js");

var _routes = _interopRequireDefault(require("../routes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router(); // Router.get(path, callback)
// callback function in controller


globalRouter.get(_routes["default"].home, _videoController.home);
globalRouter.get(_routes["default"].search, _videoController.search);
globalRouter.get(_routes["default"].join, _middlewares.onlyPublic, _userController.getJoin);
globalRouter.post(_routes["default"].join, _middlewares.onlyPublic, _userController.postJoin, _userController.postLogin);
globalRouter.get(_routes["default"].login, _middlewares.onlyPublic, _userController.getLogin);
globalRouter.post(_routes["default"].login, _middlewares.onlyPublic, _userController.postLogin);
globalRouter.get(_routes["default"].logout, _middlewares.onlyPrivate, _userController.logout);
globalRouter.get(_routes["default"].github, _userController.githubLogin);
globalRouter.get(_routes["default"].githubCallback, _passport["default"].authenticate("github", {
  failureRedirect: "/login"
}), _userController.postGithubLogin);
globalRouter.get(_routes["default"].me, _userController.me);
var _default = globalRouter;
exports["default"] = _default;
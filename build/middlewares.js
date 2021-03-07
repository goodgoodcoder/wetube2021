"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onlyPrivate = exports.onlyPublic = exports.localsMiddleware = exports.uploadAvatar = exports.uploadVideo = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _multerS = _interopRequireDefault(require("multer-s3"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// aws-sdk
var s3 = new _awsSdk["default"].S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-2"
});
var multerVideo = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "wetube-2021/videos"
  })
}); //Video File 업로드 시, file이 아닌 업로드 된 위치(URL)를 반환

var multerAvatar = (0, _multer["default"])({
  storage: (0, _multerS["default"])({
    s3: s3,
    acl: "public-read",
    bucket: "wetube-2021/avatars"
  })
}); //Image File 업로드 시, file이 아닌 업로드 된 위치(URL)를 반환

var uploadVideo = multerVideo.single("videoFile"); // 1개의 파일만 업로드 가능, file upload input의 name

exports.uploadVideo = uploadVideo;
var uploadAvatar = multerAvatar.single("avatar"); // 1개의 파일만 업로드 가능, file upload input의 name
// Global 변수

exports.uploadAvatar = uploadAvatar;

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.siteName = "WeTube";
  res.locals.routes = _routes["default"];
  res.locals.loggedUser = req.user || null;
  next();
}; // Login 시, 특정 route에 접근 못하게 하는 미들웨어


exports.localsMiddleware = localsMiddleware;

var onlyPublic = function onlyPublic(req, res, next) {
  if (req.user) {
    res.redirect(_routes["default"].home);
  } else {
    next();
  }
}; // Logout 시, 특정 route에 접근 못하게 하는 미들웨어


exports.onlyPublic = onlyPublic;

var onlyPrivate = function onlyPrivate(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect(_routes["default"].home);
  }
};

exports.onlyPrivate = onlyPrivate;
"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); //.env 파일 불러오기
// mongodb server와 JS를 연결


_mongoose["default"].connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
}); // 연결된 db를 저장


var db = _mongoose["default"].connection;

var handleOpen = function handleOpen() {
  return console.log("✅ Connected to DB");
};

var handleError = function handleError(error) {
  return console.log("\u274C Error on DB Connection: ".concat(error));
};

db.once("open", handleOpen);
db.on("error", handleError);
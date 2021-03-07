"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// DB에 저장될 파일의 형태(틀)
var VideoSchema = new _mongoose["default"].Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    "default": 0
  },
  creator: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  comments: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    //Comment Object의 ID
    ref: "Comment" //Comment model

  }]
}); // VideoSchema의 형태를 가진 Video라는 이름의 model 생성

var model = _mongoose["default"].model("Video", VideoSchema);

var _default = model;
exports["default"] = _default;
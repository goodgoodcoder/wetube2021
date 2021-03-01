import mongoose from "mongoose";

// DB에 저장될 파일의 형태(틀)
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId, //Comment Object의 ID
      ref: "Comment", //Comment model
    },
  ],
});

// VideoSchema의 형태를 가진 Video라는 이름의 model 생성
const model = mongoose.model("Video", VideoSchema);
export default model;

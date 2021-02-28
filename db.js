import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //.env 파일 불러오기

// mongodb server와 JS를 연결
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// 연결된 db를 저장
const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

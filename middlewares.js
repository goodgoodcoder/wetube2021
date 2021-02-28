import routes from "./routes";
import multer from "multer";

//Video File 업로드 시, file이 아닌 업로드 된 위치(URL)를 반환
const multerVideo = multer({ dest: "uploads/videos/" });

// Global 변수
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); // 1개의 파일만 업로드 가능, file upload input의 name

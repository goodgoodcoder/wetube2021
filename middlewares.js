import routes from "./routes";
import multer from "multer";

//Video File 업로드 시, file이 아닌 업로드 된 위치(URL)를 반환
const multerVideo = multer({ dest: "uploads/videos/" });

// Global 변수
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};

// Login 시, 특정 route에 접근 못하게 하는 미들웨어
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

// Logout 시, 특정 route에 접근 못하게 하는 미들웨어
export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile"); // 1개의 파일만 업로드 가능, file upload input의 name

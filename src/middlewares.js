import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

// aws-sdk
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: "ap-northeast-2",
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube-2021/videos",
  }),
}); //Video File 업로드 시, file이 아닌 업로드 된 위치(URL)를 반환
const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "wetube-2021/avatars",
  }),
}); //Image File 업로드 시, file이 아닌 업로드 된 위치(URL)를 반환

export const uploadVideo = multerVideo.single("videoFile"); // 1개의 파일만 업로드 가능, file upload input의 name
export const uploadAvatar = multerAvatar.single("avatar"); // 1개의 파일만 업로드 가능, file upload input의 name

// Global 변수
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
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

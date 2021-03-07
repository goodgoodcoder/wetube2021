import dotenv from "dotenv";
dotenv.config();

import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import MongoStore from "connect-mongo";
import passport from "passport";
import session from "express-session";
import path from "path";
import { localsMiddleware } from "./middlewares.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import apiRouter from "./routers/apiRouter.js";
import globalRouter from "./routers/globalRouter.js";
import routes from "./routes";
import "./passport";

const app = express();

/* Middlewares */
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
); // 기초 보안
app.set("view engine", "pug"); // Express의 view-engine을 pug로 설정
app.set("views", path.join(__dirname, "views"));
// app.use("/uploads", express.static("uploads")); // /uploads이라는 route로 접근하면 view나 controller를 확인하는 것이 아니라 uploads 디렉토리로 접근
app.use("/static", express.static(path.join(__dirname, "static"))); // /static이라는 route 접근하면 view나 controller를 확인하는 것이 아니라 static 디렉토리로 접근
app.use(cookieParser()); // Cookie Control
app.use(bodyParser.json()); // 서버가 body로부터 정보를 받아올 수 있음: ex) json 데이터를 받아와서 이해
app.use(bodyParser.urlencoded({ extended: true })); // 서버가 body로부터 정보를 받아올 수 있음: ex) Form 데이터를 서버에 의해 받아 활용가능
app.use(morgan("dev")); // logger, 무슨 일이 어디서 일어났는지 기록
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
    }), //db에 session을 저장
  })
); //cookie를 해석
app.use(passport.initialize()); //passport 초기화
app.use(passport.session()); //쿠키에서 해당되는 유저를 찾아 req.user 생성, session을 저장
app.use(localsMiddleware); // local 변수를 global 변수로 사용

/* Router */
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.api, apiRouter);
app.use(routes.videos, videoRouter);

export default app;

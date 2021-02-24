import express from "express";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controller/userController.js";
import { home, search } from "../controller/videoController.js";
import routes from "../routes.js";

const globalRouter = express.Router();

// Router.get(path, callback)
// callback function in controller
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

export default globalRouter;

import express from "express";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controller/userController.js";
import { home, search } from "../controller/videoController.js";
import { onlyPrivate, onlyPublic } from "../middlewares.js";
import routes from "../routes.js";

const globalRouter = express.Router();

// Router.get(path, callback)
// callback function in controller
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;

import express from "express";
import passport from "passport";
import {
  getJoin,
  getLogin,
  githubLogin,
  logout,
  me,
  postGithubLogin,
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
globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);
globalRouter.get(routes.me, me);

export default globalRouter;

import express from "express";
import { join, login, logout } from "../controller/userController.js";
import { home, search } from "../controller/videoController.js";
import routes from "../routes.js";

const globalRouter = express.Router();

// Router.get(path, callback)
// callback function in controller
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;

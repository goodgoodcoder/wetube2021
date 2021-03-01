import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
} from "../controller/userController.js";
import { onlyPrivate } from "../middlewares.js";
import routes from "../routes.js";

const userRouter = express.Router();

// Router.get(path, callback)
// callback function in controller
userRouter.get(routes.editProfile, onlyPrivate, editProfile);
userRouter.get(routes.changePassword, onlyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

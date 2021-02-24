import express from "express";
import {
  changePassword,
  editProfile,
  userDetail,
  users,
} from "../controller/userController.js";
import routes from "../routes.js";

const userRouter = express.Router();

// Router.get(path, callback)
// callback function in controller
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;

import express from "express";
import {
  postAddComment,
  postDelComment,
  postRegisterView,
} from "../controller/videoController";
import routes from "../routes";

const apiRouter = express.Router();
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);
apiRouter.post(routes.delComment(), postDelComment);

export default apiRouter;

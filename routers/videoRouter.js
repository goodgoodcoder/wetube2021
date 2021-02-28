import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEditVideo,
  postUpload,
  videoDetail,
} from "../controller/videoController.js";
import { uploadVideo } from "../middlewares.js";
import routes from "../routes.js";

const videoRouter = express.Router();

// Router.get(path, callback)
// callback function in controller
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

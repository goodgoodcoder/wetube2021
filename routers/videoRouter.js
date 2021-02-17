import express from "express";
import {
  deleteVideo,
  editVideo,
  upload,
  videoDetail,
  videos,
} from "../controller/videoController.js";
import routes from "../routes.js";

const videoRouter = express.Router();

// Router.get(path, callback)
// callback function in controller
videoRouter.get(routes.users, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

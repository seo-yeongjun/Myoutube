import express from "express";
import {
  deleteVideo,
  editVideo,
  getUpload,
  uploadVideo,
  videoDetail,
  failUpload,
} from "../controller/videoController";
import routes from "../routes";

const videoRouter = express.Router();
videoRouter.get(routes.failUpload, failUpload);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

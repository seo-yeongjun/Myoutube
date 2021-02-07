import routes from "../routes.js";
import video from "../models/video";
import { multerVideo } from "../middleware";
import mongoose from "mongoose";
export const home = async (req, res) => {
  const videos = await video.find({});
  res.render("home", { siteTitle: "Home", videos });
};
export const search = async (req, res) => {
  const videos = await video.find({});
  const {
    query: { term: searchingWhat },
  } = req;
  res.render("search", { siteTitle: "Search", searchingWhat, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { siteTitle: "Upload" });

export const failUpload = (req, res) => {
  res.render("failUpload");
};

export const uploadVideo = (req, res) => {
  multerVideo(req, res, async function (err) {
    if (err) {
      if (err.message == "File too large") {
        console.log(err);
        return res.redirect(`/videos${routes.failUpload}`);
      }
    } else {
      const {
        body: { title, description },
        file: { path },
      } = req;
      const newVideo = await video.create({
        fileUrl: path,
        title,
        description,
      });
      console.log(newVideo);
      res.redirect(routes.videoDetail(newVideo.id));
    }
  });
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { siteTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { siteTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { siteTitle: "Delete Video" });

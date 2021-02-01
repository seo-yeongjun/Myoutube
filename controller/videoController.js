import routes from "../routes.js";
import video from "../models/video";
import { multerVideo } from "../middleware";
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
  multerVideo(req, res, function (err) {
    if (err) {
      if (err.message == "File too large")
        return res.redirect(`/videos${routes.failUpload}`);
      return console.log(err);
    } else {
      res.redirect(routes.videoDetail(1));
    }
  });
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { siteTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { siteTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { siteTitle: "Delete Video" });

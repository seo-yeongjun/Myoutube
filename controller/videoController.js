import routes from "../routes.js";

export const home = (req, res) => {
  res.render("home", { siteTitle: "Home", videos });
};
export const search = (req, res) => {
  const {
    query: { term: searchingWhat },
  } = req;
  res.render("search", { siteTitle: "Search", searchingWhat, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { siteTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { description, title, file },
  } = req;
  res.redirect(routes.videoDetail(1));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { siteTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { siteTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { siteTitle: "Delete Video" });

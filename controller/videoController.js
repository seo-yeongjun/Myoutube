export const home = (req, res) => res.render("home", { siteTitle: "Home" });

export const search = (req, res) => {
  const {
    query: { term: searchingWhat },
  } = req;
  res.render("search", { siteTitle: "Search", searchingWhat });
};

export const videos = (req, res) =>
  res.render("videos", { siteTitle: "Videos" });
export const upload = (req, res) =>
  res.render("upload", { siteTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { siteTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { siteTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { siteTitle: "Delete Video" });

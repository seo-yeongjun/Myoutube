import routes from "../routes.js";

//for join
export const getJoin = (req, res) => res.render("join", { siteTitle: "Join" });
export const postJoin = (req, res) => {
  const {
    body: { email, password, password2, name, nickname },
  } = req;
  if (password !== password2) {
    res.status(400);
  } else {
    res.redirect(routes.home);
  }
  res.render("join", { siteTitle: "Join" });
};

//for login
export const getLogin = (req, res) => {
  res.redirect(routes.home);
};
export const postLogin = (req, res) => {};
export const logout = (req, res) => {
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { siteTitle: "Users" });
export const editProfie = (req, res) =>
  res.render("editProfile", { siteTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { siteTitle: "Change Password" });
export const userDetail = (req, res) =>
  res.render("userDetail", { siteTitle: "User Detail" });

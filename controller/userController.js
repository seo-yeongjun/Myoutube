export const join = (req, res) => res.render("join", { siteTitle: "Join" });
export const login = (req, res) => res.render("login", { siteTitle: "Login" });
export const logout = (req, res) =>
  res.render("logout", { siteTitle: "Logout" });
export const users = (req, res) => res.render("users", { siteTitle: "Users" });
export const editProfie = (req, res) =>
  res.render("editProfile", { siteTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { siteTitle: "Change Password" });
export const userDetail = (req, res) =>
  res.render("userDetail", { siteTitle: "User Detail" });

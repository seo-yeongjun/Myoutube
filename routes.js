import { videoDetail } from "./controller/videoController";

//global
const Home = "/";
const Join = "/join";
const Login = "/login";
const Logout = "/logout";
const Search = "/search";

//users
const Users = "/users";
const Edit_Profile = "/edit-profile";
const Change_Password = "/change-password";
const User_Detail = "/:id";
//videos
const Videos = "/videos";
const Video_Detail = "/:id";
const Upload = "/upload";
const Fail_Upload = "/fail-upload";
const Edit_Video = "/:id/edit";
const Delete_Video = "/:id/delete";
const routes = {
  home: Home,
  join: Join,
  login: Login,
  logout: Logout,
  search: Search,
  users: Users,
  userDetail: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return User_Detail;
    }
  },
  editProfile: Edit_Profile,
  changePassword: Change_Password,
  videos: Videos,
  failUpload: Fail_Upload,
  upload: Upload,
  videoDetail: (id) => {
    if (id) {
      return `/videos/${id}`;
    } else {
      return Video_Detail;
    }
  },
  editVideo: Edit_Video,
  deleteVideo: Delete_Video,
};

export default routes;

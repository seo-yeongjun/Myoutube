//global
const Home = "/";
const Join = "/join";
const Login = "/login";
const Logout = "/logout";
const Search = "/search";

//users
const Users = "/users";
const User_Detail = "/:id";
const Edit_Profile = "/edit-profile";
const Change_Password = "/change-password";

//videos
const Videos = "/videos";
const Upload = "/upload";
const Video_Detail = "/:id";
const Edit_Video = "/:id/edit";
const Delete_Video = "/:id/delete";

const routes = {
    home : Home,
    join : Join,
    login : Login,
    logout : Logout,
    search : Search,
    users : Users,
    userDetail : User_Detail,
    editProfile : Edit_Profile,
    changePassword : Change_Password,
    videos : Videos,
    upload : Upload,
    videoDetail : Video_Detail,
    editVideo : Edit_Video,
    deleteVideo : Delete_Video
};

export default routes;
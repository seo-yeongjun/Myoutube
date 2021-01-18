import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req,res) => res.send("user"))
userRouter.get(routes.userDetail, (req, res) => res.send("user_detail"))
userRouter.get(routes.editProfile, (req, res) => res.send("editprofile"))
userRouter.get(routes.changePassword, (req, res) => res.send("changepassword"))

export default userRouter;
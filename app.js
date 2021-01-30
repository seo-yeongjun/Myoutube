import "core-js";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import csp from "helmet-csp";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localMiddleware } from "./middleware";
const app = express();
//middle-ware
app.use(helmet({ contentSecurityPolicy: false }));
app.set("view engine", "pug");
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static("public"));
app.use(localMiddleware);
//route
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.home, globalRouter);
export default app;

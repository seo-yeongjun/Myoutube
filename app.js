import "core-js";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter"

const app = express();

//middle-ware
app.use(logger("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//route
app.use("/user", userRouter);
app.use("/video", videoRouter);
app.use("/", globalRouter);
export default app;
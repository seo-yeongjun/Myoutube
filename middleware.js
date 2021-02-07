import routes from "./routes";
import multer from "multer";

export const multerVideo = multer({
  dest: "uploads/videos/",
  limits: { fileSize: 500000000 },
}).single("videoFile");

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 3,
  };
  next();
};

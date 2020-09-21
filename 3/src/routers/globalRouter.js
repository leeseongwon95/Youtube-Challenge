import express from "express";
import routes from "../routes";
import {
    getHome,
    getLogIn,
    getPhotos,
    getProfile,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.get(routes.login, getLogIn);
globalRouter.get(routes.photos, getPhotos);
globalRouter.get(routes.profile, getProfile);

export default globalRouter;

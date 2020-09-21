import express from "express";
import routes from "../routes";
import { getHome, getJoin, getLogin } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);
globalRouter.get(routes.login, getLogin);
globalRouter.get(routes.join, getJoin);

export default globalRouter;

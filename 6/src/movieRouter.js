import express from "express";
import {
  deleteMovie,
  getCreate,
  getEditMovie,
  home,
  movieDetail,
  postCreate,
  postEditMovie,
  search,
} from "./movieController";
import routes from "../routes";

const movieRouter = express.Router();

movieRouter.get(routes.home, home);

movieRouter.get(routes.create, getCreate);
movieRouter.post(routes.create, postCreate);

movieRouter.get(routes.search, search);

movieRouter.get(routes.movieDetail(), movieDetail);

movieRouter.get(routes.editMovie(), getEditMovie);
movieRouter.post(routes.editMovie(), postEditMovie);

movieRouter.get(routes.deleteMovie(), deleteMovie);

export default movieRouter;

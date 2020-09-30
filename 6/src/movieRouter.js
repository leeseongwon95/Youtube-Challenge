import express from "express";
import routes from "./routes";
import {
  home,
  search,
  getCreate,
  postCreate,
  getEditMovie,
  postEditMovie,
  deleteMovie,
  movieDetail
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get(routes.home, home);

movieRouter.get(routes.search, search);

movieRouter.get(routes.create, getCreate);
movieRouter.post(routes.create, postCreate);

movieRouter.get(routes.seeMovie(), movieDetail);

movieRouter.get(routes.editMovie(), getEditMovie);
movieRouter.post(routes.editMovie(), postEditMovie);

movieRouter.get(routes.deleteMovie(), deleteMovie);

export default movieRouter;

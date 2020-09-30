// Global
const HOME = "/";
const SEARCH = "/search";

// Movie
const CREATE = "/create";
const SEE_MOVIE = "/:id";
const EDIT_MOVIE = "/:id/edit";
const DELETE_MOVIE = "/:id/delete";

const routes = {
  home: HOME,
  search: SEARCH,
  create: CREATE,
  seeMovie: (id) => {
    if (id) {
      return `/${id}`;
    } else {
      return SEE_MOVIE;
    }
  },
  editMovie: (id) => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return EDIT_MOVIE;
    }
  },
  deleteMovie: (id) => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE_MOVIE;
    }
  },
};

export default routes;

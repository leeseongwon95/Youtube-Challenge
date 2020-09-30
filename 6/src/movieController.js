/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "./routes";

export const home = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.render("home", { pageTitle: "Home", movies });
    console.log(movies);
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", movies: [] });
  }
};

export const movieDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("movieDetail", { pageTitle: movie.title, movie });
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "Error" });
  }
};

export const search = async (req, res) => {
  const {
    query: { year, rating },
  } = req;
  try {
    if (year) {
      const movies = await Movie.find({
        year: { $gte: year },
      });
      res.render("home", { pageTitle: `Filtering by year: ${year}`, movies });
    } else if (rating) {
      const movies = await Movie.find({
        rating: { $gte: rating },
      });
      res.render("home", {
        pageTitle: `Filtering by year: ${rating}`,
        movies,
      });
    }
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "Error" });
  }
};

export const getCreate = (req, res) => {
  res.render("create", { pageTitle: "Create" });
};

export const postCreate = async (req, res) => {
  let {
    body: { title, year, rating, synopsis, genres },
  } = req;
  try {
    if (title.length >= 3) {
      const newMovie = await Movie.create({
        title,
        year,
        rating,
        synopsis,
        genres: genres.split(","),
      });
      res.redirect(`/${newMovie.id}`);
    } else {
      throw Error;
    }
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "Error" });
  }
};

export const getEditMovie = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const movie = await Movie.findById(id);
    res.render("editMovie", {
      pageTitle: "Edit!",
      movie,
      genres: movie.genres.join(),
    });
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "Error" });
  }
};

export const postEditMovie = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres },
  } = req;
  try {
    await Movie.findByIdAndUpdate(id, {
      title,
      year,
      rating,
      synopsis,
      genres: genres.split(","),
    });
    res.redirect(`/${id}`);
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "Error" });
  }
};

export const deleteMovie = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
    res.render("404", { pageTitle: "Error" });
  }
};

// Add your magic here!

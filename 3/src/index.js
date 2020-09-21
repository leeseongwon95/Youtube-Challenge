import express from "express";
import path from "path";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import { localsMiddleware } from "./middlewears";

const app = express();
app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

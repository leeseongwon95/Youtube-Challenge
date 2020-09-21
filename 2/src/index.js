import express from "express";
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import courseRouter from "./routers/courseRouter";
import apiRouter from "./routers/apiRouter";
import apiRouterV1 from "./routers/apiRouterV1";
import apiRouterV2 from "./routers/apiRouterV2";

const app = express();

app.use(routes.home, globalRouter);
app.use(routes.course, courseRouter);
app.use(routes.api, apiRouter);
app.use(routes.apiV1, apiRouterV1);
app.use(routes.apiV2, apiRouterV2);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));

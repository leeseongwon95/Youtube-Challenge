import express from "express";
import routes from "../routes";
import { getApi, getDocument } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.home, getApi);
apiRouter.get(routes.apiDoc, getDocument);

export default apiRouter;

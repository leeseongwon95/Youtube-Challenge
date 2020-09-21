import express from "express";
import routes from "../routes";
import { getV2, getRemove, getEdit } from "../controllers/apiController";

const apiRouterV2 = express.Router();

apiRouterV2.get(routes.home, getV2);
apiRouterV2.get(routes.apiRemove, getRemove);
apiRouterV2.get(routes.apiEdit, getEdit);

export default apiRouterV2;

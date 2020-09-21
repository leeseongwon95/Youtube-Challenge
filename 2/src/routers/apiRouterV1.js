import express from "express";
import routes from "../routes";
import { getV1, getBuy, getRefund } from "../controllers/apiController";

const apiRouterV1 = express.Router();

apiRouterV1.get(routes.home, getV1);
apiRouterV1.get(routes.apiBuy, getBuy);
apiRouterV1.get(routes.apiRefund, getRefund);

export default apiRouterV1;

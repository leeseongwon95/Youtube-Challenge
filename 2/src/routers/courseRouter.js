import express from "express";
import routes from "../routes";
import {
    getCourse,
    getCourseNew,
    getCourseMine,
} from "../controllers/courseController";

const courseRouter = express.Router();

courseRouter.get(routes.home, getCourse);
courseRouter.get(routes.courseNew, getCourseNew);
courseRouter.get(routes.courseMine, getCourseMine);

export default courseRouter;

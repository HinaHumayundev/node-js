import { Router } from "express";
import { getCourses, addCourse } from "../controller/courseController";
import { validateCourse } from "../middlewares/validator";

const router = Router();

/**
 * @swagger
 * /api/courses:
 *   get:
 *     "summary": "Get all courses"
 *     responses:
 *       200:
 *         "description": "List of courses"
 */
router.get("/courses", getCourses);

/**
 * @swagger
 * /api/courses:
 *   post:
 *     "summary": "Add a new course"
 *     responses:
 *       201:
 *         "description": "Add a new course"
 */
router.post("/courses", validateCourse, addCourse);

export default router;

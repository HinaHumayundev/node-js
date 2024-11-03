import { Router } from "express";
import { getCourses, addCourse } from "../controller/courseController";
import schemaValidator from "../middlewares/schemaValidator";
import courseSchema from "../schemas/courseSchema";
const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         modules:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Module'
 *     Module:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         lessons:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Lesson'
 *     Lesson:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         topics:
 *           type: array
 *           items:
 *             type: string
 *         content:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Content'
 *     Content:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           enum: ["text", "video", "audio"]
 *         data:
 *           type: string
 */

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: "Get all courses"
 *     responses:
 *       200:
 *         description: "List of courses"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *   post:
 *     summary: "Add a new course"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *           example:
 *             id: 2
 *             title: "Intro to Programming test"
 *             description: "Learn the basics of programming."
 *             modules:
 *               - title: "Module 2"
 *                 lessons:
 *                   - title: "Lesson 2"
 *                     description: "Introduction to Variables"
 *                     topics: ["variables", "data types"]
 *                     content:
 *                       - type: "text"
 *                         data: "Variables are used to store data in programming."
 *                       - type: "video"
 *                         data: "https://example.com/lesson2-video"
 *     responses:
 *       201:
 *         description: "Course successfully added"
 */
router.get("/courses", getCourses);
router.post("/courses", schemaValidator(courseSchema), addCourse);

export default router;

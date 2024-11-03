import { Request, Response, NextFunction } from "express";
import * as courseService from "../service/courseService";
import { Course } from "../models/course";

export const getCourses = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const courses = await courseService.getCourses();
		res.json(courses);
	} catch (error) {
		next(error);
	}
};

export const addCourse = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const course: Course = req.body;
		await courseService.addCourse(course);
		res.status(201).json(course);
	} catch (error) {
		next(error);
	}
};

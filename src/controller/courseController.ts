import { Request, Response, NextFunction } from "express";
import * as courseService from "../service/courseService";
import { Course } from "../models/course";

export const getCourses = async (
	_req: Request,
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

export const updateCourse = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const courseId = parseInt(req.params.id, 10);
		const updatedCourse: Partial<Course> = req.body;

		const result = await courseService.updateCourse(courseId, updatedCourse);
		if (!result) {
			res.status(404).json({ message: "Course not found" });
			return;
		}

		res.json(result);
	} catch (error) {
		next(error);
	}
};

export const deleteCourse = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	try {
		const courseId = parseInt(req.params.id, 10);
		const success = await courseService.deleteCourse(courseId);

		if (!success) {
			res.status(404).json({ message: "Course not found" });
			return;
		}

		res.status(204).send();
	} catch (error) {
		next(error);
	}
};

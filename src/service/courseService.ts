import fs from "fs/promises";
import path from "path";
import { Course } from "../models/course";
import Data from "../data/courses.json";

const dataFilePath = path.resolve(__dirname, "../data/courses.json");

const data = Data;

export const getCourses = async (): Promise<Course[]> => {
	try {
		return data as Course[];
	} catch (error: any) {
		if (error.code === "ENOENT") {
			await saveCourses([]);
			return [];
		}
		throw error;
	}
};

export const saveCourses = async (courses: Course[]): Promise<void> => {
	await fs.writeFile(dataFilePath, JSON.stringify(courses, null, 2));
};

export const addCourse = async (course: Course): Promise<void> => {
	const courses = await getCourses();
	courses.push(course);
	await saveCourses(courses);
};

import request from "supertest";
import { app, server } from "../app";

describe("Course API", () => {
	afterAll((done) => {
		server.close(done);
	});

	it("GET /api/courses - success", async () => {
		const { status, body } = await request(app).get("/api/courses");
		expect(status).toBe(200);
		expect(Array.isArray(body)).toBe(true);
	});

	it("POST /api/courses - success", async () => {
		const newCourse = {
			id: 2,
			title: "Intro to Programming test",
			description: "Learn the basics of programming.",
			modules: [
				{
					title: "Module 2",
					lessons: [
						{
							title: "Lesson 2",
							description: "Introduction to Variables",
							topics: ["variables", "data types"],
							content: [
								{
									type: "text",
									data: "Variables are used to store data in programming.",
								},
								{ type: "video", data: "https://example.com/lesson2-video" },
							],
						},
					],
				},
			],
		};
		const { status, body } = await request(app)
			.post("/api/courses")
			.send(newCourse);
		expect(status).toBe(201);
		expect(body).toMatchObject(newCourse);
	});

	it("PUT /api/courses/:id - success", async () => {
		const updatedCourse = {
			id: 1,
			title: "Intro to Programming - Updated",
			description: "Updated description.",
			modules: [
				{
					title: "Updated Module",
					lessons: [
						{
							title: "Updated Lesson",
							description: "Updated Introduction to Variables",
							topics: ["variables", "data types", "updated"],
							content: [
								{ type: "text", data: "Updated content." },
								{ type: "audio", data: "https://example.com/lesson2-audio" },
							],
						},
					],
				},
			],
		};
		const { status, body } = await request(app)
			.put("/api/courses/1")
			.send(updatedCourse);
		expect(status).toBe(200);
		expect(body).toMatchObject(updatedCourse);
	});

	it("DELETE /api/courses/:id - success", async () => {
		const { status } = await request(app).delete("/api/courses/2");
		expect(status).toBe(204);
	});
});

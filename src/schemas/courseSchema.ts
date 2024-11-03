import Joi from "joi";

const contentSchema = Joi.object({
	type: Joi.string().valid("text", "video", "audio").required(),
	data: Joi.string().required(),
});

const lessonSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().required(),
	topics: Joi.array().items(Joi.string()).required(),
	content: Joi.array().items(contentSchema).required(),
});

const moduleSchema = Joi.object({
	title: Joi.string().required(),
	lessons: Joi.array().items(lessonSchema).required(),
});

const courseSchema = Joi.object({
	id: Joi.number().integer().required(),
	title: Joi.string().required(),
	description: Joi.string().required(),
	modules: Joi.array().items(moduleSchema).required(),
});

export default courseSchema;

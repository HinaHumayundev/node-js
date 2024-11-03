import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateCourse = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const schema = Joi.object({
		id: Joi.number().required(),
		title: Joi.string().required(),
		description: Joi.string().required(),
		modules: Joi.array()
			.items(
				Joi.object({
					title: Joi.string().required(),
					lessons: Joi.array()
						.items(
							Joi.object({
								title: Joi.string().required(),
								description: Joi.string().required(),
								topics: Joi.array().items(Joi.string()).required(),
								content: Joi.array()
									.items(
										Joi.object({
											type: Joi.string()
												.valid("text", "video", "audio")
												.required(),
											data: Joi.string().required(),
										})
									)
									.required(),
							})
						)
						.required(),
				})
			)
			.required(),
	});

	// const { error } = schema.validate(req.body);
	// if (error) return res.status(400).json({ message: error.message });
	next();
};

import { Request, Response, NextFunction, RequestHandler } from "express";
import { ObjectSchema } from "joi";

interface ValidationError {
	message: string;
	type: string;
}

interface JoiError {
	status: string;
	error: {
		original: unknown;
		details: ValidationError[];
	};
}

interface CustomError {
	status: string;
	error: string;
}

const supportedMethods = ["post", "put", "patch", "delete"];

const validationOptions = {
	abortEarly: false,
	allowUnknown: false,
	stripUnknown: false,
};

const schemaValidator = (
	schema: ObjectSchema,
	useJoiError = true
): RequestHandler => {
	return (req: Request, res: Response, next: NextFunction): void => {
		const method = req.method.toLowerCase();

		if (!supportedMethods.includes(method)) {
			return next();
		}

		const { error, value } = schema.validate(req.body, validationOptions);

		if (error) {
			const customError: CustomError = {
				status: "failed",
				error: "Invalid request. Please review request and try again.",
			};

			const joiError: JoiError = {
				status: "failed",
				error: {
					original: error._original,
					details: error.details.map(({ message, type }: ValidationError) => ({
						message: message.replace(/['"]/g, ""),
						type,
					})),
				},
			};

			res.status(422).json(useJoiError ? joiError : customError);
			return;
		}

		req.body = value;
		next();
	};
};

export default schemaValidator;

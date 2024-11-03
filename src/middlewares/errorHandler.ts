import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	_next: NextFunction
) => {
	logger.error(`${req.method} ${req.url} - ${err.message}`, {
		stack: err.stack,
	});
	res.status(500).json({ message: err.message });
};

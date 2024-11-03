import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export const requestLogger = (
	req: Request,
	_res: Response,
	next: NextFunction
) => {
	const { method, url } = req;
	const message = `${method} ${url} - ${new Date().toISOString()}`;
	logger.info(message);
	next();
};

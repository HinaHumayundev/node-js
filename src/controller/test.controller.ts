import { Request, Response } from "express";

export const getController = (req: Request, res: Response) => {
	res.status(200).json({ test: "Hello World" });
};

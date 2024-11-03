import { Router } from "express";
import { getController } from "../controller/test.controller";

const router = Router();

router.get("/test", getController);

export default router;

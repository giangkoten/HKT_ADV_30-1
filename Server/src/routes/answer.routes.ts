import { Router } from "express";
import { getAllAnswer } from "../controllers/answer.controller";

const router = Router();

router.get("/", getAllAnswer);

export default router;

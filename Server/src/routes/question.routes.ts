import { Router } from "express";
import {
  getAllQuestion,
  getOneQuestion,
  getQuestionForAnswer,
} from "../controllers/question.controller";

const router = Router();

router.get("/", getAllQuestion);
router.get("/:id", getOneQuestion);
router.get("/:id/answer", getQuestionForAnswer);

export default router;

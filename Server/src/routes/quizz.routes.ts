import { Router } from "express";
import {
  getAllCatelory,
  getOne,
  getCateloryById,
} from "../controllers/quizz.controller";

const router = Router();

router.get("/", getAllCatelory);
router.get("/:id", getOne);

router.get("/play/:idCatelory", getCateloryById);

export default router;

import { Router } from "express";
import { getDailySummary } from "../controllers/dietController.js";

const router = Router();

router.get("/:userId", getDailySummary);

export default router;

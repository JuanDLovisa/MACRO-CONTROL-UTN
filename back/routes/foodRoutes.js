import { Router } from "express";
import {
  searchFood,
  addFood,
  getFoodsByUser,
  updateFood,
  deleteFood,
} from "../controllers/foodController.js";

const router = Router();

router.get("/search", searchFood);        // busca en la API
router.post("/", addFood);                // guarda alimento
router.get("/:userId", getFoodsByUser);   // obtiene los del usuario
router.put("/:id", updateFood);           // actualiza un alimento
router.delete("/:id", deleteFood);        // elimina un alimento

export default router;

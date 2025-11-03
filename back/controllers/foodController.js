import axios from "axios";
import { FoodUser } from "../models/FoodUser.js";

// 🔍 Buscar alimentos en Nutritionix
export const searchFood = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.post(
      "https://trackapi.nutritionix.com/v2/natural/nutrients",
      { query },
      {
        headers: {
          "x-app-id": process.env.API_ID,
          "x-app-key": process.env.API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➕ Guardar alimento en FoodUser
export const addFood = async (req, res) => {
  try {
    const {
      userId,
      food_name,
      amount_gr,
      calories,
      protein,
      carbohidrates,
      fat,
    } = req.body;

    const food = await FoodUser.create({
      userId,
      food_name,
      amount_gr,
      calories,
      protein,
      carbohidrates,
      fat,
    });

    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📋 Obtener alimentos de un usuario
export const getFoodsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const foods = await FoodUser.findAll({ where: { userId } });
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Actualizar alimento
export const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await FoodUser.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ error: "Not found" });
    const food = await FoodUser.findByPk(id);
    res.json(food);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Eliminar alimento
export const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await FoodUser.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

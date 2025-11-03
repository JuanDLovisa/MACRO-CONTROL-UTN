import { Op } from "sequelize";
import { FoodUser } from "../models/FoodUser.js";
import { DailyDiet } from "../models/DailyDiet.js";

export const getDailySummary = async (req, res) => {
  try {
    const { userId } = req.params;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const foods = await FoodUser.findAll({
      where: {
        userId,
        consumption_date: {
          [Op.between]: [today, tomorrow],
        },
      },
    });

    if (foods.length === 0)
      return res.json({ message: "No hay registros hoy." });

    const total_calories = foods.reduce((a, f) => a + f.calories, 0);
    const total_protein = foods.reduce((a, f) => a + f.protein, 0);
    const total_carbohidrates = foods.reduce((a, f) => a + f.carbohidrates, 0);
    const total_fat = foods.reduce((a, f) => a + f.fat, 0);

    const summary = await DailyDiet.create({
      userId,
      foodId: foods[0].id,
      total_calories,
      total_protein,
      total_carbohidrates,
      total_fat,
    });

    res.json({ summary, foods });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

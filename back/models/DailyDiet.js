import {DataTypes, Model} from "sequelize"
import {sequelize} from "../config/db.js"

export class DailyDiet extends Model {}

DailyDiet.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id"
    }
  },
  foodId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "food_user",
      key: "id"
    }
  },
  total_calories: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_protein: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  total_carbohidrates: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  total_fat: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  consumption_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "daily_diet",
  sequelize,
  timestamps: true
});
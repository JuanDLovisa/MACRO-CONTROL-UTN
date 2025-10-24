import {DataTypes, Model} from "sequelize"
import {sequelize} from "../config/db.js"

export class FoodUser extends Model {}

FoodUser.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id"
    },
    onDelete: "CASCADE"
  },
  food_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount_gr: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  protein: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  carbohidrates: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  fat: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  consumption_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "food_user",
  sequelize,
  timestamps: true
});

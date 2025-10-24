import { User } from '../models/User.js';
import { FoodUser } from '../models/FoodUser.js';
import { DailyDiet } from '../models/DailyDiet.js';

// Un usuario tiene muchos alimentos
User.hasMany(FoodUser, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
FoodUser.belongsTo(User, {
  foreignKey: 'userId'
});

// Un usuario tiene muchas dietas
User.hasMany(DailyDiet, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
DailyDiet.belongsTo(User, {
  foreignKey: 'userId'
});

// Un alimento puede estar en muchas dietas
FoodUser.hasMany(DailyDiet, {
  foreignKey: 'foodId',
  onDelete: 'CASCADE'
});
DailyDiet.belongsTo(FoodUser, {
  foreignKey: 'foodId'
});

export {
  User,
  FoodUser,
  DailyDiet
};
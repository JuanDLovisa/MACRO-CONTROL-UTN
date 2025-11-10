import { Sequelize } from "sequelize"

export const sequelize = new Sequelize( //Ver por que trae undefined
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect:"mysql"
    }
)

/*export const sequelize = new Sequelize(
  "macro_control_utn",
  "root",
  "123456789",
  {
    dialect: "mysql",
    host: "localhost",
    port: 3306
  })*/
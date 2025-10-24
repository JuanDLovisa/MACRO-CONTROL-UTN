import {Sequelize} from "sequelize"

/*export const sequelize = new Sequelize( //Ver por que trae undefined
    process.env.NAME_DB,
    process.env.USER_DB,
    process.env.PASS_DB,
    {
        host: process.env.HOST_DB,
        port: process.env.PORT_DB,
        dialect:process.env.DIALECT_DB
    }
)*/

export const sequelize = new Sequelize(
  "macro_control_utn",
  "root",
  "123456789",
  {
    dialect: "mysql",
    host: "localhost",
    port: 3306
  })
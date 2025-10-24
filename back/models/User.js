import {DataTypes, Model} from "sequelize"
import {sequelize} from "../config/db.js"

export class User extends Model{}

User.init({
    fullName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    hash:{
        type:DataTypes.STRING(60),
        allowNull:false
    },
    isActive:{
        type:DataTypes.BOOLEAN,
        default:true
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        default:true
    }
},{
    tableName:"users",
    sequelize,
    timestamps:true
})

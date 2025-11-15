const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const Courses = sequelize.define("Courses",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
module.exports = Courses;
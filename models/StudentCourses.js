const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const StudentCourses = sequelize.define("StudentCourses",{});
module.exports = StudentCourses;
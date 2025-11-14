const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const Department = sequelize.define("Department", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    deptName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "departments",
    timestamps: false
});

module.exports = Department;

const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const Student = sequelize.define("Student", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: "students",
    timestamps: false
});

module.exports = Student;

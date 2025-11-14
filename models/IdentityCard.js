const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db_connections");

const IdentityCard = sequelize.define("IdentityCard", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true       // PK must auto-increment
    },
    cardNo: {
        type: DataTypes.STRING,    // better as string (card numbers can start with zero)
        unique: true,
        allowNull: false
    }
}, {
    tableName: "identity_cards",
    timestamps: false
});

module.exports = IdentityCard;

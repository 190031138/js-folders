const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Players = sequelize.define("players", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  player_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jersey_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('batter','bowler','wicket-keeper','all-rounder'),
    allowNull: false,
  },
}, {
  freezeTableName: true
});

module.exports = Players;
// src/models/Table.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/databaseConnection");

const Items = sequelize.define("Items", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  categoryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // description: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  // },
  is_available: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  freezeTableName: true, // Prevent Sequelize from pluralizing the table name
  timestamps: false, // Disable the automatic creation of createdAt and updatedAt fields
});

module.exports = Items;
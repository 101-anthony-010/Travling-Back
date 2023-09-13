const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Product = db.define("products", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  continent: {
    type: DataTypes.ENUM("south_america", "north_america", "europe", "asia", "africa"),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgURL: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  days: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("enabled","disabled"),
    allowNull: false,
    defaultValue: "enabled",
  }
})

module.exports = Product;
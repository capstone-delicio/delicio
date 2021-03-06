const Sequelize = require("sequelize");
const db = require("../db");
const Restaurant = require("./Restaurant");

const Cuisine = db.define("cuisine", {
  // restaurantId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Restaurant,
  //     key: "id",
  //   },
  // },
  cuisine_type: {
    // type: Sequelize.STRING,
    // allowNull: false,
    type: Sequelize.ENUM(
      "American",
      "Mediterranean",
      "Korean",
      "Japanese",
      "Italian",
      "French",
      "Chinese",
      "Middle Eastern",
      "Mexican",
      "Continental",
      "Contemporary European",
      "Indian",
      "Greek"
    ),
    allowNull: false,
  },
});

module.exports = Cuisine;

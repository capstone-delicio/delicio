const Sequelize = require("sequelize");
const db = require("../db");

const Restaurant_pics = db.define("restaurant_pics", {
  picture_Url: {
    type: Sequelize.TEXT,
    validate: { isUrl: true },
  },
  description: {
    type: Sequelize.STRING,
  },
});

module.exports = Restaurant_pics;

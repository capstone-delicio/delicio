const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");

const Bookmarked = db.define("bookmarked", {
  userId: {
    type: Sequelize.INTEGER,

    references: {
      model: User,
      key: "id",
    },
  },
  restaurantId: {
    type: Sequelize.STRING,
  },
  restaurantAlias: {
    type: Sequelize.STRING,
  },
});

module.exports = Bookmarked;

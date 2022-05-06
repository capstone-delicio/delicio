const Sequelize = require("sequelize");
const db = require("../db");
// const User = require("./User");

const Friend = db.define("friend", {
  //   userId: {
  //     type: Sequelize.INTEGER,
  //     references: {
  //       model: User,
  //       key: "id",
  //     },
  //   },
  //   friendId: {
  //     type: Sequelize.INTEGER,
  //     references: {
  //       model: User,
  //       key: "id",
  //     },
  //   },
});

module.exports = Friend;

const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");
const Restaurant = require("./Restaurant");

const Event = db.define("event", {
  organizerId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  event_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  event_date: {
    type: Sequelize.DATE,
    allowNull: true,
    defaultValue: null,
  },
  event_time: {
    type: Sequelize.TIME,
    allowNull: true,
    defaultValue: null,
  },
  restaurantId: {
    type: Sequelize.STRING,
    allowNull: true,
    // references: {
    //   model: Restaurant,
    //   key: "id",
    // },
  },
  restaurantAlias: {
    type: Sequelize.STRING,
  },
  isScheduled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  vote_deadline: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Event;

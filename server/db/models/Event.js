const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./User");
const Restaurant = require("./Restaurant");

const Event = db.define("event", {
  organizer_id: {
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
  restaurant_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: Restaurant,
      key: "id",
    },
  },
  isScheduled: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
});

module.exports = Event;

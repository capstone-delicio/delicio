const Sequelize = require("sequelize");
const db = require("../db");
const Event = require("./Event");
const Restaurant_pics = require("./Restaurant_pics");
const User = require("./User");

const Event_picks = db.define("event_picks", {
  isLiked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  isSubmitted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  event_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Event,
      key: "id",
    },
  },
  user_id: {
    type: Sequelize.INTEGER,

    references: {
      model: User,
      key: "id",
    },
  },
  restaurant_pics_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Restaurant_pics,
      key: "id",
    },
  },
});

module.exports = Event_picks;

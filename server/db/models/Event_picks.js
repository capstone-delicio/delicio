const Sequelize = require("sequelize");
const db = require("../db");
const Event = require("./Event");
// const Restaurant_pics = require("./Restaurant_pics");
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
  eventId: {
    type: Sequelize.INTEGER,
    references: {
      model: Event,
      key: "id",
    },
  },
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
  restaurant_picUrl: {
    type: Sequelize.STRING,
    // references: {
    //   model: Restaurant_pics,
    //   key: "id",
    // },
  },
  picDescription: {
    type: Sequelize.TEXT,
  },
});

module.exports = Event_picks;

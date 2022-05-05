//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Restaurant = require("./models/Restaurant");
const Event = require("./models/Event");
const Cuisine = require("./models/Cuisine");
const Restaurant_pics = require("./models/Restaurant_pics");

//associations could go here!
// friends is the through table
User.belongsToMany(User, { through: "friends", as: "friend" });
Cuisine.hasMany(Restaurant, {
  foreignKey: "id",
});
User.belongsToMany(Event, { through: "event_attendees" });
Event.belongsToMany(User, { through: "event_attendees" });
Restaurant.hasMany(Restaurant_pics, { foreignKey: "id" });
Restaurant_pics.belongsTo(Restaurant);

module.exports = {
  db,
  models: {
    User,
    Restaurant,
    Event,
    Cuisine,
  },
};

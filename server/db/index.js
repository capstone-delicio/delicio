//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Restaurant = require("./models/Restaurant");
const Event = require("./models/Event");
const Cuisine = require("./models/Cuisine");
// const Restaurant_pics = require("./models/Restaurant_pics");
const Event_picks = require("./models/Event_picks");
const Friend = require("./models/Friend");
const Bookmarked = require("./models/Bookmarked");

//associations could go here!
// friends is the through table

// User.belongsToMany(User, { as: "personA", through: Friend });
// User.belongsToMany(User, { through: Friend });

User.belongsToMany(User, {
  as: "person",
  foreignKey: "userId",
  through: Friend,
});
User.belongsToMany(User, {
  as: "usersFriend",
  foreignKey: "friendId",
  through: Friend,
});

// rest, cuisine - m:m
// restaurant belongs to many cuisines
// cuisines

// Restaurant.belongsToMany(Cuisine, { through: "rest_cuisine" });
// Cuisine.belongsToMany(Restaurant, { through: "rest_cuisine" });

User.belongsToMany(Event, { through: "event_attendees" });
Event.belongsToMany(User, { through: "event_attendees" });

// User.belongsToMany(Restaurant, { through: "bookmarked_restaurant" });
// Restaurant.belongsToMany(User, { through: "bookmarked_restaurant" });

// Restaurant.hasMany(Restaurant_pics);
// Restaurant_pics.belongsTo(Restaurant);

// Restaurant.hasMany(Event);
// Event.belongsTo(Restaurant);

// Event.hasMany(Event_picks);
// User.hasMany(Event_picks);

// User.belongsToMany(Event, { through: Event_picks });
// Event.belongsToMany(User, { through: Event_picks });

// Restaurant.hasMany(Event);
// Event.belongsTo(Restaurant);

// User.belongsToMany(Restaurant, { through: 'bookmarked_restaurants' })
// Restaurant.belongsToMany(User, { through: 'bookmarked_restaurants' })

module.exports = {
  db,
  models: {
    User,
    Restaurant,
    Event,
    Cuisine,
    // Restaurant_pics,
    Event_picks,
    Friend,
    Bookmarked,
  },
};

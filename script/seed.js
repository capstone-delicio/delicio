"use strict";

const {
  db,
  models: { User, Restaurant, Event, Cuisine, Restaurant_pics, Event_picks },
} = require("../server/db");

const users = require("./users");
const restaurant = require("./restaurant");
const cuisine = require("./cuisine");
const restaurant_pics = require("./restaurant_pics");
const friends = require("./friends");
const attendees = require("./attendees");
const eventPicks = require("./eventPicks");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  await Promise.all(
    users.map((users) => {
      return User.create(users);
    })
  );
  await Promise.all(
    restaurant.map((restaurant) => {
      return Restaurant.create(restaurant);
    })
  );
  await Promise.all(
    cuisine.map((cuisine) => {
      return Cuisine.create(cuisine);
    })
  );
  await Promise.all(
    restaurant_pics.map((restaurant_pics) => {
      return Restaurant_pics.create(restaurant_pics);
    })

  )

  // Creating Users
  // const users = await Promise.all([
  //   User.create({ username: 'cody', password: '123' }),
  //   User.create({ username: 'murphy', password: '123' }),
  // ])

  );
  await Promise.all(
    friends.map((friend) => {
      return friends.create(friend);
    })
  );


  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${restaurant.length} restaurant`);
  console.log(`seeded ${cuisine.length} cuisine`);
  console.log(`seeded ${restaurant_pics.length} restaurant_pics`);
  console.log(`seeded ${friends.length} friends`);
  console.log(`seeded successfully`);
  // return {
  // users: {
  //   cody: users[0],
  //   murphy: users[1],
  // },
  // }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

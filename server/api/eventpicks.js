const router = require('express').Router();
const sequelize = require('sequelize');

const {
  models: { Event_picks, Event },
} = require('../db');
// const { requireToken, isAdmin } = require("./gateKeeper");
module.exports = router;

// GET /api/eventpicks

// get eventPicks by userId by eventId
// GET /api/eventpicks/user/:id   id=eventId
router.get('/user/:id', async (req, res, next) => {
  try {
    const userId = req.query.userId;
    const eventId = req.params.id;
    const eventPicks = await Event_picks.findAll({
      where: { userId, eventId },
      attributes: [
        ['restaurantId', 'id'],
        ['restaurantAlias', 'alias'],
        ['restaurant_picUrl', 'imgSrc'],
        ['picDescription', 'imgDesc'],
      ],
    });
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

// get all selections or event picks associated with user
router.get('/user', async (req, res, next) => {
  // console.log("in user route", req.query.id);
  try {
    // res.send("hi");
    const eventPicks = await Event_picks.findAll({
      // need userId, eventId
      where: { userId: req.query.id },
      include: { model: Event },
      // make sure when you create thunk send in id
      attributes: ['eventId', 'userId'],
    });
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

// tally isLiked by Restaurant by Event
// GET /api/eventpicks/votes/:id
router.get('/votes/:id', async (req, res, next) => {
  try {
    const event = await Event_picks.count({
      where: { eventId: req.params.id, isLiked: true },
      group: ['restaurantId'],
    });
    res.json(event);
  } catch (err) {
    next(err);
  }
});

// GET /api/eventpicks/user/votes/:id  id=eventId
router.get('/user/votes/:id', async (req, res, next) => {
  const userId = req.query.userId;

  try {
    const event = await Event_picks.count({
      where: { userId, eventId: req.params.id, isSubmitted: false },
    });
    res.json(event);
  } catch (err) {
    next(err);
  }
});

// tally isSubmitted by Event
// GET /api/eventpicks/submits/:id
router.get('/submits/:id', async (req, res, next) => {
  try {
    const event = await Event_picks.count({
      where: { eventId: req.params.id, isSubmitted: false },
    });
    res.json(event);
  } catch (err) {
    next(err);
  }
});

// POST /api/eventpicks
// adding event picks when invited to an event
router.post('/', async (req, res, next) => {
  try {
    let eventPicks = await Event_picks.create(req.body);
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

// PUT /api/eventpicks/:id
// only allow updates to users' events
router.put('/update', async (req, res, next) => {
  // console.log("inside server", req.body);
  try {
    let response = await Event_picks.update(
      { isLiked: true, isSubmitted: true },
      {
        where: {
          eventId: req.body.eventId,
          restaurant_picUrl: req.body.restaurant_picUrl,
          userId: req.body.userId,
        },
        // returns entire record
        returning: true,
      },
    );
    // returning just the json, excludes the arr
    res.json(response[1][0]);
  } catch (err) {
    next(err);
  }
});

// allow updates to event submit
router.put('/submit', async (req, res, next) => {
  try {
    let response = await Event_picks.update(
      { isSubmitted: true },
      {
        where: {
          eventId: req.body.eventId,
        },
        returning: true,
      },
    );
    res.json(response[1][0]);
  } catch (err) {
    next(err);
  }
});

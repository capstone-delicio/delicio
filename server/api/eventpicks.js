const router = require("express").Router();
const {
  models: { Event_picks, Event },
} = require("../db");
// const { requireToken, isAdmin } = require("./gateKeeper");
module.exports = router;

// GET /api/eventpicks
// get all selections or event picks associated with user
router.get("/user", async (req, res, next) => {
  try {
    // res.send("hi");
    const eventPicks = await Event_picks.findAll({
      // need userId, eventId
      include: { model: Event },
      where: { userId: 1 },
      attributes: ["eventId", "userId"],
    });
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

// POST /api/eventpicks
// adding event picks when invited to an event
router.post("/", async (req, res, next) => {
  try {
    let eventPicks = await Event_picks.create(req.body);
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

// PUT /api/eventpicks/:id
// only allow updates to users' events
router.put("/update", async (req, res, next) => {
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
      }
    );
    // returning just the json, excludes the arr
    res.json(response[1][0]);
  } catch (err) {
    next(err);
  }
});

// allow updates to event submit
router.put("/submit", async (req, res, next) => {
  try {
    let response = await Event_picks.update(
      { isSubmitted: true },
      {
        where: {
          eventId: req.body.eventId,
        },
        returning: true,
      }
    );
    res.json(response[1][0]);
  } catch (err) {
    next(err);
  }
});

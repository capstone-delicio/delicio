const router = require("express").Router();
const {
  models: { Event_picks, Event, User },
} = require("../db");
const { requireToken, isAdmin } = require("./gateKeeper");
module.exports = router;

// GET /api/select
// get all selections or event picks associated with user
router.get("/", async (req, res, next) => {
  try {
    // res.send("hi");
    const eventPicks = await Event_picks.findAll({
      where: { userId: req.user.id },
      // include: [{ model: User }, { model: Event }],
    });
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

// POST /api/select
// adding event picks when invited to an event
router.post("/", async (req, res, next) => {
  try {
    let eventPicks = await Event_picks.create(req.body);
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

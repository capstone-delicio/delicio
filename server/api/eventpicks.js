const router = require("express").Router();
const {
  models: { Event_picks, Event, User },
} = require("../db");
const { requireToken, isAdmin } = require("./gateKeeper");
module.exports = router;

// GET /api/eventpicks
// get all selections or event picks associated with user
router.get("/", requireToken, async (req, res, next) => {
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
router.put("/:id", requireToken, async (req, res, next) => {
  try {
    let eventPicks = await Event_picks.update(req.body, {
      where: { id: req.params.id, userId: req.user.id },
    });
    res.json(eventPicks);
  } catch (err) {
    next(err);
  }
});

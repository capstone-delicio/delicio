const router = require("express").Router();
const {
  models: { User, Event },
} = require("../db");
const { requireToken, isAdmin } = require("./gateKeeper");
module.exports = router;

//ROUTE: api/events
router.get("/", requireToken, async (req, res, next) => {
  try {
    // console.log("event");
    const events = await Event.findAll();
    res.json(events);
  } catch (err) {
    next(err);
  }
});

//ADD EVENT
//ROUTE: api/events
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    let newEvent = await Event.create(req.body);
    res.json(newEvent);
  } catch (err) {
    next(err);
  }
});

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

router.get("/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    res.json(event);
  } catch (err) {
    next(err);
  }
});

//ADD EVENT
//ROUTE: api/events
router.post("/", async (req, res, next) => {
  try {
    let newEvent = await Event.create(req.body);
    res.json(newEvent);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id)
    // res.json(await event.update(req.body))
    console.log("event", event)
    console.log("req.body",req.body)
  } catch (err) {
    next(err);
  }
});

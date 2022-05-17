const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/friends", require("./friends"));
router.use("/events", require("./event"));
router.use("/eventpicks", require("./eventpicks"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

//C: very much like the modularization of api routes from auth routes. not necessary but shows thought

const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { requireToken, isAdmin } = require("./gateKeeper");
module.exports = router;

//ROUTE: api/users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "first_name", "last_name", "prof_picUrl"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//ROUTE: api/users/:id
router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.id },
      attributes: ["id", "first_name", "last_name", "prof_picUrl"],
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id);
    res.json(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

const router = require("express").Router();
const {
  models: { Friend, User },
} = require("../db");

module.exports = router;

// Route: api/friends
router.get("/:id", async (req, res, next) => {
  console.log(req.params.id);
  try {
    const friends = await User.findOne({
      where: { id: req.params.id },
      include: {
        model: User,
        as: "person",
        through: { attributes: [] },
      },
    });
    res.json(friends.person);
  } catch (error) {
    console.log(error);
  }
});

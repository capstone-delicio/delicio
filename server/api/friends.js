const router = require("express").Router();
const {
  models: { Friend, User },
} = require("../db");

module.exports = router;

// Route: /api/friends
router.get("/:id", async (req, res, next) => {
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

// Route: /api/friends/update Add a Friend
router.post("/update", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.body.userId);
    const friend = await User.findByPk(req.body.friendId);
    await user.addPerson(friend);
    res.json(friend);
  } catch (error) {
    console.log(error);
  }
});

const router = require('express').Router()
const {
  models: { User },
} = require('../db')
module.exports = router

//ROUTE: api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    // {
    //   // explicitly select only the id and email fields - even though
    //   // users' passwords are encrypted, it won't help if we just
    //   // send everything to anyone who asks!
    //   attributes: ['id', 'email'],
    // }

    res.json(users)
  } catch (err) {
    next(err)
  }
})
//get single user
//ROUTE: api/users/id
router.get('/:id', async (req, res, next) => {
  try {
    const specificUser = await User.findByPk(req.params.id)
    res.json(specificUser)
  } catch (error) {
    next(error)
  }
})
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (error) {
    next(error)
  }
})

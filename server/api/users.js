const router = require('express').Router()
const {
  models: { User },
} = require('../db')
const { requireToken, isAdmin } = require('./gateKeeper')
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

// router.get('/:id', async (req, res, next) => {
//   try {
//     let user = await User.findByPk(req.params.id)
//     res.json(user)
//   } catch (err) {
//     next(err)
//   }
// })

router.put('/:id', async (req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id)
    res.json(await user.update(req.body))
  } catch (err) {
    next(err)
  }
})

// router.put('/:id', async (req, res, next) => {
//   try {
//     const user = await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//       returning: true,
//     })
//     res.status(200).json(user)
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     let newUser = await User.create(req.body)
//     res.json(newUser)
//   } catch (error) {
//     next(error)
//   }
// })

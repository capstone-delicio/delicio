const router = require('express').Router()
const {
  models: { Event },
} = require('../db')
module.exports = router

//ROUTE: api/events
router.get('/', async (req, res, next) => {
  try {
    console.log('event')
    const events = await Event.findAll()
    res.json(events)
  } catch (err) {
    next(err)
  }
})

//ADD EVENT
//ROUTE: api/events
router.post('/', async (req, res, next) => {
  try {
    let newEvent = await Event.create(req.body)
    res.json(newEvent)
  } catch (err) {
    next(err)
  }
})

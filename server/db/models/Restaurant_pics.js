const Sequelize = require('sequelize')
const db = require('../db')
const Restaurant = require('./Restaurant')

const Restaurant_pics = db.define('restaurant_pics', {
  restaurantId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Restaurant,
      key: 'id',
    },
  },
  picture_Url: {
    type: Sequelize.TEXT,
    validate: { isUrl: true },
  },
  description: {
    type: Sequelize.STRING,
  },
})

module.exports = Restaurant_pics

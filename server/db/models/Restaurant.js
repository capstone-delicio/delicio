const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const axios = require('axios');

const SALT_ROUNDS = 5

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.ENUM(
      'AL',
      'AK',
      'AZ',
      'AR',
      'CA',
      'CO',
      'CT',
      'DE',
      'DC',
      'FL',
      'GA',
      'HI',
      'ID',
      'IL',
      'IN',
      'IA',
      'KS',
      'KY',
      'LA',
      'ME',
      'MD',
      'MA',
      'MI',
      'MN',
      'MS',
      'MO',
      'MT',
      'NE',
      'NV',
      'NH',
      'NJ',
      'NM',
      'NY',
      'NC',
      'ND',
      'OH',
      'OK',
      'OR',
      'PA',
      'PR',
      'RI',
      'SC',
      'SD',
      'TN',
      'TX',
      'UT',
      'VT',
      'VA',
      'VI',
      'WA',
      'WV',
      'WI',
      'WY'
    ),
    allowNull: false,
  },
  zip: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_number: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  },
  open_time: {
    type: Sequelize.TIME,
  },
  close_time: {
    type: Sequelize.TIME,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price_range: {
    type: Sequelize.ENUM('$', '$$', '$$$', '$$$$'),
  },
  website_Url: {
    type: Sequelize.TEXT,
    validate: { isUrl: true },
  },
  opentableUrl: {
    type: Sequelize.TEXT,
    validate: { isUrl: true },
  },
  profile_picUrl: {
    type: Sequelize.TEXT,
    validate: { isUrl: true },
    defaultValue:
      'https://static01.nyt.com/images/2019/03/24/nyregion/24ALBUM1/24ALBUM1-superJumbo.jpg?quality=75&auto=webp',
  },
})

module.exports = Restaurant

/**
 * instanceMethods
 */
Restaurant.prototype.correctPassword = function (restaurantPwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(restaurantPwd, this.password)
}

Restaurant.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT)
}

/**
 * classMethods
 */
Restaurant.authenticate = async function ({ email, password }) {
  const restaurant = await this.findOne({ where: { email } })
  if (!restaurant || !(await restaurant.correctPassword(password))) {
    const error = Error('Incorrect email/password')
    error.status = 401
    throw error
  }
  return restaurant.generateToken()
}

Restaurant.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT)
    const restaurant = Restaurant.findByPk(id)
    if (!restaurant) {
      throw 'cannot find restaurant by token'
    }
    return restaurant
  } catch (ex) {
    const error = Error('bad token')
    error.status = 401
    throw error
  }
}

/**
 * hooks
 */
const hashPassword = async (restaurant) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (restaurant.changed('password')) {
    restaurant.password = await bcrypt.hash(restaurant.password, SALT_ROUNDS)
  }
}

Restaurant.beforeCreate(hashPassword)
Restaurant.beforeUpdate(hashPassword)
Restaurant.beforeBulkCreate((restaurants) =>
  Promise.all(restaurants.map(hashPassword))
)

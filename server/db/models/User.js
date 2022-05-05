const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const axios = require('axios');

const SALT_ROUNDS = 5

const User = db.define('user', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  prof_picUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://e6.pngbyte.com/pngpicture/76945/png-default-image-png-Default-Profile_thumbnail.png',
    validate: {
      isUrl: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // password_confirm: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   // check to see if this matches with password
  //   // custom validator
  //   validate: {
  //     isPasswordMatch(value) {
  //       if (!value) throw new Error('Please confirm your password')
  //       if (value !== this.password) throw new Error('Passwords do not match')
  //     },
  //   },
  // },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  preferred_city: {
    type: Sequelize.ENUM('Chicago', 'New York', 'Miami', 'Los Angeles'),
    defaultValue: 'Chicago',
  },
  phone_number: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
})

module.exports = User

/**
 * instanceMethods
 */
User.prototype.correctPassword = function (candidatePwd) {
  //we need to compare the plain version to an encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password)
}

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT)
}

/**
 * classMethods
 */
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } })
  if (!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect username/password')
    error.status = 401
    throw error
  }
  return user.generateToken()
}

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT)
    const user = User.findByPk(id)
    if (!user) {
      throw 'nooo'
    }
    return user
  } catch (ex) {
    const error = Error('bad token')
    error.status = 401
    throw error
  }
}

/**
 * hooks
 */
const hashPassword = async (user) => {
  //in case the password has been changed, we want to encrypt it with bcrypt
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS)
  }
}

User.beforeCreate(async (user) => {
  user.password_confirm = undefined
  await hashPassword(user)
})

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)

User.beforeBulkCreate((users) =>
  Promise.all(
    users.map((user) => {
      user.password_confirm = undefined
      hashPassword(user)
    })
  )
)

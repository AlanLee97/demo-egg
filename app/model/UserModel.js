const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('t_users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;

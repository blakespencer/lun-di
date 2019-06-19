const Sequelize = require('sequelize');
const db = require('../db');

const Color = db.define('color', {
  color: {
    type: Sequelize.STRING,
  },
  value: {
    type: Sequelize.STRING,
  },
});

module.exports = Color;

const Sequelize = require('sequelize');
const db = require('../db');

const Size = db.define('size', {
  valueSequence: {
    type: Sequelize.INTEGER,
  },
  value: {
    type: Sequelize.STRING,
  },
});

module.exports = Size;

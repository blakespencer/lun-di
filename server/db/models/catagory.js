const Sequelize = require('sequelize');
const db = require('../db');

const Catagory = db.define('catagory', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Catagory;

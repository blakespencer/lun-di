const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  imageUrl: Sequelize.STRING,
});

module.exports = Image;

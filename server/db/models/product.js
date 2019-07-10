const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  picture: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  valueSequence: {
    type: Sequelize.INTEGER,
  },
  color: {
    type: Sequelize.STRING,
  },
});

module.exports = Product;

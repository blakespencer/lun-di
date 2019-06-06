const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
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
});

module.exports = Product;

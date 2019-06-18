const Sequelize = require('sequelize');
const db = require('../db');

const Sku = db.define('sku', {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
  prefundPrice: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.INTEGER,
  },
  salePrice: {
    type: Sequelize.INTEGER,
  },
  stock: {
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
  },
  value: {
    type: Sequelize.STRING,
  },
  valueSequence: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Sku;

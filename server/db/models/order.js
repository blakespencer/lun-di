const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  shippingMethod: {
    type: Sequelize.STRING,
    defaultValue: 'US Mail',
  },
  status: {
    type: Sequelize.ENUM,
    defaultValue: 'cart',
    values: ['cart', 'active', 'delivered'],
  },
});

module.exports = Order;

const Sequelize = require('sequelize');
const db = require('../db');

const subProduct = db.define('subProduct');

module.exports = subProduct;

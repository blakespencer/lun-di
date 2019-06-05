const User = require('./user');
const Product = require('./product');
const Catagory = require('./catagory');
const ProductType = require('./productType');

// associations
ProductType.hasMany(Product);
Product.belongsTo(ProductType);

ProductType.belongsTo(Catagory);
Catagory.hasMany(ProductType);

module.exports = {
  User,
  Product,
  Catagory,
  ProductType,
};

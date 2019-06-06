const User = require('./user');
const Brand = require('./brand');
const Product = require('./product');
const Catagory = require('./catagory');
const ProductType = require('./productType');

// associations
Brand.hasMany(Product);
Product.belongsTo(Brand);

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

Catagory.hasMany(ProductType);
ProductType.belongsTo(Catagory);

module.exports = {
  User,
  Brand,
  Product,
  Catagory,
  ProductType,
};

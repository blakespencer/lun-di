const Brand = require('./brand');
const Catagory = require('./catagory');
const Item = require('./item');
const Order = require('./order');
const Product = require('./product');
const ProductType = require('./productType');
const { User } = require('./user');
const Sku = require('./sku');

// associations
Brand.hasMany(Product);
Product.belongsTo(Brand);

ProductType.hasMany(Product);
Product.belongsTo(ProductType);

Catagory.hasMany(ProductType);
ProductType.belongsTo(Catagory);

Order.belongsTo(User);
User.hasMany(Order);

Product.belongsToMany(Order, { through: Item });
Order.belongsToMany(Product, { through: Item });
Sku.belongsToMany(Order, { through: Item });
Order.belongsToMany(Sku, { through: Item });

Item.belongsTo(Order);
Order.hasMany(Item);
Item.belongsTo(Product);
Product.hasMany(Item);

Product.hasMany(Sku);
Sku.belongsTo(Product);
Item.belongsTo(Sku);
Sku.hasMany(Item);

// This is circluar

module.exports = {
  Sku,
  User,
  Item,
  Order,
  Brand,
  Product,
  Catagory,
  ProductType,
};

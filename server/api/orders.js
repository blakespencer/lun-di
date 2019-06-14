const router = require('express').Router();
const { Order, Item, Product } = require('../db/models');
const { userPolicy } = require('../config/authenticateMiddleware');
module.exports = router;

router.get('/cart', userPolicy, async (req, res, next) => {
  try {
    const [order, _] = await Order.findOrCreate({
      where: { userId: req.user.id, status: 'cart' },
      include: {
        model: Item,
        attributes: ['quantity', 'productId'],
        include: {
          model: Product,
          attributes: ['id', 'price', 'name', 'description', 'picture'],
        },
      },
    });

    res.json(order.items);
    // res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.put('/cart', userPolicy, async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    // Make sure they can access only their cart
    const cart = await Order.findOne({
      where: { userId: req.user.id, status: 'cart' },
      attributes: ['id'],
    });
    // Find or create the item with orderId and productId
    const orderId = cart.id;
    let [item, isCreated] = await Item.findOrCreate({
      where: {
        orderId,
        productId,
      },
      include: {
        model: Product,
        attributes: ['id', 'price', 'name', 'description', 'picture'],
      },
      attributes: ['quantity', 'productId'],
    });
    // When createed, attributes are not accepted as a parameter...
    if (isCreated) {
      item = await Item.findOne({
        where: {
          orderId,
          productId,
        },
        include: {
          model: Product,
          attributes: ['id', 'price', 'name', 'description', 'picture'],
        },
        attributes: ['quantity', 'productId'],
      });
    }
    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (err) {
    console.log(err);
  }
});

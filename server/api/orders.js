const router = require('express').Router();
const { Order, Item, Product, Sku } = require('../db/models');
const { userPolicy } = require('../config/authenticateMiddleware');
module.exports = router;

router.get('/cart', userPolicy, async (req, res, next) => {
  try {
    const [order, _] = await Order.findOrCreate({
      where: { userId: req.user.id, status: 'cart' },
      include: {
        model: Item,
        attributes: ['quantity', 'productId', 'skuId'],
        include: [
          {
            model: Product,
            attributes: ['id', 'price', 'name', 'description', 'picture'],
          },
          {
            model: Sku,
          },
        ],
      },
    });

    // If created, don't need to find it since the cart will be empty

    res.json(order.items);
    // res.json(cart);
  } catch (err) {
    next(err);
  }
});

// NOT SURE THE BEST RESTFUL API NAME...
router.put('/cart/inc', userPolicy, async (req, res, next) => {
  try {
    const { productId, skuId, addition } = req.body;
    // Make sure they can access only their cart
    const cart = await Order.findOne({
      where: { userId: req.user.id, status: 'cart' },
      attributes: ['id'],
    });
    const orderId = cart.id;
    const item = await Item.findOne({
      where: {
        orderId,
        productId,
        skuId,
      },
      include: [
        {
          model: Product,
          attributes: ['id', 'price', 'name', 'description', 'picture'],
        },
        {
          model: Sku,
        },
      ],
      attributes: ['quantity', 'productId', 'orderId', 'skuId'],
    });
    item.quantity += addition;
    await item.save();
    res.json(item);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/cart/item/', userPolicy, async (req, res, next) => {
  try {
    const { productId, skuId } = req.query;
    // Make sure they can access only their cart
    const cart = await Order.findOne({
      where: { userId: req.user.id, status: 'cart' },
      attributes: ['id'],
    });
    const orderId = cart.id;
    const item = await Item.findOne({
      where: {
        orderId,
        productId,
        skuId,
      },
    });
    await item.destroy({ force: true });
    res.json({ productId, skuId });
  } catch (err) {
    console.log(err);
  }
});

router.put('/cart', userPolicy, async (req, res, next) => {
  try {
    const { productId, skuId, quantity } = req.body;
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
        skuId,
      },
      include: [
        {
          model: Product,
          attributes: ['id', 'price', 'name', 'description', 'picture'],
        },
        {
          model: Sku,
        },
      ],
      attributes: ['quantity', 'productId', 'orderId', 'skuId'],
    });
    // When createed, attributes are not accepted as a parameter...

    if (isCreated) {
      item = await Item.findOne({
        where: {
          orderId,
          productId,
          skuId,
        },
        include: [
          {
            model: Product,
            attributes: ['id', 'price', 'name', 'description', 'picture'],
          },
          {
            model: Sku,
          },
        ],
        attributes: ['quantity', 'productId', 'orderId', 'skuId'],
      });
    }
    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (err) {
    console.log(err);
  }
});

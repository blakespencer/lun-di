const router = require('express').Router();
const { Product, ProductType, Catagory, Brand, Sku } = require('../db/models');
module.exports = router;

router.get('/:ProductTypeName', async (req, res, next) => {
  try {
    const productTypeName = req.params.ProductTypeName.toLowerCase();
    const productTypeId = await ProductType.findOne({
      where: { name: productTypeName },
      attributes: ['id'],
    }).get('id');
    const products = await Product.findAll({
      where: { productTypeId },
      include: [
        {
          model: ProductType,
          attributes: ['name', 'id'],
          include: [{ model: Catagory, attributes: ['name', 'id'] }],
        },
        {
          model: Brand,
          attributes: ['name', 'id'],
        },
        {
          model: Sku,
        },
      ],
      order: [[Sku, 'valueSequence', 'ASC']],
    });
    res.json(products);
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

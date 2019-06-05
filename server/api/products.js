const router = require('express').Router();
const { Product, ProductType, Catagory } = require('../db/models');
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
      ],
    });
    res.json(products);
  } catch (err) {
    console.log(err);
  }
  // try {
  //   const productTypeName = req.params.ProductTypeName;
  //   const productTypeId = await ProductType.findOne({
  //     where: { name: productTypeName },
  //     attributes: ['id'],
  //   });
  //   const products = await Product.findAll({
  //     where: { productTypeId: productTypeId },
  //     include: [
  //       {
  //         model: ProductType,
  //         attributes: ['name', 'id'],
  //         include: [{ model: Catagory, attributes: ['name', 'id'] }],
  //       },
  //     ],
  //   });
  // } catch (err) {
  //   next(err);
  // }
});

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

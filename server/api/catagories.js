const router = require('express').Router();
const { Catagory, ProductType } = require('../db/models');
module.exports = router;

router.use('/productType', require('./products'));

router.get('/:id', async (req, res, next) => {
  try {
    const products = await Catagory.findAll({
      include: [
        {
          model: ProductType,
          attributes: ['name', 'id'],
        },
      ],
      where: {
        id: req.params.id,
      },
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const productTypes = await Catagory.findAll({
      include: [
        {
          model: ProductType,
          attributes: ['name', 'id'],
        },
      ],
    });
    res.json(productTypes);
  } catch (err) {
    next(err);
  }
});

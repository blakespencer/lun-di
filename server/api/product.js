const router = require('express').Router();
const { Product, ProductType, Catagory, Brand, Sku } = require('../db/models');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Brand,
        },
        {
          model: Sku,
        },
      ],
      attributes: ['name', 'description', 'picture', 'price'],
      order: [[Sku, 'valueSequence', 'ASC']],
    });
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

const router = require('express').Router();
const { Product, ProductType, Catagory, Brand } = require('../db/models');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({
      where: {
        id: id,
      },
      include: {
        model: Brand,
      },
      attributes: ['name', 'description', 'picture', 'price'],
    });
    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

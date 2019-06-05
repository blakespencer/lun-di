const router = require('express').Router();
const { ProductType } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const productTypes = await ProductType.findAll();
    res.json(productTypes);
  } catch (err) {
    next(err);
  }
});

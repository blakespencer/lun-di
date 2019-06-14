const router = require('express').Router();
module.exports = router;

router.use('/catagories', require('./catagories'));

router.use('/products', require('./products'));

router.use('/productTypes', require('./productType'));

router.use('/users', require('./users'));

router.use('images', require('./images'));

router.use('/orders', require('./orders'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

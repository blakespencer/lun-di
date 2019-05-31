const router = require('express').Router();
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    res.json({ message: 'success' });
  } catch (err) {
    next(err);
  }
});

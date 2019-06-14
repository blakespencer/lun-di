const passport = require('passport');
const { ADMIN_ROLE } = require('../db/models/user');

const isAdmin = (req, res, next) => {
  if (req.user.role !== ADMIN_ROLE) {
    return res.json({ err: 'unarthorised' });
  }
  next();
};

const adminPolicy = [passport.authenticate('jwt', { session: false }), isAdmin];

const userPolicy = passport.authenticate('jwt', { session: false });

module.exports = { isAdmin, adminPolicy, userPolicy };

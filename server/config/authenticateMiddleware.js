const { ADMIN_ROLE } = require('../db/models/user');

const isAdmin = (req, res, next) => {
  if (req.user.role !== ADMIN_ROLE) {
    return res.json({ err: 'unarthorised' });
  }
  next();
};

module.exports = isAdmin;

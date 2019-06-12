const router = require('express').Router();
const { User } = require('../db/models');
const passport = require('passport');
const jwtSecret = require('../../secrets').JWT_SECRET;
const jwt = require('jsonwebtoken');

router.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      req.logIn(user, async err => {
        try {
          const { firstName, lastName, email } = req.body;
          const user = await User.findOne({
            where: {
              email,
            },
          });
          await user.update({
            firstName,
            lastName,
          });
          console.log('user created in db');
          res.status(200).send({ message: 'user created' });
        } catch (err) {
          console.log(err);
        }
      });
    }
  })(req, res, next);
});

router.get('/loginUser', (req, res, next) => {
  passport.authenticate('login', (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      req.logIn(user, async err => {
        const { email } = user;
        try {
          const user = User.findOne({
            where: {
              email,
            },
          });

          const token = jwt.sign({ id: email }, jwtSecret.secret);
          res.status(200).send({
            auth: true,
            token: token,
            message: 'user found & logged in',
          });
        } catch (err) {
          console.log(err);
        }
      });
    }
  })(req, res, next);
});

router.get('/findUser', (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.send(info.message);
    } else {
      console.log('user found in db from route');
      res.status(200).send({
        auth: true,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        username: user.username,
        password: user.password,
        message: 'user found in db',
      });
    }
  })(req, res, next);
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

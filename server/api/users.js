const router = require('express').Router();
const { User } = require('../db/models');
const passport = require('passport');
const REACT_APP_JWT_SECRET =
  process.env.REACT_APP_JWT_SECRET ||
  require('../../secrets').REACT_APP_JWT_SECRET;
const jwt = require('jsonwebtoken');
const { isAdmin, adminPolicy } = require('../config/authenticateMiddleware');

router.post('/registerUser', (req, res, next) => {
  passport.authenticate('register', (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      res.send(info);
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

router.post('/loginUser', (req, res, next) => {
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
          const userRes = await User.findOne({
            where: {
              email,
            },
          });
          const { firstName, lastName } = userRes;
          const token = jwt.sign({ id: email }, REACT_APP_JWT_SECRET);
          res.status(200).send({
            auth: true,
            token: token,
            message: 'user found & logged in',
            firstName,
            lastName,
            email,
          });
        } catch (err) {
          console.log(err);
        }
      });
    }
  })(req, res, next);
});

router.get('/me', (req, res, next) => {
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

router.put('/', adminPolicy, async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  res.status(200).json(user);
});

module.exports = router;

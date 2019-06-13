const jwtSecret = process.env.JWT_SECRET || require('../../secrets').JWT_SECRET;
const bcrypt = require('bcrypt');

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  { User } = require('../db/models'),
  JWTstrategy = require('passport-jwt').Strategy,
  ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
  'register',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({
          where: {
            email: username,
          },
        });
        if (user !== null) {
          console.log('username alreaey taken');
          return done(null, false, {
            message: 'Email alreaey taken',
            status: 400,
          });
        } else {
          const hashedPassword = await bcrypt.hash(
            password,
            BCRYPT_SALT_ROUNDS
          );
          User.create({ email: username, password: hashedPassword }).then(
            user => {
              console.log('user created');
              return done(null, user);
            }
          );
        }
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({
          where: {
            email: username,
          },
        });
        if (user === null) {
          return done(null, false, { message: 'bad username' });
        } else {
          const response = await bcrypt.compare(password, user.password());
          if (response !== true) {
            console.log('password do not match');
            return done(null, false, { message: 'passwords do not match' });
          }
          console.log('user found & authenticated');
          return done(null, user);
        }
      } catch (err) {
        done(err);
      }
    }
  )
);

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: jwtSecret,
};

passport.use(
  'jwt',
  new JWTstrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({
        where: {
          email: jwt_payload.id,
        },
      });
      if (user) {
        console.log('user found in db in passport');
        done(null, user);
      } else {
        console.log('user not found in db');
        done(null, false);
      }
    } catch (err) {
      done(err);
    }
  })
);

import * as passport from 'passport';
const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
import { User } from '../entity/User';

const SECRET_KEY = process.env.SECRET_OR_KEY;
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY
};

passport.use(
  'jwt-authentication',
  new Strategy(options, async (payload, done) => {
    const user = await User.findOne({
      id: payload.id
    });

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
);